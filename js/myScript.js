// variables
var p1 = document.getElementById("card1");
var p2 = document.getElementById("card2");
var p3 =

//Eventos
document.getElementById("btnQuienSoy").addEventListener("click", function(){
    slideCard(p1,p2);
});

//funciones
function slideCard(origen,destino){
 
    origen.classList.add("hide");
    destino.classList.remove("hide");
    destino.classList.add("fadeInRight");

}