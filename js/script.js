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

