function handleEditProfile(){

    new Datepicker('#Birthday');

    var updateName = document.getElementById("input-name")
    var value1 = document.getElementById("name").textContent
    updateName.value = value1

    var updateEmail = document.getElementById("input-email")
    var value2 = document.getElementById("email").textContent
    updateEmail.value = value2

    var updateInterest = document.getElementById("input-interest")
    var value3 = document.getElementById("interest").textContent
    updateInterest.value = value3
     
    document.getElementById("update-container").style.display = "block"
    document.getElementById("main-container").style.display = "none"
}

function handleUpdateProfile(){
    var updateName = document.getElementById("input-name").value
    var value1 = document.getElementById("name")
    value1.textContent = updateName

    var updateEmail = document.getElementById("input-email").value
    var value2 = document.getElementById("email")
    if(validator.isEmail(updateEmail)){
        value2.textContent = updateEmail
    }else{
        alert("wrong email format")
    }

    var updateInterest = document.getElementById("input-interest").value
    var value3 = document.getElementById("interest")
    value3.textContent = updateInterest
    
    document.getElementById("update-container").style.display = "none"
    document.getElementById("main-container").style.display = "block"
    
}