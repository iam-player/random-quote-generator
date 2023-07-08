let quote = document.getElementById("quote");
let author = document.getElementById("author");
let buttons = document.querySelectorAll("button");
let category = 'art';

const generateQuoteFromAPI = clickEvent => {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': 'FN/HQ14/tt17sSkt8IXgrw==B4cndcIf8WAKllct'},
        contentType: 'application/json',
        success: function(result) {
            for (let index in result){
                quote.innerText = result[index]["quote"];
                author.innerText = "~ " + (result[index]["author"]);
            }       
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
};

buttons.forEach((button) => button.addEventListener("click", (e) => {
    generateQuoteFromAPI(); 
}));
