function ano(){
    var a = document.getElementById('ano');
    var ano = Number(a.value);

    var idade = 2021 - ano;
    alert(idade + ' anos')

    if (a == ''){
        alert('Campo vazio, Coloque seu ano de nascimento')
    }
    if (idade >= 0 && idade <= 17){
        alert('Você é menor de idade');
    }
    else{
        alert('Você é maior de idade');
    }
}