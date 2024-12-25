// For adding coin or currency details
function saveCoinData(coin) {
    let coins = JSON.parse(localStorage.getItem('coins') || '[]');
    coins.push(coin);
    localStorage.setItem('coins', JSON.stringify(coins));
}

function saveCurrencyData(currency) {
    let currencies = JSON.parse(localStorage.getItem('currencies') || '[]');
    currencies.push(currency);
    localStorage.setItem('currencies', JSON.stringify(currencies));
}

// Add coin or currency from the form
function handleAddCoinForm(event) {
    event.preventDefault();

    const coin = {
        name: document.getElementById('coin-name').value,
        value: document.getElementById('coin-value').value,
        year: document.getElementById('coin-year').value,
        country: document.getElementById('coin-country').value,
        photo: document.getElementById('coin-photo').value,
        description: document.getElementById('coin-description').value
    };

    saveCoinData(coin);
    alert("Coin added successfully!");
    window.location.href = 'view.html';
}

function handleAddCurrencyForm(event) {
    event.preventDefault();

    const currency = {
        name: document.getElementById('currency-name').value,
        value: document.getElementById('currency-value').value,
        year: document.getElementById('currency-year').value,
        country: document.getElementById('currency-country').value,
        photo: document.getElementById('currency-photo').value,
        description: document.getElementById('currency-description').value
    };

    saveCurrencyData(currency);
    alert("Currency added successfully!");
    window.location.href = 'view.html';
}

// Display saved coins and currencies in view.html
window.onload = function () {
    const coins = JSON.parse(localStorage.getItem('coins') || '[]');
    const currencies = JSON.parse(localStorage.getItem('currencies') || '[]');

    const coinCollection = document.getElementById('coin-collection');
    const currencyCollection = document.getElementById('currency-collection');

    coins.forEach(coin => {
        coinCollection.innerHTML += `
            <div>
                <h3>${coin.name}</h3>
                <p>Value: ₹${coin.value}</p>
                <p>Year: ${coin.year}</p>
                <p>Country: ${coin.country}</p>
                <img src="${coin.photo}" alt="${coin.name}" width="100"><br>
                <p>Description: ${coin.description || 'No description available'}</p>
            </div>
        `;
    });

    currencies.forEach(currency => {
        currencyCollection.innerHTML += `
            <div>
                <h3>${currency.name}</h3>
                <p>Value: ₹${currency.value}</p>
                <p>Year: ${currency.year}</p>
                <p>Country: ${currency.country}</p>
                <img src="${currency.photo}" alt="${currency.name}" width="100"><br>
                <p>Description: ${currency.description || 'No description available'}</p>
            </div>
        `;
    });
};
