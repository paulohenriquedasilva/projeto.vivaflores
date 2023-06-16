var temaEscuro = document.getElementById('temaEscuro');
temaEscuro.addEventListener('click', mudarTema);
const h2 = document.getElementsByTagName("h2");

var body =  document.getElementById('body');
var estado = false;

function mudarTema(){
    if(estado == true) {
        body.style.backgroundImage = 'linear-gradient(to bottom, #FFFFFF, #99D98C)';
          for (let i = 0; i < h2.length; i++) {
            h2[i].style.color = "black";
          }
        estado = false;
    }else if(estado == false){
        body.style.background = 'black';
          for (let i = 0; i < h2.length; i++) {
            h2[i].style.color = "white";
          }
        estado = true;
    }
}