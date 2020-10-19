var a = prompt("Insira um valor: ");
var b = prompt("Insira um valor: ");
var c = prompt("Insira um valor: ");

function Maior(a,b,c){
    let maxNum = Math.max(a,b,c);
    return maxNum;
}

alert("O Maior numero é " + Maior(a,b,c))