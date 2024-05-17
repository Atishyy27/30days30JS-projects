const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("Quote")
const auth = document.getElementById("auth")

async function getQuote(url){
    const respose = await fetch(url);
    var data = await respose.json();
    quote.innerHTML = data.content;
    auth.innerHTML = data.author;
}

getQuote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "--- by "+ auth.innerHTML, "Tweet Window", "width=600, height=300");
}