

function loadInfo() {

    let name = localStorage.getItem("username")

    let age = localStorage.getItem("age")
    let height = localStorage.getItem("height")
    let sex = localStorage.getItem("sex")
    let birthday = localStorage.getItem("birthday")
    let experience = localStorage.getItem("experience")

    document.getElementById("username").innerHTML = name == null ? "Eric Fields" : name
    document.getElementById("age").innerHTML = age == null ? "21" : age
    document.getElementById("height").innerHTML = height == null ? "183" : height
    document.getElementById("sex").innerHTML = sex == null ? "Male" : sex
    document.getElementById("birthday").innerHTML = birthday == null ? "June 4, 2000" : birthday
    document.getElementById("experience").innerHTML = experience ==  null ? "Beginner" : experience

}


function loadPlaceholders() {
    let name = localStorage.getItem("username")

    let age = localStorage.getItem("age")
    let height = localStorage.getItem("height")

    document.getElementById("username").placeholder = name == null ? "Eric" : name
    document.getElementById("age").placeholder = age == null ? "21" : age
    document.getElementById("height").placeholder = height == null ? "183" : height

}


function saveInfo() {

    let name = document.getElementById("username").value

    let age = document.getElementById("age").value
    let height = document.getElementById("height").value
    let sex = document.getElementById("sex").value
    let birthday = document.getElementById("birthday").value
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
if (sex != '') {
    localStorage.setItem("sex", sex)
}
if (birthday != '') {
    localStorage.setItem("birthday", birthday)
}
if (experience != '') {
    localStorage.setItem("experience", experience)
}

    
    console.log(age)
    console.log(height)
    console.log(sex)
    console.log(birthday)
    console.log(experience)
    window.location.href = "profile.html";
    
}