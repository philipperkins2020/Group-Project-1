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