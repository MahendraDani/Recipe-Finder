const API_ID = "1b9ab881";
const API_Key = "7cdb5473b9d7121ce51f07a78d71e398";

const button  = document.getElementById("btn");
let query ="Dosa";
const getRecipe = async () =>{
  let input = document.querySelector("input");
  
  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_Key}`
  );
  const data = await response.json();
  // console.log(data.hits[1].recipe);

  let cards_section = document.querySelector(".card-section");
  cards_section.innerHTML = "";
  // console.log(cards_section.innerHTML);
  for (let i = 0; i < data.hits.length; i++){
    cards_section.innerHTML += `
    <div class="card">
    <img src="${data.hits[i].recipe.image}" alt="Image" class="img">
    <h3 class="dish-name">${data.hits[i].recipe.label}</h3>
    <span class="calories">Carloies : ${Math.floor(data.hits[i].recipe.calories)}</span>
    <p class="overview">Take your boring salads up a knotch. This recipe is perfect for
    lunch and only contains 5 ingredients!</p>
    <a href="${data.hits[i].recipe.url}" class="link" target="_blank">View Recipe</a>
    </div>
    `
  }
}


button.addEventListener("click",getRecipe());