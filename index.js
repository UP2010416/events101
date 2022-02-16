'use strict';
/**
 * Add your functions here...
 */

function targetTextToConsole(event){
    console.log(event.target.textContent)
}

function tttcAttacher(){
    const button = document.querySelector("#button0")
    button.addEventListener('click',targetTextToConsole)
}

function lovelyParaAttacher(){
    const element = document.querySelector("#thisisalovelyparagraph")
    element.addEventListener('click', lovelyToggle)
}

function lovelyButtonAttacher(){
    const button = document.querySelector("#button1")
    button.addEventListener('click', lovelyToggle)
}

function inputHandler(){
    const output = document.querySelector("#out1")
    const input1 = document.querySelector("#in1").value
    const input2 = document.querySelector("#in2").value
    if(input1 && input2){
        output.textContent = `${input1}`+`${input2}`
    }
}

function concatAttacher(){
    const input1 = document.querySelector("#in1")
    const input2 = document.querySelector("#in2")
    input1.addEventListener('change', inputHandler)
    input2.addEventListener('change', inputHandler)
}

function snitchAttacher(){
    const mouseWatcher = document.querySelector("#mousewatcher")
    mouseWatcher.addEventListener('mouseover', snitchUpdater)
    mouseWatcher.addEventListener('mouseout', snitchUpdater)
}

function reportUpdater(event){
    const report = document.querySelector("#report")
    report.textContent=`x: ${event.screenX} y: ${event.screenY}`
}

function reportAttacher(){
    const mouseReporter = document.querySelector("#mousereporter")
    mouseReporter.addEventListener('mousemove', reportUpdater)
    
}

function checkSpaceHandler(event){
    const newID=document.querySelector("#newid")
    if(event.target.value.indexOf(' ') >= 0){
        newID.classList.add("invalid")
        console.log(event.target.value)
    } else {
        newID.classList.remove("invalid")
    }
}

function idValidationAttacher(){
    const newID=document.querySelector("#newid")
    newID.addEventListener('input', checkSpaceHandler)
}