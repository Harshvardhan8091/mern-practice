let body = document.body;
let button = document.getElementById("toggleBtn");

body.classList.add("light");

button.addEventListener("click", function () {

    body.classList.toggle("dark");
    body.classList.toggle("light");

    if (body.classList.contains("dark")) {
        button.textContent = "🌞";
    } else {
        button.textContent = "🌙";
    }

});
