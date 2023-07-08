const quote = document.getElementById("quote");
const author = document.getElementById("author");
const buttons = document.querySelectorAll("button");

const categories = document.getElementById("categories");
const categoryArray = ["age", "alone", "amazing", "anger", "architecture", "art", "attitude", "beauty", "best", "birthday", "business", "car", "change", "communications", "computers", "cool", "courage", "dad", "dating", "death", "design", "dreams", "education", "environmental", "equality", "experience", "failure", "faith", "family", "famous", "fear", "fitness", "food", "forgiveness", "freedom", "friendship", "funny", "future", "god", "good", "government", "graduation", "great", "happiness", "health", "history", "home", "hope", "humor", "imagination", "inspirational", "intelligence", "jealousy", "knowledge", "leadership", "learning", "legal", "life", "love", "marriage", "medical", "men", "mom", "money", "morning", "movies", "success"];

categories.innerHTML += '<option value="art" disabled selected>art (default)</option>'

for(let i = 0; i < categoryArray.length; i++){
    categories.innerHTML += '<option value="' + categoryArray[i] + '">' + categoryArray[i] + '</option>';
};

let category = "art";

categories.addEventListener("change", () => {
  category = categories.value;
});

const generateQuoteFromAPI = () => {
  let category = categories.value;
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
    headers: { "X-Api-Key": "FN/HQ14/tt17sSkt8IXgrw==B4cndcIf8WAKllct" },
    contentType: "application/json",
    success: function (result) {
      for (let index in result) {
        quote.innerText = result[index]["quote"];
        author.innerText = result[index]["author"];
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
