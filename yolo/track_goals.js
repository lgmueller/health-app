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


function myWeightFunction() {
    var x = document.getElementById("weight_text").value;
    document.getElementById("weight_p").innerHTML = x + " lbs";

}

  function myWeightFunction1() {
    var y = document.getElementById("weight_text1").value;
    document.getElementById("weight_p1").innerHTML = y + " lbs";

  }


function myCalFunction() {
    var x = document.getElementById("cal_text").value;
    document.getElementById("cal_p").innerHTML = x + " Calories";
  }

  function myCalFunction1() {
    var y = document.getElementById("cal_text1").value;
    document.getElementById("cal_p1").innerHTML = y + " Calories";
  }

function myExerFunction() {
    var x = document.getElementById("exer_text").value;
    document.getElementById("exer_p").innerHTML = x + " Minutes";

  }

  function myExerFunction1() {
    var y = document.getElementById("exer_text1").value;
    document.getElementById("exer_p1").innerHTML = y + " Minutes";
  }