function pesquisa_cep(){
    var cepaq = document.getElementById('cep').value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://cep.awesomeapi.com.br/:format/" + cepaq, true);

    xhr.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            var res = document.getElementById('res');
            var aux = JSON.parse(this.responseText);
            res.innerHTML = ""
            for (i in aux){
                res.innerHTML += aux[i] + '<br>';
            }
        }
    };
    xhr.send();
}