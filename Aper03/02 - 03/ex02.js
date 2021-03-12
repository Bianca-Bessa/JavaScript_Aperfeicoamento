var ul = document.getElementById('nomes');
var deuses = ['Odin', 'Loki', 'Thor'];

for(var i = 0; i < deuses.length; i++){
    deuses.sort()
    ul.innerHTML += deuses[i] + "<br>";
}