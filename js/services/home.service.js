

const USER_DB = 'user-DB'


var gUser = loadFromStorage(USER_DB)
console.log(gUser.bgColor);

function getUserEmail() {
    return gUser.email
}
function getUserAge() {
    return gUser.age
}
function getUserBgColor() {
    return gUser.bgColor
}
function getUserTxtColor() {
    return gUser.txtColor
}
function getUserBirthday() {
    return gUser.birthDate
}
function getUserBirthTime() {
    return gUser.birthTime
}