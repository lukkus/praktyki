document.getElementById("pageConverter").style.display = 'none';
const result = document.getElementById("result");
const exchangeRate = document.getElementById("exchangeRate");

function showPageConverter() {
    const element = document.getElementById("pageConverter");
    element.style.display = "block";
    
}

function getFromCurrency() {
   return document.getElementById("selectFromValue");
}

function getToCurrency() {
   return document.getElementById("selectToValue");
}

function getAmountMoney() {
   return document.getElementById("inputAmountMoney");
}

function convertCurrency() {
   let fromCurrency = getFromCurrency().value;
   let toCurrency = getToCurrency().value;
   let amount = getAmountMoney().value;
   var requestURL = `https://api.exchangerate.host/latest?base=${fromCurrency}`;
   var request = new XMLHttpRequest();
   request.open('GET', requestURL);
   request.responseType = 'json';
   request.send();
   request.onload = function test() {
      var response = request.response.rates[toCurrency];
      let convertedValue = response * amount;
      if (toCurrency == "BTC") {
         result.innerHTML = `${amount} ${fromCurrency} = ${convertedValue} ${toCurrency}`;
         exchangeRate.innerHTML = `1 ${fromCurrency} = ${response} ${toCurrency}`;
      } else {
         convertedValue = convertedValue.toFixed(2);
         result.innerHTML = `${amount} ${fromCurrency} = ${convertedValue} ${toCurrency}`;
         exchangeRate.innerHTML = `1 ${fromCurrency} = ${response} ${toCurrency}`;
      }
   }
}