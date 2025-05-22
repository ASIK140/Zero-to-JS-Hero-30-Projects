function updateClock(){
    const clock= document.getElementById("clock");
    const now = new Date();

    const hour= String(now.getHours()).padStart(2,'0')
    const minutes= String(now.getMinutes()).padStart(2,'0')
    const second= String(now.getSeconds()).padStart(2,'0')
    clock.textContent=`${hour}:${minutes}:${second}`
    
}
setInterval(updateClock,1000)
updateClock()