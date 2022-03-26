// Exercise Form inputs
const exerciseNameInput = document.querySelector("#name");
const weight = document.querySelector("#weight");
const plannedReps = document.querySelector("#plannedReps");
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
            setWeightThree,
            plannedVolume,
            plannedReps
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
            this.plannedVolume = plannedVolume;
            this.plannedReps = plannedReps;
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
        setWeightThree.value,
        (plannedVolume =
            plannedReps.value *
            (parseInt(setWeightOne.value) +
                parseInt(setWeightTwo.value) +
                parseInt(setWeightThree.value))),
        plannedReps.value
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
            <h4 class="exercise-list--weight">Planned Weight ${exercises[i].weight}</h4>
            <h5 class="exercise-list--planned-volume">Planned Volume: ${plannedVolume}</h5>
            <h5 class="exercise-list--total-volume">Total Volume: ${exercises[i].weight}</h5>
            <ul class="exercise-list--set">
                <li class="exercise-list--reps">${exercises[i].setOneReps} @ ${exercises[i].setWeightOne}</li>
                <li class="exercise-list--reps">${exercises[i].setTwoReps} @ ${exercises[i].setWeightTwo}</li>
                <li class="exercise-list--reps">${exercises[i].setThreeReps} @ ${exercises[i].setWeightThree}</li>
            </ul>
        `;
        exerciseList.appendChild(li);
    }
}

// Prefil Rep weight Function
function prefillRepWeight(setWeight) {
    setWeight = weight.value;
    setWeightOne.value = setWeight;
    setWeightTwo.value = setWeight;
    setWeightThree.value = setWeight;
    console.log(setWeight);
}

// Exercise submit button
button.addEventListener("click", handleButtonClick);

// Exercise weight field
weight.addEventListener("change", prefillRepWeight);

// Tests
function test() {
    function prefillFields() {
        (exerciseNameInput.value = "Press Up"),
            (weight.value = 20),
            (plannedReps.value = 10),
            (setOneInput.value = 10),
            (setTwoInput.value = 10),
            (setThreeInput.value = 10),
            (setWeightOne.value = weight.value),
            (setWeightTwo.value = weight.value),
            (setWeightThree.value = 30);
    }
    prefillFields();
    createExercise();
    printExercises();
}
test();

// Functionality ToDos
// Functionality ToDos
// Functionality ToDos

// IDEA
//  Add in a PLUS button to add additional sets
//      Convert setOneInput, setTwoInput, setThreeInput and setWeightOne, setWeightTwo, setWeightThree
//      into arrays. Then when you click the PLUS button it will just push a new item to the array

// IDEA
// Do I want to hard record all of the data into some form of a table?
// Or
// Do I want to create set Routines that I can fill out?

// IDEA
// Once you have hit your expected volume a few times in a row. The app should reccomend a new volume.
