// APP RATE
window.addEventListener('load', hideResult());
buttonClear = document.getElementById('clear');
buttonCalculate = document.getElementById('calculate');

buttonCalculate.addEventListener('click', function () {
    calculateAnnual();
    calculateNominal();
    calculateMonth();
    hideRate();
    showResult();
})

buttonClear.addEventListener ('click', function () {       
    document.getElementById("annualRate").value = '';   
    document.getElementById("nominalRate").value = ''; 
    document.getElementById("monthRate").value = ''; 
    hideResult();
    showRate();
})

function calculateAnnual() {
    annualRate = document.getElementById('annualRate').value;
    nominalRate = document.getElementById('nominalRate').value;
    monthRate = document.getElementById('monthRate').value;

    if (annualRate > 0) {
        document.getElementById('resultAnnual').innerHTML = (annualRate * 1).toFixed(2);;
    } else if (annualRate == 0 && nominalRate == 0) {
        let annual = (((1 + (((parseFloat(monthRate) * 12))/100) / 12)** 12 - 1) * 100).toFixed(2);
        document.getElementById('resultAnnual').innerHTML = annual;
    } else if (annualRate == 0 && monthRate == 0) {
        let annual = (((1 + ((parseFloat(nominalRate))/100) / 12)** 12 - 1) * 100).toFixed(2);
        document.getElementById('resultAnnual').innerHTML = annual;
    }
}

function calculateNominal() {
    annualRate = document.getElementById('annualRate').value;
    nominalRate = document.getElementById('nominalRate').value;
    monthRate = document.getElementById('monthRate').value;

    if (nominalRate > 0) {
        document.getElementById('resultNominal').innerHTML = (nominalRate * 1).toFixed(2);;
    } else if (nominalRate == 0 && monthRate == 0) {
        let nominal = ((((1 + ((parseFloat(annualRate))/100))**(1/12)-1)*12) * 100).toFixed(2);
        document.getElementById('resultNominal').innerHTML = nominal;
    } else if (nominalRate == 0 && annualRate == 0) {
        let nominal = (parseFloat(monthRate) * 12).toFixed(2);
        document.getElementById('resultNominal').innerHTML = nominal;
    }
}

function calculateMonth() {
    annualRate = document.getElementById('annualRate').value;
    nominalRate = document.getElementById('nominalRate').value;
    monthRate = document.getElementById('monthRate').value;

    if (monthRate > 0) {
        document.getElementById('resultMonth').innerHTML = (monthRate * 1).toFixed(2);
    } else if (monthRate == 0 && annualRate == 0) {
        let month = (parseFloat(nominalRate) / 12).toFixed(2);
        document.getElementById('resultMonth').innerHTML = month;
    } else if (monthRate == 0 && nominalRate == 0) {
        let month = (((((1 + ((parseFloat(annualRate))/100))**(1/12)-1)*12) * 100) / 12).toFixed(2);
        document.getElementById('resultMonth').innerHTML = month;
    }
}

function hideRate() {
    document.getElementById('rate').style.display = 'none';
}
function showRate() {
    document.getElementById('rate').style.display = 'flex';
}

function hideResult() {
   document.getElementById ('result').style.display = 'none';
}

function showResult() {
    document.getElementById('result').style.display = 'flex';
}

// APP CALC

const botonnumeros = document.getElementsByName('data-number');
const botonoperaciones = document.getElementsByName('operations');
const botonigual = document.getElementsByName('data-igual')[0];
const botondelete = document.getElementsByName('data-delete')[0];
var resultado = document.getElementById('resultado');
var operaactual = '';
var operaanterior = '';
var operacion = undefined;

botonnumeros.forEach(function(boton) {
    boton.addEventListener('click', function() {
        agregarnumero(boton.innerText);
    })
});

botonoperaciones.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectoperacion(boton.innerText);
    })
});

botonigual.addEventListener('click', function () {
    calcular();
    actualizardisplay();
});

botondelete.addEventListener('click', function () {
    clear();
    actualizardisplay();
});

function selectoperacion(op) {
    if(operaactual === '') return;
    if(operaanterior !== '') {
        calcular()
    }
    operacion = op.toString();
    operaanterior = operaactual
    operaactual = '';
}

function calcular() {
    var calculo;
    const anterior = parseFloat(operaanterior);
    const actual = parseFloat(operaactual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'X':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    operaactual = calculo;
    operacion = undefined;
    operaanterior = '';
}

function agregarnumero(num) {
    operaactual = operaactual.toString() + num.toString();
    actualizardisplay();
}

function clear() {
    operaactual = '';
    operaanterior = '';
    operacion = undefined;
}

function actualizardisplay() {
    resultado.value = operaactual;
}

clear();