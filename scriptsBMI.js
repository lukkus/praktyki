document.getElementById("contentBMI").style.display = 'none';
document.getElementById("rightContentBMI").style.display = 'none';

function calculateResult() {
    if (getWeight() == 0 || getHeight() == 0) {
        const button = document.getElementById("calculate");
        button.style.backgroundColor="#D6D6D6";
    } else {
        activateCalculateButton();
        calculateBMIResult();
    }
} 

function calculateBMIResult() {
    let BMI = calculateBMI();
    let description = getDescriptionBMI(BMI);
    displayResults(BMI, description);
}

function calculateBMI() {
    let weight = getWeight();
    let height = getHeight();
    return ((weight / (height * height))*10000).toFixed(2);
}


function getWeight() {
    return Number(document.getElementById("inputWeight").value);
}

function getHeight() {
    return Number(document.getElementById("inputHeight").value);
}


function displayResults(BMI, description) {
    document.getElementById("numberBMI").innerHTML = BMI;
    document.getElementById("textBMI").innerHTML = description;
    showResultBMI();
}

function getDescriptionBMI(BMI) {
    if (BMI < 16) {
        return "Wygłodzenie";
    } else if (BMI < 17) {
        return "Wychudzenie";
    } else if (BMI < 18.5) {
        return "Niedowaga";
    } else if (BMI < 25) {
        return "Optimum";
    } else if (BMI < 30) {
        return "Nadwaga";
    } else if (BMI < 35) {
        return "Otyłość I st.";
    } else if (BMI < 40) {
        return "Otyłość II st.";
    } else if (BMI >= 40) {
        return "Otyłość III st.";
    }
}

function showPageBMI() {
    const element = document.getElementById("contentBMI");
    element.style.display = "block"; 
}

function showResultBMI() {
    const element = document.getElementById("rightContentBMI");
    element.style.display = "block";
}

function resetCalculation() {
    hideResult();
    resetInputs();
    activateCalculateButton();
}

function hideResult() {
    const element = document.getElementById("rightContentBMI");
    element.style.display = "none";
}

function resetInputs() {
    document.getElementById("inputWeight").value = 0;
    document.getElementById("inputHeight").value = 0;
}

function activateCalculateButton() {
    const button = document.getElementById("calculate");
    button.style.backgroundColor="#0d6efd";
}

