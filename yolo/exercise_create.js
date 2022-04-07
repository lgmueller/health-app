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

var list = [];
var workouts = [];

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
    list.push(rowNode);

}

function addWorkout() {
    var name = document.getElementById('workout-name').value;
    var exercises = [];
    var table = document.getElementById('myTable');
    var num_set;
    var num_rep;
    var exercise_name;

    for (let row of table.rows) {
        //iterate through rows
        //skipping first col b/c of edit
        num_set = row[1];
        num_rep = row[2];
        exercise_name = row[3];
        exercises.push(new Exercise(num_set,num_rep,exercise_name));
     }
    workouts.push(new Workout(name, exercises));
    alert(workouts);
}