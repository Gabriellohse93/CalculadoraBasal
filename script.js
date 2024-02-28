let button = document.getElementById("calcular")

button.addEventListener("click",calcular)
function calcular() {
    const input = document.getElementById("peso");
    const peso = parseInt(input.value);
    const FLU = document.getElementById("flu"); 
    const MAN = document.getElementById("man");
    const ERROR = document.getElementById("error");
    const VOL = document.getElementById("vol");

    VOL.style.display = "none";
    FLU.style.display = "none";
    ERROR.style.display ="none";
    MAN.style.display = "none";

    if(peso <= 30 && peso >0) {
        const VOLUMEN_DIARIO = hollidaySegar(peso)
        const MANTENIMIENTO = Math.round(VOLUMEN_DIARIO / 24);
        const MM2 = Math.round(MANTENIMIENTO * 1.5);
        
        VOL.innerHTML = VOLUMEN_DIARIO + " CC ";
        FLU.innerHTML = MANTENIMIENTO + " CC/HR ";
        MAN.innerHTML = "M+M/2: " + MM2 + " CC/HR "
        VOL.style.display = "block";
        FLU.style.display = "block";
        MAN.style.display = "block";
    
    }
    else if(peso <= 0){
        ERROR.style.display = "block"
        ERROR.innerHTML = "Datos Incorrectos"
        input.value = "";
    } else if (input.value == ""){
        ERROR.style.display = "block"
        ERROR.innerHTML = "Ingresar Datos"
        input.value = "";}

    else {
        const SC1500 = Math.round(superficieCorporal(peso)*1500);
        const SC2000 = Math.round(superficieCorporal(peso)*2000);
        
        FLU.innerHTML = "SC 1500: " + SC1500+ " cc ";
        MAN.innerHTML = "SC 2000: " + SC2000+ " cc ";
        FLU.style.display = "block";
        MAN.style.display = "block";
    }
}
    
function hollidaySegar(peso){
 let volumenDIARIO;
 if (peso <= 10) {
    volumenDIARIO = peso * 100;}   
  else if(peso <=20){
    volumenDIARIO = 1000 + ((peso-10)*50);}
  else if(peso <=30){
        volumenDIARIO = 1500 + ((peso-20)*20);}
    return volumenDIARIO  
}
    
function superficieCorporal(peso) {
    let superficieCorporal = ((peso * 4) + 7)/(peso + 90);
    return superficieCorporal
}
