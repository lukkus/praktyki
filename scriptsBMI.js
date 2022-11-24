document.getElementById("contentBMI").style.display = 'none';
document.getElementById("rightContentBMI").style.display = 'none';

function submitBMI() {
    resoultBMI()
    showResultBMI()
}


function resoultBMI() {
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);
    let BMI = ((weight / (height * height))*10000).toFixed(2);
    document.getElementById("numberBMI").innerHTML = BMI;
    if (BMI < 16) {
        document.getElementById("textBMI").innerHTML = "Wygłodzenie";
    } else if (BMI < 17) {
        document.getElementById("textBMI").innerHTML = "Wychudzenie";
    } else if (BMI < 18.5) {
        document.getElementById("textBMI").innerHTML = "Niedowaga";
    } else if (BMI < 25) {
        document.getElementById("textBMI").innerHTML = "Optimum";
    } else if (BMI < 30) {
        document.getElementById("textBMI").innerHTML = "Nadwaga";
    } else if (BMI < 35) {
        document.getElementById("textBMI").innerHTML = "Otyłość I st.";
    } else if (BMI < 40) {
        document.getElementById("textBMI").innerHTML = "Otyłość II st.";
    } else if (BMI >= 40) {
        document.getElementById("textBMI").innerHTML = "Otyłość III st.";
    }
    if (weight == 0 || height == 0) {
        const button = document.getElementById("calculate");
        button.style.backgroundColor="#D6D6D6"
        const element = document.getElementById("rightContentBMI");
        element.style.display = "none";
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

function hideResultBMI() {
    const element = document.getElementById("rightContentBMI");
    element.style.display = "none";
    document.getElementById("weight").value = "0";
    document.getElementById("height").value = "0";
    const button = document.getElementById("calculate");
    button.style.backgroundColor="#0d6efd"
}
