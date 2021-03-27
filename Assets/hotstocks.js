var stockOne = document.getElementById("stockInput");
var cryptoOne = document.getElementById("cryptoInput");
var cryptoTwo = document.getElementById("cryptoInputTwo");
var stockTwo = document.getElementById("stockInputTwo");
var cryptoButton = document.getElementById("cryptoButton");
var stockButton = document.getElementById("stockButton");
var topStockOne = document.getElementById("saved-StockOne");
var topStockTwo = document.getElementById("saved-StockTwo");
var topCrypto = document.getElementById("saved-CrypOne");
var topCryptoTwo = document.getElementById("saved-CrypTwo")
var apiKey1 = "mpKK72CcnhxsE_y4YCUv";
var apiKey2 = "qUFJM0c7knQIBQSjJRsT8XfC3phX299k";

// Save var
function saveStock(event) {
    event.preventDefault()
    var topStock = document.getElementById("stockInput").value;
    console.log(topStock)
    localStorage.setItem("topStock", topStock);
}

// Save Value
function stockValue() {
    return localStorage.getItem("topStock");
}

console.log(stockValue());
document.getElementById("stockButton").addEventListener("click", saveStock)

// Save var
function saveCrypto(event) {
    event.preventDefault()
    var topCrypto = document.getElementById("cryptoInput").value;
    console.log(topCrypto)
    localStorage.setItem("topCrypto", topCrypto);
}

// Save Value
function cryptoValue() {
    return localStorage.getItem("topCrypto");
}

console.log(cryptoValue());
document.getElementById("cryptoButton").addEventListener("click", saveCrypto)

function getHeaderStocks() {
    var stockItems = stocks.tickers;
    stockItems.forEach(item => {
        console.log(item)
    });   
}

var liveStockContainer = $('#liveStock');


function getStocks() {
    var allTickers = stocks.tickers;
    allTickers.forEach(async (stock) => {
        var ticker = stock.ticker;
        const res = await fetch(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=c199p7n48v6psigt97d0`).then((response) => {
            return response.json();
        }).then((data) => {
            return data;
        });
        getPrice(stock, res);
    })
}


function getPrice(stock, price) {
    var tickerContainer = $(".ticker-move");
    var tickerDiv = $('<div class="ticker-item">');
    tickerDiv.text(`${stock.ticker} $${price.c}`);
    tickerContainer.append(tickerDiv);
}

getStocks();
getHeaderStocks();
console.log(stocks)

//Crypto Ticker
function getHeaderCryptos() {
    var cryptoItems = cryptos.tickers;
    cryptoItems.forEach(item => {
        console.log(item)
    });   
}

var liveCryptoContainer = $('#liveCrypto');

function getCryptos() {
    var cryptoTickers = cryptos.tickers;
    cryptoTickers.forEach(async (crypto) => {
        var cryptoTicker = crypto.cryptoTicker;
        const res = await fetch(`https://api.polygon.io/v2/reference/tickers?symbol=${cryptoTicker}sort=ticker&market=CRYPTO&perpage=20&page=1&active=true&apiKey=qUFJM0c7knQIBQSjJRsT8XfC3phX299k`).then((response) => {
            return response.json();
        }).then((data) => {
            return data;
        });
        getCryptoPrice(crypto, res);
    })
}

function getCryptoPrice(crypto, cryptoPrice) {
    var tickerContainer = $(".crypto-ticker-move");
    var tickerDiv = $('<div class="ticker-item">');
    tickerDiv.text(`${crypto.cryptoTicker} $${cryptoPrice.c}`);
    tickerContainer.append(tickerDiv);
}

getCryptos();
getHeaderCryptos();
console.log(cryptos)

function saveStock() {

    var savedStocks = {
        stockOne: stockOne.value.trim(),
        cryptoOne: cryptoOne.value.trim(),
        stockTwo: stockTwo.value.trim(),
        cryptoTwo: cryptoTwo.value.trim()
    };

    localStorage.setItem("savedStocks", JSON.stringify(savedStocks));
}

function renderLastStock() {

    var lastSaved = JSON.parse(localStorage.getItem("savedStocks"));

    if (lastSaved !== null) {
        document.getElementById("saved-StockOne").innerHTML = lastSaved.stockOne;
        document.getElementById("saved-StockTwo").innerHTML = lastSaved.stockTwo;
        document.getElementById("saved-CrypOne").innerHTML = lastSaved.cryptoOne;
        document.getElementById("saved-CrypTwo").innerHTML = lastSaved.cryptoTwo;
    } else {
        return;
    }
}

stockButton.addEventListener("click", function (event) {
    event.preventDefault();
    saveStock();
    renderLastStock();
});

function init() {

    renderLastStock();
}

init();

cryptoButton.addEventListener("click", function (event) {
    event.preventDefault();
    saveStock();
    renderLastStock();
});
