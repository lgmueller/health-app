
class Exercise {
    constructor(sets, reps, my_name){
        this.sets = sets;
        this.reps = reps;
        this.my_name = my_name;
    }
}

class Workout {
    constructor(name, exercises){
        this.name = name;
        this.exercises = exercises;
    }
}

// Preset Workouts for Arms, Legs, Abs
const arm_workout = '{"name":"Beginner Arms","exercises":[{"sets":"4","reps":"8","my_name":"Tricep Extensions"},{"sets":"3","reps":"10","my_name":"Bicep Curls"},{"sets":"3","reps":"8","my_name":"Shoulder Press"},{"sets":"3","reps":"8","my_name":"Bench Press"}]}';
const leg_workout = '{"name":"Beginner Legs","exercises":[{"sets":"3","reps":"8","my_name":"Squats"},{"sets":"3","reps":"8","my_name":"Split Squats"},{"sets":"3","reps":"10","my_name":"Leg Press"},{"sets":"4","reps":"8","my_name":"Reverse Lunges"}]}';
const back_workout = '{"name":"Beginner Back","exercises":[{"sets":"3","reps":"8","my_name":"Tricep Press Downs"},{"sets":"3","reps":"5","my_name":"Bent Over Rows"},{"sets":"3","reps":"8","my_name":"Lateral Raises"}]}';

var list = [];

function savePresetWorkouts(){
    localStorage.setItem('Arms',arm_workout);
    localStorage.setItem('Legs',leg_workout);
    localStorage.setItem('Back',back_workout);
}

function addToList() {

    var set_obj = document.getElementById('sets');
    var rep_obj = document.getElementById('reps');
    var my_name_obj = document.getElementById('nameField');

    var set = document.getElementById('sets').value;
    var rep = document.getElementById('reps').value;
    var my_name = document.getElementById('nameField').value;
    
    if (set != null && rep != null && my_name != null){

        list.push(new Exercise(set,rep,my_name));
        
    } else {
        alert("Sorry! Double check that you've filled out all of the fields.")
        throw new Error("Invalid Input");
    }

    var table = document.getElementById('myTable');
    var rowNode = document.createElement("tr");

    var cellNode = document.createElement("td");
    
    var trash_btn = document.createElement('input');
    trash_btn.type = "image";
    trash_btn.src = "pictures/trash.png";
    trash_btn.onclick = function() { 
        table.deleteRow(rowNode.rowIndex);
    };
    cellNode.appendChild(trash_btn);

    var edit_btn = document.createElement('input');
    edit_btn.type = "image";
    edit_btn.src = "pictures/edit.png";
    edit_btn.onclick = function() { 
        var table_cells = table.rows[rowNode.rowIndex].cells;
        var num_set = table_cells[1].innerHTML;
        var num_rep = table_cells[2].innerHTML;
        var exercise_name = table_cells[3].innerHTML;
        
        set_obj.value = num_set;
        rep_obj.value = num_rep;
        my_name_obj.value = exercise_name;
        table.deleteRow(rowNode.rowIndex);
    };
    cellNode.appendChild(edit_btn);

    rowNode.appendChild(cellNode);

    var set_cellNode = document.createElement("td");
    var set_textNode = document.createTextNode(set);
    set_cellNode.appendChild(set_textNode);
    rowNode.appendChild(set_cellNode);

    var rep_cellNode = document.createElement("td");
    var rep_textNode = document.createTextNode(rep);
    rep_cellNode.appendChild(rep_textNode);
    rowNode.appendChild(rep_cellNode);

    var name_cellNode = document.createElement("td");
    var name_textNode = document.createTextNode(my_name);
    name_cellNode.appendChild(name_textNode);
    rowNode.appendChild(name_cellNode);
    
    table.appendChild(rowNode);

}

function addWorkout() {

    var name = document.getElementById('workout-name').value;
    var exercises = [];
    var table = document.getElementById('myTable');
    var num_set;
    var num_rep;
    var exercise_name;

    for (var i = 1, row; row = table.rows[i]; i++) {
        //iterate through rows
        //skipping first col b/c of edit
        num_set = row.cells[1].innerHTML;
        num_rep = row.cells[2].innerHTML;
        exercise_name = row.cells[3].innerHTML;
        exercises.push(new Exercise(num_set,num_rep,exercise_name));
     }
    var new_workout = new Workout(name, exercises);
    const data = JSON.stringify(new_workout);
    
    localStorage.setItem(name, data);
    
}

function saveWorkoutClicked(name) {
    localStorage.setItem("lastClicked",name);
}

function saveLogWorkoutClicked(name) {
    localStorage.setItem("lastClickedForLog",name);
}

function loadWorkout() {
    var chosen_workout_name = localStorage.getItem("lastClicked");
    var workoutObj = JSON.parse(localStorage.getItem(chosen_workout_name));
    localStorage.setItem("lastClicked","");
    var table = document.getElementById("myTable");

    var top_name = document.getElementById("workout-name");
    top_name.value = chosen_workout_name;
    
    var set;
    var rep;
    var my_name;

    var set_obj = document.getElementById('sets');
    var rep_obj = document.getElementById('reps');
    var my_name_obj = document.getElementById('nameField');

    for (let i = 0; i < workoutObj.exercises.length; i++){
        set = workoutObj.exercises[i].sets;
        rep = workoutObj.exercises[i].reps;
        my_name = workoutObj.exercises[i].my_name;

        var rowNode = document.createElement("tr");
        rowNode.id = i + 1;
        
        var cellNode = document.createElement("td");
        
        var trash_btn = document.createElement('input');
        trash_btn.type = "image";
        trash_btn.id =  i + 1;
        trash_btn.src = "pictures/trash.png";

        trash_btn.onclick = function() { 
            var row = document.getElementById(i + 1);
            
            table.deleteRow(row.rowIndex);
            
        };

        cellNode.appendChild(trash_btn);

        var edit_btn = document.createElement('input');
        edit_btn.type = "image";
        edit_btn.src = "pictures/edit.png";
        edit_btn.onclick = function() { 
            var table_cells = table.rows[rowNode.rowIndex].cells;
            var num_set = table_cells[1].innerHTML;
            var num_rep = table_cells[2].innerHTML;
            var exercise_name = table_cells[3].innerHTML;
            
            set_obj.value = num_set;
            rep_obj.value = num_rep;
            my_name_obj.value = exercise_name;
            var row = document.getElementById(i + 1);
            
            table.deleteRow(row.rowIndex);
            
        };
        cellNode.appendChild(edit_btn);
        rowNode.appendChild(cellNode);

        var set_cellNode = document.createElement("td");
        var set_textNode = document.createTextNode(set);
        set_cellNode.appendChild(set_textNode);
        rowNode.appendChild(set_cellNode);

        var rep_cellNode = document.createElement("td");
        var rep_textNode = document.createTextNode(rep);
        rep_cellNode.appendChild(rep_textNode);
        rowNode.appendChild(rep_cellNode);

        var name_cellNode = document.createElement("td");
        var name_textNode = document.createTextNode(my_name);
        name_cellNode.appendChild(name_textNode);
        rowNode.appendChild(name_cellNode);
        
        table.appendChild(rowNode);
        
    }

}

function logWorkout(name) {
    var chosen_workout_name = localStorage.getItem("lastClickedForLog");
    var workoutObj = JSON.parse(localStorage.getItem(chosen_workout_name));
    localStorage.setItem("lastClickedForLog","");
    var table = document.getElementById("myTable");

    var top_name = document.getElementById("workout-header");
    top_name.innerHTML = chosen_workout_name;
    
    var set;
    var rep;
    var my_name;

    var completed = 0;

    for (let exercise of workoutObj.exercises){
        set = exercise.sets;
        rep = exercise.reps;
        my_name = exercise.my_name;

        var rowNode = document.createElement("tr");

        var cellNode = document.createElement("td");

        var done_btn = document.createElement('input');
        done_btn.type = "image";
        done_btn.src = "pictures/incomplete2.png";
        done_btn.id = "button-done";
        var clicked = true;
        done_btn.onclick = function() { 
            done_btn.src = "pictures/done2.png";
            completed +=1;
            // if (clicked == true){
            //     done_btn.src = "pictures/done2.png";
            //     completed += 1;
            //     clicked = false;
            // } else {
            //     done_btn.src = "pictures/incomplete2.png";
            //     completed -= 1;
            //     clicked = true;
            // }
            if (completed == workoutObj.exercises.length) {
                alert("Congratulations! You Completed your Workout!");
            }
        };
        
        cellNode.appendChild(done_btn);

        rowNode.appendChild(cellNode);

        var set_cellNode = document.createElement("td");
        var set_textNode = document.createTextNode(set);
        set_cellNode.appendChild(set_textNode);
        rowNode.appendChild(set_cellNode);

        var rep_cellNode = document.createElement("td");
        var rep_textNode = document.createTextNode(rep);
        rep_cellNode.appendChild(rep_textNode);
        rowNode.appendChild(rep_cellNode);

        var name_cellNode = document.createElement("td");
        var name_textNode = document.createTextNode(my_name);
        name_cellNode.appendChild(name_textNode);
        rowNode.appendChild(name_cellNode);
        
        table.appendChild(rowNode);
    }
    
}

// function loadSkillLevel() {

// }

function startStop(){
    var btn = document.getElementById("startStopButton");
    startTimer();
    if (btn.innerHTML == "Start"){
        btn.innerHTML = "Finish";
        btn.style.backgroundColor = "#E74C3C";

        resetTimer();
        startTimer();
    } else { 
        btn.innerHTML = "Start";
        btn.style.backgroundColor = "#30D158";
        stopTimer();
    }
}

var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

var hr = 0;
var min = 0;
var sec = 0;

function timerCycle() {
    var timer = document.getElementById("stopwatch");

    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    var timer = document.getElementById("stopwatch");
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}