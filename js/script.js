window.addEventListener('load', ocultarResul());
botonBorrar = document.getElementById('nuevo');
botonCalcular = document.getElementById('calcular');

botonCalcular.addEventListener('click', function () {
    calculando();
    calculando2();
    calculando3();
    ocultarNum();
    mostrarResul();
})

botonBorrar.addEventListener ('click', function () {       
    location.reload();    
})

function calculando(valor1) {
    numeroUno = document.getElementById('numero1').value;
    numeroDos = document.getElementById('numero2').value;
    numeroTres = document.getElementById('numero3').value;

    if (numeroUno > 0) {
        document.getElementById('resNumero1').innerHTML = (numeroUno * 1).toFixed(2);;
    } else if (numeroUno == 0 && numeroDos == 0) {
        var valor1 = (((1 + (((parseFloat(numeroTres) * 12))/100) / 12)** 12 - 1) * 100).toFixed(2);
        document.getElementById('resNumero1').innerHTML = valor1;
    } else if (numeroUno == 0 && numeroTres == 0) {
        var valor1 = (((1 + ((parseFloat(numeroDos))/100) / 12)** 12 - 1) * 100).toFixed(2);
        document.getElementById('resNumero1').innerHTML = valor1;
    }
}

function calculando2(valor2) {
    numeroUno = document.getElementById('numero1').value;
    numeroDos = document.getElementById('numero2').value;
    numeroTres = document.getElementById('numero3').value;

    if (numeroDos > 0) {
        document.getElementById('resNumero2').innerHTML = (numeroDos * 1).toFixed(2);;
    } else if (numeroDos == 0 && numeroTres == 0) {
        var valor2 = ((((1 + ((parseFloat(numeroUno))/100))**(1/12)-1)*12) * 100).toFixed(2);
        document.getElementById('resNumero2').innerHTML = valor2;
    } else if (numeroDos == 0 && numeroUno == 0) {
        var valor2 = (parseFloat(numeroTres) * 12).toFixed(2);
        document.getElementById('resNumero2').innerHTML = valor2;
    }
}

function calculando3(valor3) {
    numeroUno = document.getElementById('numero1').value;
    numeroDos = document.getElementById('numero2').value;
    numeroTres = document.getElementById('numero3').value;

    if (numeroTres > 0) {
        document.getElementById('resNumero3').innerHTML = (numeroTres * 1).toFixed(2);
    } else if (numeroTres == 0 && numeroUno == 0) {
        var valor3 = (parseFloat(numeroDos) / 12).toFixed(2);
        document.getElementById('resNumero3').innerHTML = valor3;
    } else if (numeroTres == 0 && numeroDos == 0) {
        var valor3 = (((((1 + ((parseFloat(numeroUno))/100))**(1/12)-1)*12) * 100) / 12).toFixed(2);
        document.getElementById('resNumero3').innerHTML = valor3;
    }
}

function ocultarNum() {
    document.getElementById('numeros').style.display = 'none';
}
function mostrarNum() {
    document.getElementById('numeros').style.display = 'flex';
}

function ocultarResul() {
   document.getElementById ('resultado').style.display = 'none';
}

function mostrarResul() {
    document.getElementById('resultado').style.display = 'flex';
}

