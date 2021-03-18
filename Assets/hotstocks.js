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

function getStocks() {
    var apiKey = "mpKK72CcnhxsE_y4YCUv";
    var stock = "AAPL";
    var url = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;
    fetch(url).then(function(response) {
      return response.json();
    }).then(function(data){
      console.log(data);
      const columnNames = data.column_names;
      const info = data.data;
    }); 
    }