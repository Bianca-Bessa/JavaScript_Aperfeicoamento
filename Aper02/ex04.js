function informa(){
    var texto = document.getElementById('texto').value;

    var t = texto.indexOf("dota");
    if(t === -1){
        alert('Falso')
    }
    else{
        alert('Verdadeiro ')
    }
}