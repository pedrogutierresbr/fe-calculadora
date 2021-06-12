function insert(num){
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;  
}

function limpar(){
    document.getElementById('resultado').innerHTML = '';
}

function apagar(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        alert('Nada para calcular!');
    }
}

/* 
CUIDADO:
use o eval() APENAS em funções internas do codigo,
Jamais use o eval() quando precisar de inputs do servidor
*/