'use strict'

const USER_DB = 'user-DB'
const gUser = {
    email: '',
    age: '',
    txtColor: '',
    bgColor: '',
    birthDate: '',
    birthTime: ''
}


function saveValue(key, value) {
    gUser[key] = value
    _saveUser()
}

// console.log(gUser);

function getUser(formData){
    for (const pair of formData.entries()) {
        saveValue(pair[0], pair[1])
    }
    var user = structuredClone(gUser)
    return user
}

function _saveUser() {
    // console.log(gUser);
    saveToStorage(USER_DB, gUser)
}