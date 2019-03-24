// variables
var p1 = document.getElementById("card1");
var p2 = document.getElementById("card2");
var p3 = document.getElementById("card3");
var p4 = document.getElementById("card4");
var p5 = document.getElementById("card5");

//Botones
btn1 = document.getElementById("btnQuienSoy");
btn2 = document.getElementById("btnMp");
btn3 = document.getElementById("btnEstudios");
btn4 = document.getElementById("btnDeportes");
btn5 = document.getElementById("btnAgra");

//Barra de progreso

var progressBar = document.getElementById("progresBar");

//Eventos
btn1.addEventListener("click", function(){
    let btnToHide = document.getElementsByClassName("nav-link active");
    btnToHide[0].className="nav-link";
    this.className = "nav-link active";
    progressBar.style.width="20%";
    slideCard(p1);
});
btn2.addEventListener("click", function(){
    let btnToHide = document.getElementsByClassName("nav-link active");
    btnToHide[0].className="nav-link";
    this.className = "nav-link active";
    progressBar.style.width="40%";
    slideCard(p2);
});
btn3.addEventListener("click", function(){
    let btnToHide = document.getElementsByClassName("nav-link active");
    btnToHide[0].className="nav-link";
    this.className = "nav-link active";
    progressBar.style.width="60%";
    slideCard(p3);
});
btn4.addEventListener("click", function(){
    let btnToHide = document.getElementsByClassName("nav-link active");
    btnToHide[0].className="nav-link";
    progressBar.style.width="80%";
    this.className = "nav-link active";
    slideCard(p4);
});
btn5.addEventListener("click", function(){
    let btnToHide = document.getElementsByClassName("nav-link active");
    btnToHide[0].className="nav-link";
    progressBar.style.width="100%";
    this.className = "nav-link active";
    slideCard(p5);
});


//funciones
function slideCard(destino){

    //Mover cards
    let current = document.getElementsByClassName("activo");
    current[0].classList.add("hide");
    current[0].classList.remove("activo");
    destino.classList.remove("hide");
    destino.className = "card mx-auto activo animated fadeInRight";


}