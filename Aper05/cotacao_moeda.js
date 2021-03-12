function enviar(){
    var moedas = document.getElementById('moedas').value;
    var xhr = new XMLHttpRequest();

    var parametroApi = moedas + "-"
    xhr.open("GET", " https://economia.awesomeapi.com.br/all/"+ parametroApi +"BRL",true);

    xhr.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            var res = document.getElementById("res");
            var aux = JSON.parse(this.responseText);
            res.innerHTML = aux[moedas].high;
        }
    };
    xhr.send(null);

}