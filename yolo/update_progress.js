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

function updateProgressCircles () {
    var circle1 = document.getElementById("circle1");
    var nutrition_percentage = 100 * (localStorage.getItem('CurrCal')/localStorage.getItem('GoalCal'));
    
    if (isNaN(nutrition_percentage)) {
      nutrition_percentage = 90;
    }
    circle1.setAttribute('aria-valuenow', nutrition_percentage);
    circle1.setAttribute('style','--value:' + nutrition_percentage );

    var circle2 = document.getElementById("circle2");
    var exercise_percentage = 100 * (localStorage.getItem('CurrExer')/localStorage.getItem('GoalExer'));
    
    if (isNaN(exercise_percentage)) {
      exercise_percentage = 90;
    }
    circle2.setAttribute('aria-valuenow',exercise_percentage);
    circle2.setAttribute('style','--value:' + exercise_percentage);

    var circle3 = document.getElementById("circle3");
    var weight_percentage = 100 * (localStorage.getItem('CurrWeight')/localStorage.getItem('GoalWeight'));
    if (isNaN(weight_percentage)){
      weight_percentage = 90;
    }
    circle3.setAttribute('aria-valuenow',weight_percentage);
    circle3.setAttribute('style','--value:' + weight_percentage);
}

function updateProgressCircles3 () {
  var circle3 = document.getElementById("circle3"); 
  var weight_percentage = 100 * (localStorage.getItem('CurrWeight')/localStorage.getItem('GoalWeight'));
  if (isNaN(weight_percentage)){
    weight_percentage = 90;
  }
  circle3.setAttribute('aria-valuenow',weight_percentage);
  circle3.setAttribute('style','--value:' + weight_percentage);
}

function updateProgressCircles2 () {
  var circle2 = document.getElementById("circle2"); 
  var weight_percentage = 100 * (localStorage.getItem('CurrExer')/localStorage.getItem('GoalExer'));
  if (isNaN(weight_percentage)){
    weight_percentage = 90;
  }
  circle2.setAttribute('aria-valuenow',weight_percentage);
  circle2.setAttribute('style','--value:' + weight_percentage);
}



function updateValues() {
    var get_goal_weight = localStorage.getItem("GoalWeight");
    if (localStorage.getItem("GoalWeight") == null) {
      get_goal_weight = 150;
    }
    document.getElementById("new_goal_weight").innerHTML =  get_goal_weight + " lbs";
    
    var get_curr_weight = localStorage.getItem("CurrWeight");
    if (localStorage.getItem("CurrWeight") == null) {
      get_curr_weight = 135;
    }
    document.getElementById("new_curr_weight").innerHTML =  get_curr_weight + " lbs";

    var get_goal_cal = localStorage.getItem("GoalCal");
    if (localStorage.getItem("GoalCal") == null) {
      get_goal_cal = 2500;
    }
    document.getElementById("new_goal_cal").innerHTML =  get_goal_cal + " Calories";

    var get_curr_cal = localStorage.getItem("CurrCal");
    if (localStorage.getItem("CurrCal") == null) {
      get_curr_cal = 2250;
    }
    document.getElementById("new_curr_cal").innerHTML =  get_curr_cal + " Calories";

    
    /*
    document.getElementById("progress_circle_nutrition").setAttribute("aria-valuenow", get_curr_cal.toString());
    document.getElementById("progress_circle_nutrition").setAttribute("style", "--value: "+get_curr_cal.toString());
  */ 
 /*
    var test = document.getElementById("progress_circle_nutrition").getAttribute("aria-valuenow");
    console.log(test)
    document.getElementById("progress_circle_nutrition").getAttribute("style", "--value: 78");*/

    
    var get_goal_exer = localStorage.getItem("GoalExer");
    if (localStorage.getItem("GoalExer") == null) {
      get_goal_exer = 100;
    }
    document.getElementById("new_goal_exer").innerHTML =  get_goal_exer + " Minutes";

    var get_curr_exer = localStorage.getItem("CurrExer");
    if (localStorage.getItem("CurrExer") == null) {
      get_curr_exer = 90;
    }
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


 
  function updateNutritionValues() {
    var get_goal_cal = localStorage.getItem("GoalCal");
    if (localStorage.getItem("GoalCal") == null) {
      get_goal_cal = 2500;
    }
    document.getElementById("new_goal_cal").innerHTML =  get_goal_cal + " Calories";
    var get_curr_cal = localStorage.getItem("CurrCal");
    if (localStorage.getItem("CurrCal") == null) {
      get_curr_cal = 2250;
    }
    document.getElementById("new_curr_cal").innerHTML =  get_curr_cal + " Calories";
  }


 

  function updateWeightValues() {
    var get_goal_weight = localStorage.getItem("GoalWeight");
    if (localStorage.getItem("GoalWeight") == null) {
      get_goal_weight = 150;
    }
    document.getElementById("new_goal_weight").innerHTML =  get_goal_weight + " lbs";
    var get_curr_weight = localStorage.getItem("CurrWeight");
    if (localStorage.getItem("CurrWeight") == null) {
      get_curr_weight = 135;
    }
    document.getElementById("new_curr_weight").innerHTML =  get_curr_weight + " lbs";
  }

 


  function updateExerValues() {
    var get_goal_exer = localStorage.getItem("GoalExer");
    if (localStorage.getItem("GoalExer") == null) {
      get_goal_exer = 100;
    }
    document.getElementById("new_goal_exer").innerHTML =  get_goal_exer + " Minutes";
    var get_curr_exer = localStorage.getItem("CurrExer");
    if (localStorage.getItem("CurrExer") == null) {
      get_curr_exer = 90;
    }
    document.getElementById("new_curr_exer").innerHTML =  get_curr_exer + " Minutes";
  }

  function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  //Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  
  /*
    NUTRITION PAGE
  */


new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["4/11", "4/12", "4/13", "4/14", "4/15", "4/16", "4/17"],
      datasets: [
        {
          label: "Number of Calories",
          backgroundColor: ["#8e95e7", "#8e95e7", "#8e95e7", "#8e95e7", "#8e95e7","#8e95e7", "#8e95e7"],
          data: [2000, 2005, 1823, 2349, 2312, 1923, 2032]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Weekly Number of Calories'
      }
    }
});

new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    text: "Weeks",
    labels: ['Week 1','Week 2','Week 3','Week 4'],
    datasets: [{ 
        label: "Number of Calories",
        data: [2192, 2239, 2432, 2499],
        borderColor: "#8e95e7",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Monthly Calorie Count'
    }
  }
});

/* WEIGHT PAGE */
new Chart(document.getElementById("bar-chart2"), {
  type: 'bar',
  data: {
    labels: ["4/11", "4/12", "4/13", "4/14", "4/15", "4/16", "4/17"],
    datasets: [
      {
        label: "Weight (lbs)",
        backgroundColor: ["#8e95e7", "#8e95e7", "#8e95e7", "#8e95e7", "#8e95e7","#8e95e7", "#8e95e7"],
        data: [133, 133, 132, 136, 140, 141, 102]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Weekly Weight Count'
    }
  }
});

new Chart(document.getElementById("line-chart2"), {
type: 'line',
data: {
  text: "Weeks",
  labels: ['Week 1','Week 2','Week 3','Week 4'],
  datasets: [{ 
      label: "Weight (lbs)",
      data: [131,134, 133, 136],
      borderColor: "#8e95e7",
      fill: false
    }
  ]
},
options: {
  title: {
    display: true,
    text: 'Monthly Weight Count'
  }
}
});


/* EXERCISE PAGE */
new Chart(document.getElementById("bar-chart3"), {
  type: 'bar',
  data: {
    labels: ["4/11", "4/12", "4/13", "4/14", "4/15", "4/16", "4/17"],
    datasets: [
      {
        label: "Exercise Duration (minutes)",
        backgroundColor: ["#8e95e7", "#8e95e7", "#8e95e7", "#8e95e7", "#8e95e7","#8e95e7", "#8e95e7"],
        data: [65, 80, 62, 99, 90, 85, 75]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Weekly Exercise Duration'
    }
  }
});

new Chart(document.getElementById("line-chart3"), {
type: 'line',
data: {
  text: "Weeks",
  labels: ['Week 1','Week 2','Week 3','Week 4'],
  datasets: [{ 
      label: "Exercise Duration (minutes)",
      data: [81, 67, 92, 85],
      borderColor: "#8e95e7",
      fill: false
    }
  ]
},
options: {
  title: {
    display: true,
    text: 'Monthly Exercise Duration'
  }
}
});