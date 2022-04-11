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


function loadDefaults() {
    
  // adding comment to test something

    default_food_list = '[{"name":"pizza","calories":"600","protein":"14","fat":"30","carbs":"50","date":"04/11/2022"},{"name":"greek yogurt","calories":"200","protein":"30","fat":"10","carbs":"0","date":"04/11/2022"},{"name":"cheeseburger","calories":"500","protein":"10","fat":"40","carbs":"30","date":"04/11/2022"}]'
    default_CurrCal = "1300"
    default_GoalCal = "2500"
    default_CurrExer = "90"
    default_GoalExer = "100"
    default_CurrWeight = "135"
    default_GoalWeight = "150"
    
    
    default_birthday = "2022-04-09"
    default_experience = "intermediate"
    default_height = "183"
    default_sex = "male"
    default_username = "Eric"
  
  localStorage.setItem("food_list", 
    localStorage.getItem("food_list") == null ? default_food_list : localStorage.getItem("food_list")
    )
  localStorage.setItem("CurrCal", 
    localStorage.getItem("CurrCal") == null ? default_CurrCal : localStorage.getItem("CurrCal")
    )
  localStorage.setItem("GoalCal", 
    localStorage.getItem("GoalCal") == null ? default_GoalCal : localStorage.getItem("GoalCal")
    )
  localStorage.setItem("GoalExer", 
      localStorage.getItem("GoalExer") == null ? default_GoalExer : localStorage.getItem("GoalExer")
      )
  localStorage.setItem("CurrExer", 
      localStorage.getItem("CurrExer") == null ? default_CurrExer : localStorage.getItem("CurrExer")
      )
    
  localStorage.setItem("CurrWeight", 
      localStorage.getItem("CurrWeight") == null ? default_CurrWeight : localStorage.getItem("CurrWeight")
      )
  localStorage.setItem("GoalWeight", 
    localStorage.getItem("GoalWeight") == null ? default_GoalWeight : localStorage.getItem("GoalWeight")
    )
  localStorage.setItem("birthday", 
    localStorage.getItem("birthday") == null ? default_birthday : localStorage.getItem("birthday")
    )
  localStorage.setItem("experience", 
    localStorage.getItem("experience") == null ? default_experience : localStorage.getItem("experience")
    )
  localStorage.setItem("height", 
    localStorage.getItem("height") == null ? default_height : localStorage.getItem("height")
    )
  localStorage.setItem("sex", 
    localStorage.getItem("sex") == null ? default_sex : localStorage.getItem("sex")
    )
  localStorage.setItem("username", 
    localStorage.getItem("username") == null ? default_username : localStorage.getItem("username")
    )
  
  
  }



function loadInfo() {

    loadDefaults()


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
    var date_cellNode
    var food_item
    var date

    var i
    for (i = 0; i < food_list.length; i++) {
        food_item = food_list[i]
        name = food_item.name
        calories = food_item.calories
        protein = food_item.protein
        fat = food_item.fat
        carbs = food_item.carbs
        date = food_item.date

        current_calories += parseInt(calories)

        rowNode = document.createElement("tr");
        rowNode.id = "tr_" + i

        cellNode = document.createElement("td");

        var letter_cutoff = 16
        while (name.length > letter_cutoff ) {
            name = name.substring(0,letter_cutoff) + "-\n" + name.substring(letter_cutoff,name.length)
            letter_cutoff = letter_cutoff + 18
        }

        var trash_btn = document.createElement('input');
        trash_btn.type = "image";
        trash_btn.src = "pictures/trash.png";
        trash_btn.id = "trash_" + i
        trash_btn.onclick = function() { 
            let idx = this.id.substring(6,this.id.length)
            console.log(idx)
            //table.deleteRow(rowNode.rowIndex);
            table.deleteRow(idx)
            food_list.splice(idx, 1)
            saveFoodList()
            window.location.href = "nutrition.html";
        };
        cellNode.appendChild(trash_btn);
        rowNode.appendChild(cellNode)

        name_cellNode = document.createElement("td");
        name_textNode = document.createTextNode(name);
        name_cellNode.appendChild(name_textNode);
        rowNode.appendChild(name_cellNode);

        calories_cellNode = document.createElement("td");
        calories_textNode = document.createTextNode(calories);
        calories_cellNode.appendChild(calories_textNode);
        rowNode.appendChild(calories_cellNode);

        date_cellNode = document.createElement("td");
        date_textNode = document.createTextNode(date);
        date_cellNode.appendChild(date_textNode);
        rowNode.appendChild(date_cellNode);
        
        /*
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
        rowNode.appendChild(carbs_cellNode);*/
        
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
        window.location.href = "nutrition.html";
    }
    else {
        alert("Make sure to insert name, servings, and calories")
    }

    saveFoodList()
}

