document.addEventListener("DOMContentLoaded", function(e){
    const parrafos = document.querySelectorAll(".description");
    let alturas = [];
    let alturaMaxima = 0;
    
    parrafos.forEach(parrafo => {
        alturas.push(parrafo.clientHeight);
    });

    alturaMaxima = Math.max(...alturas);

    parrafos.forEach(parrafo => {
        parrafo.style.height = alturaMaxima + "px";
    });
});