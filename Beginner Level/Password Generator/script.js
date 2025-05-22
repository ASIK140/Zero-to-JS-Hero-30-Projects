let charector="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number="0987654321"
let spaCharector="!@#$%^&*()?"

const lengthField=document.getElementById("length")
const charBox=document.getElementById("char")
const numberBox=document.getElementById("num")
const spaCharBox=document.getElementById("spaChar")
const passField=document.getElementById("pass")
function generatePass(length,isChar,isNumber,isSpacial){
    let temp=""
    let passWord="";
    if (isChar) {
        temp +=charector;
    }
     if(isNumber){
        temp +=number;
    }
    if(isSpacial){
        temp +=spaCharector
    }
    
    for (let index = 0; index < length; index++) {
        passWord += temp[Math.floor(Math.random() *temp.length)]
    }
    return passWord
}

function generate(){
    const len= Number(lengthField.value)
    passField.textContent=generatePass(len,charBox.checked,numberBox.checked,spaCharBox.checked)
}