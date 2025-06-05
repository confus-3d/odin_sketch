const reset = document.querySelector("#reset");

const tablero = document.querySelector("#board");

let size = 16;

function paint(){
    for (let index = 0; index < size*size; index++) {
        const casilla = document.createElement("div");
        casilla.classList.add("square");
        casilla.style.width = (640/size) + "px";
        casilla.style.height = (640/size) + "px";
        let transp = 0.1;
        casilla.addEventListener("mouseenter", function(){
            casilla.style.backgroundColor = "black";
            casilla.style.opacity = transp;
            transp = transp + 0.1;
        })

        tablero.appendChild(casilla);
    }
}
paint();

reset.addEventListener("click", function (){
    while (tablero.firstChild) {
        tablero.removeChild(tablero.firstChild)
    }
    size = prompt("Elige un tamaño del tablero entre 10 y 100");
    if (size >= 10 && size <= 100) {
        paint();
    } else {
        size = 10;
        paint();
    }
})
