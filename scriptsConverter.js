document.getElementById("pageConverter").style.display = 'none';
const result = document.getElementById("result");
const exchangeRate = document.getElementById("exchangeRate");
document.getElementById("inputAmountMoney").addEventListener("change", convertCurrency());

function showPageConverter() {
    const element = document.getElementById("pageConverter");
    element.style.display = "block";
}

function getFromCurrency() {
   return document.getElementById("selectFromValue").value;
}

function getToCurrency() {
   return document.getElementById("selectToValue").value;
}

function getAmountMoney() {
   return document.getElementById("inputAmountMoney").value;
}

function convertCurrency() {
   let fromCurrency = getFromCurrency();
   let toCurrency = getToCurrency();
   let amount = getAmountMoney();
   var requestURL = `https://api.exchangerate.host/latest?base=${fromCurrency}`;
   var request = new XMLHttpRequest();
   request.open('GET', requestURL);
   request.responseType = 'json';
   request.send();
   request.onload = function test() {
      var selectedCurrencyRate = request.response.rates[toCurrency];
      let convertedValue = selectedCurrencyRate * amount;
      if (toCurrency == "BTC") {
         result.innerHTML = `${amount} ${fromCurrency} = ${convertedValue} ${toCurrency}`;
         exchangeRate.innerHTML = `1 ${fromCurrency} = ${selectedCurrencyRate} ${toCurrency}`;
      } else {
         convertedValue = convertedValue.toFixed(2);
         result.innerHTML = `${amount} ${fromCurrency} = ${convertedValue} ${toCurrency}`;
         exchangeRate.innerHTML = `1 ${fromCurrency} = ${selectedCurrencyRate} ${toCurrency}`;
      }
   }
   setTimeout("convertCurrency()", 100);
}