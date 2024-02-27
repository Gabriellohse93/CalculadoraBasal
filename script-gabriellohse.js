let button = document.getElementById("calculadora")

button.addEventListener("click",calcular)
function calcular() {
    const input = document.getElementById("peso");
    const peso = input.value;
   
    if(peso <= 30) {
        console.log(hollidaySegar(peso));
    } else {
        console.log(superficieCorporal(peso));
    }
    
}

function hollidaySegar(peso) {
    return "hollidaySegar"
}
function superficieCorporal(peso) {
    return "superficieCorporal"
}
