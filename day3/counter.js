const count = document.getElementById("count");

const increase = document.getElementById("increase");

const decrease = document.getElementById("decrease");

const reset = document.getElementById("reset");

let value = 0;

function updateCounter(){

    count.textContent = value;

    count.style.transform = "scale(1.25)";

    setTimeout(() => {

        count.style.transform = "scale(1)";

    },150);

    if(value>0){

        count.style.color="#00ff99";

    }
    else if(value<0){

        count.style.color="#ff4d6d";

    }
    else{

        count.style.color="white";

    }

}

increase.addEventListener("click",()=>{

    value++;

    updateCounter();

});

decrease.addEventListener("click",()=>{

    value--;

    updateCounter();

});

reset.addEventListener("click",()=>{

    value=0;

    updateCounter();

});