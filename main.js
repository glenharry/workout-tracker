// Exercise Form inputs
const exerciseNameInput = document.querySelector("#name");
const weight = document.querySelector("#weight");
const setOneInput = document.querySelector("#setOneReps");
const setTwoInput = document.querySelector("#setTwoReps");
const setThreeInput = document.querySelector("#setThreeReps");
const setWeightOne = document.querySelector("#setWeightOne");
const setWeightTwo = document.querySelector("#setWeightTwo");
const setWeightThree = document.querySelector("#setWeightThree");

// Exercise List
const exerciseList = document.querySelector(".exercise-list");

// Exercise form submit button
const button = document.querySelector("button");

// Exercise Array
let exercises = [];

// Create record of specific exercise
function handleButtonClick(e) {
    e.preventDefault();
    createExercise();
    // exercises.forEach(printExercises);
    printExercises();
}

function createExercise() {
    // Create unique ID based on time and date
    let exerciseID = Date.now();

    // Create Exercise Class
    class exercise {
        constructor(
            id,
            name,
            weight,
            setOneReps,
            setTwoReps,
            setThreeReps,
            setWeightOne,
            setWeightTwo,
            setWeightThree
        ) {
            this.id = id;
            this.name = name;
            this.weight = weight;
            this.setOneReps = setOneReps;
            this.setTwoReps = setTwoReps;
            this.setThreeReps = setThreeReps;
            this.setWeightOne = setWeightOne;
            this.setWeightTwo = setWeightTwo;
            this.setWeightThree = setWeightThree;
        }
    }
    // Assigns values to newly created class from form inputs
    let ex1 = new exercise(
        exerciseID,
        exerciseNameInput.value,
        weight.value,
        setOneInput.value,
        setTwoInput.value,
        setThreeInput.value,
        setWeightOne.value,
        setWeightTwo.value,
        setWeightThree.value
    );
    exercises.push(ex1);
    // Test
    console.log(exercises);
}

function printExercises() {
    let li = document.createElement("li");
    for (let i = 0; i < exercises.length; i += 1) {
        li.innerHTML = `
            <h3 class="exercise-list--name">${exercises[i].name}</h3>
            <h4 class="exercise-list--weight">${exercises[i].weight}</h4>
            <ul class="exercise-list--set">
                <li class="exercise-list--reps">${exercises[i].setOneReps} @ ${exercises[i].weight}</li>
                <li class="exercise-list--reps">${exercises[i].setTwoReps} @ ${exercises[i].weight}</li>
                <li class="exercise-list--reps">${exercises[i].setThreeReps} @ ${exercises[i].weight}</li>
            </ul>
        `;
        exerciseList.appendChild(li);
    }
}

// Exercise submit button
button.addEventListener("click", handleButtonClick);

// Functionality ideas
//   KG moved per minute stats
