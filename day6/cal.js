let display = document.getElementById("display");

function handle(value){
    value === 'C' ? display.value = '' :
    value === '=' ? display.value = display.values ? eval(display.value) : '' :
    display.value += value;
}
