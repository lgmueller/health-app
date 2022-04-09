function openSelection(selection) {
    var i;
    var x = document.getElementsByClassName("custom_vs_preset");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(selection).style.display = "block";  
  }


class Food {

    constructor(name, calories, protein, fat, carbs, date) {
        this.name = name;
        this.calories = calories;
        this.protein = protein;
        this.fat = fat;
        this.carbs = carbs;
        this.date = date
    }

}

var food_list = loadFoodList()

function saveFoodList() {
    localStorage.setItem("food_list", JSON.stringify(food_list))
}

function loadFoodList() {
    fetched_food_list = JSON.parse(localStorage.getItem("food_list") || "[]")
    return fetched_food_list
}

function loadInfo() {
    loadFoodList()

    var current_calories = 0
    
    // stuff for loading table
    var table = document.getElementById('myTable')
    var name
    var calories
    var protein
    var fat
    var carbs
    var rowNode
    var cellNode
    var name_cellNode 
    var name_textNode
    var food_item

    var i
    for (i = 0; i < food_list.length; i++) {
        food_item = food_list[i]
        name = food_item.name
        calories = food_item.calories
        protein = food_item.protein
        fat = food_item.fat
        carbs = food_item.carbs

        current_calories += parseInt(calories)

        rowNode = document.createElement("tr");

        cellNode = document.createElement("td");

        var letter_cutoff = 6
        while (name.length >= letter_cutoff ) {
            name = name.substring(0,letter_cutoff) + "-\n" + name.substring(letter_cutoff,name.length)
            letter_cutoff = letter_cutoff + 8
        }

        name_cellNode = document.createElement("td");
        name_textNode = document.createTextNode(name);
        name_cellNode.appendChild(name_textNode);
        rowNode.appendChild(name_cellNode);

        calories_cellNode = document.createElement("td");
        calories_textNode = document.createTextNode(calories);
        calories_cellNode.appendChild(calories_textNode);
        rowNode.appendChild(calories_cellNode);

        protein_cellNode = document.createElement("td");
        protein_textNode = document.createTextNode(protein);
        protein_cellNode.appendChild(protein_textNode);
        rowNode.appendChild(protein_cellNode);

        fat_cellNode = document.createElement("td");
        fat_textNode = document.createTextNode(fat);
        fat_cellNode.appendChild(fat_textNode);
        rowNode.appendChild(fat_cellNode);

        carbs_cellNode = document.createElement("td");
        carbs_textNode = document.createTextNode(carbs);
        carbs_cellNode.appendChild(carbs_textNode);
        rowNode.appendChild(carbs_cellNode);
        
        table.appendChild(rowNode);
    }

    localStorage.setItem("CurrCal", JSON.stringify(current_calories))

    var table_header = document.getElementById("table_header")
    table_header.innerHTML = "Today's Meals (" + localStorage.getItem("CurrCal") + " total calories)"

    // stuff for loading pie charts
    /*
    cal_goal = localStorage.getItem('GoalCal') == null ? 2000 : localStorage.getItem('GoalCal')
    var circle1 = document.getElementById("circle1");
    var calorie_percentage = 100 * (localStorage.getItem('CurrCal')/cal_goal);

    if (isNaN(calorie_percentage)) {
        calorie_percentage = 90;
    }

    circle1.setAttribute('aria-valuenow', calorie_percentage);
    circle1.setAttribute('style','--value:' + calorie_percentage);

    document.getElementById("new_curr_cal").innerHTML =  localStorage.getItem('CurrCal') + " Calories";
    document.getElementById("new_goal_cal").innerHTML =  cal_goal + " Calories";*/
}


function addFood() {
    var name = document.getElementById('food_name').value
    var calories = document.getElementById('calories').value
    var protein = document.getElementById('protein').value
    var fat = document.getElementById('fat').value
    var carbs = document.getElementById('carbs').value
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // Jan = 0
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;


    if (name != '' && calories != '')  {
        const food = new Food(name, calories, protein, fat, carbs, today)
        food_list.push(food)

        var list = document.getElementById("food_list")
        var entry = document.createElement("li")
        entry.appendChild(document.createTextNode(food_list[food_list.length-1].name))
        list.appendChild(entry)
    }
    else {
        alert("Make sure to insert name, servings, and calories")
    }

    saveFoodList()
}

function loadPieChart() {



}