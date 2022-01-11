var elCurrencyForm = document.querySelector(`.currency__form`);
var elCurrencyInput = elCurrencyForm.querySelector(`.currency__input`);
var elCurrencySelect = elCurrencyForm.querySelector(`.currency__select`);
var elCurrencyResult = elCurrencyForm.querySelector(`.currency__result`);

var currencyUSD = 10830.06;
var currencyEURO = 12254.95;
var currencyRUB = 145.88;

elCurrencyForm.addEventListener('submit', function (evt) {
	evt.preventDefault();

	var sumCurrency = elCurrencyInput.value;
	var otherCurrency = elCurrencySelect.value;

	if (otherCurrency == 'usd') {
        elCurrencyResult.textContent = (sumCurrency / currencyUSD).toFixed(2)
	}

	if (otherCurrency == 'euro') {
        elCurrencyResult.textContent = (sumCurrency / currencyEURO).toFixed(2)
	}

	if (otherCurrency == 'rub') {
        elCurrencyResult.textContent = (sumCurrency / currencyRUB).toFixed(2)
	}
});


