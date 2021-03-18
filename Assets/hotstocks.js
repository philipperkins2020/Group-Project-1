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
