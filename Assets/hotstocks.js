

// Save var






// Save var
function saveStock(event) {
    
    event.preventDefault()
    
    var topStock = document.getElementById('stockInput').value;
    console.log(topStock)
    
    var topCrypto = document.getElementById('cryptoInput').value;
    console.log(topCrypto)

    
    localStorage.setItem('topStock', topStock);
    localStorage.setItem('topCrypto', topCrypto);


}

// Save Value
function stockValue() {



    return localStorage.getItem('topstock');
}
console.log(stockValue());


document.getElementById('stockButton').addEventListener("click", saveStock)
document.getElementById('cryptoButton').addEventListener("click", saveStock)









