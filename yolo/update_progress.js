/*

var $ = function(id) {
    return document.getElementById(id)
}

var feelings = function()
{    
    $("myresponse").focus();

    var mypara = document.createElement("p");
    var myparent = $("mydiv");

    myparent.appendChild(mypara);

    var myText = document.createTextNode($("myresponse").value);

    mypara.setAttribute("id", "displayedresponse");

    mypara.appendChild(myText);

    $("displayedresponse").appendChild(myText);    
}

window.onload = function() {

    $("showresponse").onclick = feelings;
}
*/

function getGoalWeight() {
    var get_curr_weight = localStorage.getItem("GoalWeight");
    document.getElementById("new_goal_weight").innerHTML =  get_curr_weight + " lbs";
    var get_curr_weight = localStorage.getItem("CurrWeight");
    document.getElementById("new_curr_weight").innerHTML =  get_curr_weight + " lbs";

    var get_goal_cal = localStorage.getItem("GoalCal");
    document.getElementById("new_goal_cal").innerHTML =  get_goal_cal + " Calories";
    var get_curr_cal = localStorage.getItem("CurrCal");
    document.getElementById("new_curr_cal").innerHTML =  get_curr_cal + " Calories";

    var get_goal_exer = localStorage.getItem("GoalExer");
    document.getElementById("new_goal_exer").innerHTML =  get_goal_exer + " Minutes";
    var get_curr_exer = localStorage.getItem("CurrExer");
    document.getElementById("new_curr_exer").innerHTML =  get_curr_exer + " Minutes";
    

    
}

function myWeightFunction() {
    var x = document.getElementById("weight_text").value;
    document.getElementById("weight_p").innerHTML = x + " lbs";
    localStorage.setItem("GoalWeight", x);
    var table_goal_weight = document.getElementById("new_goal_weight");
    table_goal_weight.innerHTML = x + " lbs";
}

  function myWeightFunction1() {
    var x = document.getElementById("weight_text1").value;
    document.getElementById("weight_p1").innerHTML = x + " lbs";
    localStorage.setItem("CurrWeight", x);
    var table_curr_weight = document.getElementById("new_curr_weight");
    table_curr_weight.innerHTML = x + " lbs";
  }


function myCalFunction() {
    var x = document.getElementById("cal_text").value;
    document.getElementById("cal_p").innerHTML = x + " Calories";
    localStorage.setItem("GoalCal", x);
    var table_goal_cal = document.getElementById("new_goal_cal");
    table_goal_cal.innerHTML = x + " Calories";
  }

  function myCalFunction1() {
    var x = document.getElementById("cal_text1").value;
    document.getElementById("cal_p1").innerHTML = x + " Calories";
    localStorage.setItem("CurrCal", x);
    var table_curr_cal = document.getElementById("new_curr_cal");
    table_curr_cal.innerHTML = x + " Calories";
  }

function myExerFunction() {
    var x = document.getElementById("exer_text").value;
    document.getElementById("exer_p").innerHTML = x + " Minutes";
    localStorage.setItem("GoalExer", x);
    var table_goal_exer = document.getElementById("new_goal_exer");
    table_goal_exer.innerHTML = x + " Minutes";
  }

  function myExerFunction1() {
    var x = document.getElementById("exer_text1").value;
    document.getElementById("exer_p1").innerHTML = x + " Minutes";
    localStorage.setItem("CurrExer", x);
    var table_curr_exer = document.getElementById("new_curr_exer");
    table_curr_exer.innerHTML = x + " Minutes";
  }