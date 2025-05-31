const convertButton = document.getElementById("convertButton");
const select = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);  // Valor de entrada
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");  // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value");  // Valor convertido (Dólar/Euro/Libra)

    // Verificação se o valor inserido é válido
    if (isNaN(inputCurrencyValue) || inputCurrencyValue <= 0) {
        alert("Por favor, insira um valor válido.");
        return;  // Impede continuar se o valor for inválido
    }

    // Taxas de câmbio (atualizadas conforme o valor real)
    const dolarToday = 5.94;
    const euroToday = 6.46;
    const libraToday = 7.24;

    // Realiza a conversão dependendo da moeda selecionada
    if (select.value == "dolar") {
        const result = inputCurrencyValue / dolarToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(result);
    } else if (select.value == "euro") {
        const result = inputCurrencyValue / euroToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(result);
    } else if (select.value == "libra") {
        const result = inputCurrencyValue / libraToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(result);
    }

    // Atualiza o valor original em Reais (fixo)
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

    console.log("Valor convertido: ", currencyValueConverted.innerHTML);
}

function changeCurrency() {
    const currencyNameConverted = document.getElementById("currency-name");  // Nome da moeda convertida
    const currencyImg = document.querySelector(".currency-img");  // Ícone da moeda convertida

    // Alterar o nome e ícone da moeda convertida conforme a seleção
    if (select.value == "dolar") {
        currencyNameConverted.innerHTML = "Dólar americano";
        currencyImg.src = "img/img.dolar.png";
    } else if (select.value == "euro") {
        currencyNameConverted.innerHTML = "Euro";
        currencyImg.src = "img/img.euro.png";
    } else if (select.value == "libra") {
        currencyNameConverted.innerHTML = "Libra esterlina";
        currencyImg.src = "img/img.libra.png";
    }

    // Chama a função de conversão após a seleção da moeda
    convertValues();
}

select.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);



