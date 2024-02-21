'use strict'

var elUser = null

function onInit() {
    if(elUser) loadFromStorage(elUser)
}


function onSubmit(elForm, ev) {
    ev.preventDefault()
    const formData = new FormData(elForm)

    elUser = getUser(formData); 

    // console.log(elUser);
    // saveToStorage(elUser)
    return elUser
}


function showAge(newVal) {
    document.getElementById('age').innerHTML = newVal
}

