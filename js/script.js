let valueElement = document.querySelector(".js-value");
let formElement = document.querySelector(".js-form");
let exchangeResultElement = document.querySelector(".js-exchangeResult");
let currencyElement = document.querySelector(".js-currency");

document.addEventListener("submit", (event) => {
    event.preventDefault();


    let value = valueElement.value;
    let currency = currencyElement.value;

    let exchangeResult = value / currency;

    exchangeResultElement.innerText = exchangeResult.toFixed(2);
});