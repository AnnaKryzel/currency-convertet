{   
    const updateResultText = (exchangeResult) => {
        const exchangeResultElement = document.querySelector(".js-exchangeResult");
        exchangeResultElement.innerText = exchangeResult.toFixed(2);
    };
    
    const calculateResult = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        let amount = amountElement.value;
        let currency = currencyElement.value;
        let exchangeResult = amount / currency;

        updateResultText(exchangeResult);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", calculateResult);
    };

    init();
}