/*
resultado abaixo de 17 - Muito abaixo do peso<br> 
resultado entre 17 e 18,49 - Abaixo do peso;<br>
resultado ente 18,5 e 24,99 - Peso ideal;<br>
resultado entre 25 e 29,99 - Sobrepeso;<br>
resultado entre 30 e 34,9 - Obesidade grau I ;<br>
resultado entre 35 e 39,9 - Obesidade garu II (severa);<br>
resultado acima de 40 - Obesidade grau III (mórbida);<br></br>
*/
var altura;
var peso;
var imc;
var resultado;

function calcular(event){

    event.preventDefalt();

    peso = preventDefalt(document.getElementById("peso").value);
    altura = preventDefalt(document.getElementById("altura").value);

    imc = peso / (altura * altura);

    
    resultado = document.getElementById("resultado");

    if (imc < 17){
        resultado.innerHTML ="<br/> seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado você está muito abaixo do peso!";
    } else if (immc >= 17 && imc <= 18.49){
        resultado.innerHTML ="<br/> seu resultado foi: " + imc.toFixed(2) + "<br/> Abaixo do peso!";
    } else if (immc >= 18.5 && imc <= 24.99){
        resultado.innerHTML ="<br/> seu resultado foi: " + imc.toFixed(2) + "<br/> Você está no peso ideal!";
    } else if (immc >= 25 && imc <= 29.99){
        resultado.innerHTML ="<br/> seu resultado foi: " + imc.toFixed(2) + "<br/> Você está com sobrepeso!";
    }else if (immc >= 30 && imc <= 34.99){
        resultado.innerHTML ="<br/> seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO, obesidade grau I!";
    }else if (immc >= 35 && imc <= 39.99){
        resultado.innerHTML ="<br/> seu resultado foi: " + imc.toFixed(2) + ",br/> CUIDADO,obesidade garu II!";
    }else if (immc >= 40){
        resultado.innerHTML ="<br/> seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO,obesidade grau III";
    }

    document.getElementById("peso").value = ""
    document.getElementById("altura").value = ""
}