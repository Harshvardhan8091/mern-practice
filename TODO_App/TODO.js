let task = [];

function addtask() {
    let input = document.getElementById("taskinput");

    if (input.value.trim() === "") return;

    task.push(input.value);
    input.value = "";
    render();
}

function render() {
    let list = document.getElementById("tasklist");
    list.innerHTML = "";

    for (let i = 0; i < task.length; i++) {
        let li = document.createElement("li");

        let check = document.createElement("span");
        check.innerText = "○";

        check.onclick = function () {
            task.splice(i, 1);
            render();
        };

        let text = document.createElement("span");
        text.innerText = task[i];

        li.appendChild(check);
        li.appendChild(text);
        list.appendChild(li);
    }
}
