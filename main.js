// Exercise Form inputs
const exerciseNameInput = document.querySelector("#name");
const setOneInput = document.querySelector("#setOneReps");
const setTwoInput = document.querySelector("#setTwoReps");
const setThreeInput = document.querySelector("#setThreeReps");

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
    printExercises();
}

function createExercise() {
    // Create unique ID based on time and date
    let exerciseID = Date.now();

    // Create Exercise Class
    class exercise {
        constructor(id, name, setOneReps, setTwoReps, setThreeReps) {
            this.id = id;
            this.name = name;
            this.setOneReps = setOneReps;
            this.setTwoReps = setTwoReps;
            this.setThreeReps = setThreeReps;
        }
    }
    // Assigns values to newly created class from form inputs
    let ex1 = new exercise(
        exerciseID,
        exerciseNameInput.value,
        setOneInput.value,
        setTwoInput.value,
        setThreeInput.value
    );
    exercises.push(ex1);
    // Test
    console.log(exercises);
}

function printExercises() {
    let exerciseListItem = ``;
    exerciseListItem = `
<li>
<h3 class="exercise-list--name"></h3>
<h4 class="exercise-list--weight"></h4>
<ul class="exercise-list--set">
    <li class="exercise-list--reps"></li>
    <li class="exercise-list--reps"></li>
    <li class="exercise-list--reps"></li>
</ul>
</li>
`;
    document.createElement("li");
}

// Exercise submit button
button.addEventListener("click", handleButtonClick);

// Functionality ideas
//   KG moved per minute stats
