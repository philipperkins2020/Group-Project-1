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
var apiKey = "mpKK72CcnhxsE_y4YCUv";

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
        // var dataItem = item.querySelector('.stock-data');
        // var ticker = dataItem.getAttribute('data-stock-id');
        // var elStockPrice = dataItem.querySelector('span');
        // console.log('TICKER', ticker);
        // getStock(ticker, elStockPrice);
    });
    // console.log('STOCK ITEMS: ', stockItems);
}

function getStock(ticker, el) {
    var url = `https://www.quandl.com/api/v3/datasets/WIKI/${ticker}.json?start_date=2021-03-19&end_date=2021-03-20&api_key=${apiKey}`;
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log('DATA FOR ' + ticker, data);
        // update the element with the correct stock price
        stocks.appendChild()
        el.textContent = 'NEW PRICE...';
    });
}

var liveStockContainer = $('#liveStock');

function getStocks() {
    var allTickers = stocks.tickers;
    for(var i = 0; i < allTickers.length; i++) {
        console.log(allTickers[i]);
        var ticker = allTickers[i].ticker;
        var url = allTickers[i].ticker;
        var tickerContainer = $(".ticker-move");
        var tickerDiv = $('<div class="ticker-item">');
        tickerDiv.text(`${ticker} $20`);
        tickerContainer.append(tickerDiv);
    }
}
getStocks();

getHeaderStocks();
console.log(stocks)

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

//Crypto Ticker
function getHeaderStocks() {
    var stockItems = stocks.tickers;
    stockItems.forEach(item => {
        console.log(item)
        // var dataItem = item.querySelector('.stock-data');
        // var ticker = dataItem.getAttribute('data-stock-id');
        // var elStockPrice = dataItem.querySelector('span');
        // console.log('TICKER', ticker);
        // getStock(ticker, elStockPrice);
    });
    // console.log('STOCK ITEMS: ', stockItems);
}

var liveStockContainer = $('#liveStock');

function getStocks() {
    var allTickers = stocks.tickers;
    for(var i = 0; i < allTickers.length; i++) {
        console.log(allTickers[i]);
        var ticker = allTickers[i].ticker;
        var url = allTickers[i].ticker;
        var tickerContainer = $(".ticker-move");
        var tickerDiv = $('<div class="ticker-item">');
        tickerDiv.text(`${ticker} $20`);
        tickerContainer.append(tickerDiv);
    }
}

getStocks();

getHeaderStocks();
console.log(stocks)