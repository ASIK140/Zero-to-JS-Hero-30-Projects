let count = 0
const counter = document.getElementById("counter")
const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")

counter.textContent = count;

increase.addEventListener("click", () => {
    count++
    counter.textContent = count;

})
decrease.addEventListener("click", () => {
    if (count>0) {
        count--
        counter.textContent = count;
    }
})
reset.addEventListener("click", () => {
    count=0
    counter.textContent = count;

})