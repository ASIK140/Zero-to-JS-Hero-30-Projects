const quotes = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Happiness depends upon ourselves. - Aristotle",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The only way to do great work is to love what you do. - Steve Jobs"
];
const quotesField=document.getElementById("quotes")
function genarateQuotes(){
    let rand=Math.floor(Math.random()*quotes.length)
    quotesField.textContent=`"${quotes[rand]}"`
}




