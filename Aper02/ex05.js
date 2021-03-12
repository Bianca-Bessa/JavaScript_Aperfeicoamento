function media(){
    var dig = document.getElementById('dig');
    var res = document.getElementById('res');

    if (dig.value.length != 5){
        alert('Por favor digite 5 números')
    };
    var numbers = dig.value.split('').map(x => parseInt(x));
    var media = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    res.innerHTML = media;
}