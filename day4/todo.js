const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const count = document.getElementById("count");
const clearBtn = document.getElementById("clearBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateCount(){
    count.innerText = tasks.length + " Tasks";
}

function renderTasks(){

    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{

        const li = document.createElement("li");

        li.innerHTML = `
        <div class="task">

            <input type="checkbox" ${task.completed ? "checked": ""}>

            <span class="${task.completed ? "completed" : ""}">
                ${task.text}
            </span>

        </div>

        <button class="delete">Delete</button>
        `;

        const checkbox = li.querySelector("input");

        checkbox.addEventListener("change",()=>{

            tasks[index].completed = checkbox.checked;

            saveTasks();

            renderTasks();

        });

        li.querySelector(".delete").addEventListener("click",()=>{

            tasks.splice(index,1);

            saveTasks();

            renderTasks();

        });

        taskList.appendChild(li);

    });

    updateCount();

}

function addTask(){

    const text = input.value.trim();

    if(text===""){

        alert("Please enter a task!");

        return;

    }

    tasks.push({

        text:text,

        completed:false

    });

    input.value="";

    saveTasks();

    renderTasks();

}

addBtn.addEventListener("click",addTask);

input.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        addTask();

    }

});

clearBtn.addEventListener("click",()=>{

    if(tasks.length===0){

        return;

    }

    if(confirm("Delete all tasks?")){

        tasks=[];

        saveTasks();

        renderTasks();

    }

});

renderTasks();