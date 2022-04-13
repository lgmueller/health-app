

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


function loadInfo() {

    let name = localStorage.getItem("username")

    let age = localStorage.getItem("age")

    let height = localStorage.getItem("height")
    let weight = localStorage.getItem("CurrWeight")
    let sex = localStorage.getItem("sex")
    let experience = localStorage.getItem("experience")

    document.getElementById("username").innerHTML = name == null ? "Eric Fields" : name
    document.getElementById("age").innerHTML = age == null ? "21" : age
    document.getElementById("weight").innerHTML = weight == null ? "77" : weight
    document.getElementById("height").innerHTML = height == null ? "183" : height
    document.getElementById("sex").innerHTML = sex == null ? "Male" : sex
    document.getElementById("experience").innerHTML = experience ==  null ? "Beginner" : experience

}


function loadPlaceholders() {
    let name = localStorage.getItem("username")

    let weight = localStorage.getItem("CurrWeight")
    let height = localStorage.getItem("height")
    let age = localStorage.getItem("age")

    document.getElementById("username").placeholder = name == null ? "Eric" : name
    document.getElementById("weight").placeholder = weight == null ? "77" : weight
    document.getElementById("height").placeholder = height == null ? "183" : height
    document.getElementById("age").placeholder = age == null ? "21" : age

}


function saveInfo() {

    let name = document.getElementById("username").value

    let height = document.getElementById("height").value
    let weight = document.getElementById("weight").value
    let age = document.getElementById("age").value
    let sex = document.getElementById("sex").value
    let experience = document.getElementById("experience").value

    if (name != '') {
        localStorage.setItem("username", name)
    }
    if (age != '') {
        localStorage.setItem("age", age)
    }
    if (height != '') {
        localStorage.setItem("height", height)
    }
    if (weight != '') {
        localStorage.setItem("CurrWeight", weight)
    }
    if (sex != '') {
        localStorage.setItem("sex", sex)
    }
    if (experience != '') {
        localStorage.setItem("experience", experience)
    }

    
    window.location.href = "profile.html";
    
}