const quote = document.getElementById("quote");
const author = document.getElementById("author");
const buttons = document.querySelectorAll("button");

const categories = document.getElementById("categories");
const categoryArray = ["art", "age", "alone", "amazing", "anger", "architecture", "attitude", "beauty", "best", "birthday", "business", "car", "change", "communications", "cool", "courage", "dad", "dating", "death", "design", "dreams", "education", "environmental", "equality", "experience", "failure", "faith", "family", "famous", "fear", "fitness", "food", "forgiveness", "freedom", "friendship", "funny", "future", "god", "good", "government", "graduation", "great", "happiness", "health", "history", "home", "hope", "humor", "imagination", "inspirational", "intelligence", "jealousy", "knowledge", "leadership", "learning", "legal", "life", "love", "marriage", "medical", "men", "mom", "money", "morning", "movies", "success"];

if(!localStorage.length || localStorage.getItem("data") === "null"){
    localStorage.setItem("data", "computers");
} else {
    categories.innerHTML += '<option value="' + localStorage.getItem("data") + '" selected>' + localStorage.getItem("data") + '</option>';
}

for(let i = 0; i < categoryArray.length; i++){
    categories.innerHTML += '<option value="' + categoryArray[i] + '">' + categoryArray[i] + '</option>';
};

categories.addEventListener("change", () => {
  category = localStorage.setItem("data", categories.value);
});

const generateQuoteFromAPI = () => {
    quote.innerHTML = '<div class="loading loading01"><span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span><span>.</span><span>.</span></div>';
    author.innerHTML = '<div class="loading-author loading01"><span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span><span>.</span><span>.</span></div>';

        category = localStorage.getItem("data");
        $.ajax({
        method: "GET",
        url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
        headers: { "X-Api-Key": "FN/HQ14/tt17sSkt8IXgrw==B4cndcIf8WAKllct" },
        contentType: "application/json",
        success: function (result) {
        for (let index in result) {
            quote.classList.remove("loading");
            quote.innerText = '"' + result[index]["quote"] + '"';
            author.innerText = '~ ' + result[index]["author"];
        }
        },
        error: function ajaxError(jqXHR) {
        console.error("Error: ", jqXHR.responseText);
        },
    });
};

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    generateQuoteFromAPI();
  })
);
