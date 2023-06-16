var body = document.getElementById('body');
var aumentarFonte = document.getElementById('aumentarFonte');
var diminuirFonte = document.getElementById('diminuirFonte');

var fontSize = 100;
var acreDecre = 10;

aumentarFonte.addEventListener('click', aumentar);
diminuirFonte.addEventListener('click', diminuir);

    function aumentar() {
        fontSize = fontSize + acreDecre;
        body.style.fontSize = fontSize + '%';
    }


function diminuir (){
    fontSize = fontSize - acreDecre;
    body.style.fontSize = fontSize + '%';
}
