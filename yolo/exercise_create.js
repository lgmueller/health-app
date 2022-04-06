class Exercise {
    constructor(sets, reps, my_name){
        this.sets = sets;
        this.reps = reps;
        this.my_name = my_name;
    }
}


var list = [];
var text = [];

function addToList() {
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
    var btn = document.createElement('input');
    btn.type = "image";
    btn.src = "pictures/trash.png";
    btn.onclick = function() { if (btn.rowIndex != 0){ table.deleteRow(btn.rowIndex); }};
    cellNode.appendChild(btn);
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
    // for (let i = 0; i < list.length; i++){
    //     // text_list.push(list[i].sets + '     ' + list[i].reps + '      ' + list[i].my_name + '<br />');
    //     // var table = document.getElementById('myTable');
        
    // }


    // document.getElementById('workout_table').innerHTML = work;
}
