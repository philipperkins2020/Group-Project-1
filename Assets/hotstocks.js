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
