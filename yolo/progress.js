function openSelection(selection) {
    var i;
    var x = document.getElementsByClassName("Nutrition_vs_Excercise");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(selection).style.display = "block";  
  }

  function copyToClipBoard() {

    var content = document.getElementById('textArea');
    
    content.select();
    document.execCommand('copy');

    alert("Copied!");
}


/*var calorie_goal = 2000
var workout_goal = 



function setCalorieGoal(newGoal) {
    calorie_gal = newGoal
} */

