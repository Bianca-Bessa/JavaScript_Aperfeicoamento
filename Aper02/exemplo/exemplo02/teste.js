var  qtdnum = 0;
var  total = 0;

function media(){

    var dig = document.getElementById('dig');
    var res = document.getElementById('res');
    var numeros = document.getElementById('numeros');

    if( qtdenum >= 5){
        alert("menos de 5")
    }
    else{
        qtdnum++;
        total += Number(dig.value)
        numeros.innerHTML += "numero " + qtdnum +"°: " +dig.value + "<br>"
        var media = total/qtdnum;
        res.innerHTML = media;
        dig.value = "";
    }
}