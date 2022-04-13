

var click_count = 0

function showKeyboard() {
  var keyboard = document.getElementById("keyboard")
  keyboard.style = "display: block"
  click_count = 0
}

function hideKeyboard() {
  var keyboard = document.getElementById("keyboard")
  if (keyboard.style.display == "block" && click_count == 0) {
    click_count += 1;
  }
  else {
    click_count = 0
    keyboard.style = "display: none"
  }
  
}



function openSelection(selection) {
    var i;
    var x = document.getElementsByClassName("custom_vs_preset");
    var y = document.getElementsByClassName("tablink")
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
      y[i].style.backgroundColor = "#8e95e7"
    }
    document.getElementById(selection).style.display = "block";  

    document.getElementById(selection+"_tab").style.backgroundColor = "#433495";

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
    

  default_food_list = '[{"name":"pizza","calories":"600","protein":"14","fat":"30","carbs":"50","date":"04/11/2022"},{"name":"greek yogurt","calories":"200","protein":"30","fat":"10","carbs":"0","date":"04/11/2022"},{"name":"cheeseburger","calories":"500","protein":"10","fat":"40","carbs":"30","date":"04/11/2022"}]'
  default_CurrCal = "1300"
  default_GoalCal = "2500"
  default_CurrExer = "90"
  default_GoalExer = "100"
  default_CurrWeight = "135"
  default_GoalWeight = "150"
  
  
  default_age = "21"
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
localStorage.setItem("age", 
  localStorage.getItem("age") == null ? default_age : localStorage.getItem("age")
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


function clearSelects(curr_idx) {
  var selects = document.getElementsByClassName("selection")
  var i
  for (i = 0; i < selects.length; i++) {
    if (i != curr_idx) {
      selects[i].value = ""
    }
  }

}

  // eggs, bacon, toast, ham_sandwich, salad, quesadilla
  // pizza, chicken, steak
var food_dictionary = {
  "eggs" : {
    "preset_food_name" : "eggs",
    "preset_calories" : 100,
    "preset_protein" : 10,
    "preset_fat" : 4,
    "preset_carbs" : 2
  },
  "bacon" : {
    "preset_food_name" : "bacon",
    "preset_calories" : 250,
    "preset_protein" : 12,
    "preset_fat" : 20,
    "preset_carbs" : 4
  },
  "toast" : {
    "preset_food_name" : "toast",
    "preset_calories" : 80,
    "preset_protein" : 1,
    "preset_fat" : 1,
    "preset_carbs" : 5
  },
  "ham_sandwich" : {
    "preset_food_name" : "ham sandwich",
    "preset_calories" : 400,
    "preset_protein" : 15,
    "preset_fat" : 23,
    "preset_carbs" : 20
  },
  "caesar_salad" : {
    "preset_food_name" : "caesar salad",
    "preset_calories" : 100,
    "preset_protein" : 6,
    "preset_fat" : 5,
    "preset_carbs" : 6
  },
  "quesadilla" : {
    "preset_food_name" : "quesadilla",
    "preset_calories" : 350,
    "preset_protein" : 10,
    "preset_fat" : 17,
    "preset_carbs" : 14
  },
  "pizza" : {
    "preset_food_name" : "pizza",
    "preset_calories" : 220,
    "preset_protein" : 10,
    "preset_fat" : 25,
    "preset_carbs" : 20
  },
  "chicken_wings" : {
    "preset_food_name" : "chicken wings",
    "preset_calories" : 300,
    "preset_protein" : 25,
    "preset_fat" : 17,
    "preset_carbs" : 8
  },
  "steak" : {
    "preset_food_name" : "steak",
    "preset_calories" : 400,
    "preset_protein" : 25,
    "preset_fat" : 25,
    "preset_carbs" : 10
  }
}

var preset_click_count = 0

function showPresetKeyboard() {
  var keyboard = document.getElementById("keyboard_preset")
  keyboard.style = "display: block"
  preset_click_count = 0

  document.getElementById("preset_information").style = "font-size: 30px; display: none"
}

function hidePresetKeyboard() {
  var keyboard = document.getElementById("keyboard_preset")
  if (keyboard.style.display == "block" && preset_click_count == 0) {
    preset_click_count += 1;
  }
  else {
    preset_click_count = 0
    keyboard.style = "display: none"
    document.getElementById("preset_information").style = "font-size: 30px; display: block"
  }
  
}



function managePresetView() {
  var selects = document.getElementsByClassName("selection")
  var i
  var value = ""
  var option_selected = false
  for (i = 0; i < selects.length; i++) {
    
      if (selects[i].value != "") {
        option_selected = true
        value = selects[i].value
        
      }
  }



  if (option_selected) {

    console.log(value)
    console.log(food_dictionary[value])

    document.getElementById("preset_food_name").innerHTML = "Food name: " + food_dictionary[value]["preset_food_name"]
    document.getElementById("preset_calories").innerHTML = "Calories per serving: " + food_dictionary[value]["preset_calories"]
    document.getElementById("preset_protein").innerHTML = "Protein per serving (g): " + food_dictionary[value]["preset_protein"]
    document.getElementById("preset_fat").innerHTML = "Fats per serving (g): " + food_dictionary[value]["preset_fat"]
    document.getElementById("preset_carbs").innerHTML = "Carbs per serving (g): " + food_dictionary[value]["preset_carbs"]

  }
}


// value is the name of the food
function addPresetFood() {

  // to get value
  var selects = document.getElementsByClassName("selection")
  var i
  var value = ""
  var option_selected = false
  for (i = 0; i < selects.length; i++) {
    
      if (selects[i].value != "") {
        option_selected = true
        value = selects[i].value
        
      }
  }

  if (option_selected) {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // Jan = 0
    var yyyy = today.getFullYear();
  
    today = mm + '/' + dd + '/' + yyyy;
  
    let servings = document.getElementById('servings').value
  
  
  
    food_list.push(
      new Food(food_dictionary[value]["preset_food_name"], 
      servings*food_dictionary[value]["preset_calories"], 
      servings*food_dictionary[value]["preset_protein"],
      servings*food_dictionary[value]["preset_fat"], 
      servings*food_dictionary[value]["preset_carbs"], today))
  
    
    saveFoodList()
  
    window.location.href = "nutrition.html";
  }
  else {
    alert("Make sure to select a single food item!")
  }

 


}