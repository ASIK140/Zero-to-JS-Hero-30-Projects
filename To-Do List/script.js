document.getElementById("addbtn").addEventListener("click", () => {
    const text_input = document.getElementById("text_input")
    let value = text_input.value.trim();
    if (value) {
        const newDiv = document.createElement('div');
        const h2 = document.createElement("h2");
        h2.textContent = value
        const del_btn = document.createElement("button");
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        del_btn.textContent = "X"
        del_btn.addEventListener("click", () => {
            newDiv.remove()
        })
        newDiv.classList.add("task");
        newDiv.appendChild(checkbox)
        newDiv.appendChild(h2)
        newDiv.appendChild(del_btn)

        const task_con = document.getElementById("task_con")
        task_con.appendChild(newDiv)

        text_input.value = ''
    }
})
