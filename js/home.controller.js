'use strict'

applyUserSettings()

function applyUserSettings(){
    applyUserBgColor()
    applyUserTxtColor()
}

function applyUserBgColor(){
    if(!getUserBgColor()) elBody.style.backgroundColor = 'white'
    var elBody = document.querySelector('body')
    elBody.style.backgroundColor = getUserBgColor()
}

function applyUserTxtColor(){
    if(!getUserTxtColor) elBody.style.background = 'red'
    var elText = document.querySelector('body')
    elText.style.color = getUserTxtColor()
}