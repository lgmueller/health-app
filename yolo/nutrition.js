function openSelection(selection) {
    var i;
    var x = document.getElementsByClassName("custom_vs_preset");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(selection).style.display = "block";  
  }


class Food {

    constructor(name, servings, calories, protein, fat, carbs, date) {
        this.name = name;
        this.servings = servings;
        this.calories = calories;
        this.protein = protein;
        this.fat = fat;
        this.carbs = carbs;
        this.date = date
    }

}

var food_list = []

function addFood() {
    var name = document.getElementById('food_name').value
    var servings = document.getElementById('servings').value
    var calories = document.getElementById('calories').value
    var protein = document.getElementById('protein').value
    var fat = document.getElementById('fat').value
    var carbs = document.getElementById('carbs').value
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // Jan = 0
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;


    if (name != null && servings != null && calories != null)  {
        const food = new Food(name, servings, calories, protein, fat, carbs, today)
        food_list.push(food)
        console.log(food_list[food_list.length-1])
    }
    else {
        alert("Make sure to insert name, servings, and calories")
    }

    var list = document.getElementById("food_list")
    var entry = document.createElement("li")
    entry.appendChild(document.createTextNode(food_list[food_list.length-1].name))
    list.appendChild(entry)
}