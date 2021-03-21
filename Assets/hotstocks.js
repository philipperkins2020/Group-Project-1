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
        el.textContent = 'NEW PRICE...';
    });
}

// function getStocks() {
//     var apiKey = "mpKK72CcnhxsE_y4YCUv";
//     var stock = "AAPL";
//     var url = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;
//     const ticker = document.getElementById("liveStock");
//     fetch(url).then(function (response) {
//         return response.json();
//     }).then(function (data) {
//         console.log(data);
//         const columnNames = data.column_names;
//         const info = data.data;
//         ticker = document.getElementById("liveStock")

//     });
// }

getHeaderStocks();
console.log(stocks)
