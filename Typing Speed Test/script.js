const sampleText = "place run down one they part than be do end";
const displayText = document.getElementById("displayText");
const inputText = document.getElementById("typingArea")
const time =document.getElementById("time");
const speed= document.getElementById("speed");
const accuracyElm = document.getElementById("accuracy")

let startTime;
let timerInterval;
let isComplete=false;

function sampleTextInit() {
    displayText.innerHTML = sampleText.split('').map(char =>
        `<span>${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');
}

function compareText() {
    let typeChars = inputText.value.split('');
    const displaySpan = displayText.querySelectorAll('span');
    if(!startTime){
        startTime=Date.now();
        timerInterval=setInterval(updateTimer,1000)
    }
    let correctChar=0;
    displaySpan.forEach((span, index) => {
        if (index < typeChars.length) {
            if (typeChars[index] === sampleText[index]) {
                span.classList.add('correct')
                span.classList.remove('incorrect')
                correctChar++;
            }
            else {

                span.classList.add('incorrect')
                span.classList.remove('correct')
            }
        }
        else {
            span.classList.remove('incorrect')
            span.classList.remove('correct')
        }
        if (typeChars.length > sampleText.length) {
            inputText.value = inputText.value.slice(0, sampleText.length)
        }
        const accuracy =typeChars.length>0? Math.round((correctChar/typeChars.length)*100):0;
        accuracyElm.textContent=`${accuracy}%`;

        const timeElapsed=(Date.now()-startTime)/1000;
        const wpm=timeElapsed>0? Math.round((correctChar/5)/(timeElapsed/60)):0;
        speed.textContent=`${wpm}WPM`
        if(typeChars.length===sampleText.length && !isComplete){
            clearInterval(timerInterval);
            isComplete=true;
            inputText.disabled=true;
        }
    })
    function updateTimer(){
        const timeElapsed=Math.floor((Date.now()-startTime)/1000);
        time.textContent=`${timeElapsed}S`;
    }

}

sampleTextInit()
inputText.addEventListener('input', () => {
    compareText()
})