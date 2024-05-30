const ingredients = [
  "Basil",
  "Cumin",
  "Coriander",
  "Oregano",
  "Thyme",
  "Rosemary",
  "Turmeric",
  "Paprika",
  "Cinnamon",
  "Saffron",
  "Ginger",
  "Cardamom",
  "Fenugreek",
  "Cloves",
  "Bay Leaves"
];

function generateRecipe() {
  const recipeList = document.getElementById("recipe-list");
  recipeList.innerHTML = "";

  // Get random ingredients and protein
  const randomIngredients = getRandomIngredients(3);

  // Loop through all ingredients and create list items
  for (let i = 0; i < randomIngredients.length; i++) {
    const ingredient = randomIngredients[i];
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    recipeList.appendChild(listItem);
  }

  // Function to get random ingredients
  function getRandomIngredients(count) {
    const randomIngredients = [];
    const ingredientsCopy = ingredients.slice();

    // Pick random ingredients from the array
    while (randomIngredients.length < count) {
      const randomIndex = Math.floor(Math.random() * ingredientsCopy.length);
      const pickedIngredient = ingredientsCopy.splice(randomIndex, 1)[0];
      randomIngredients.push(pickedIngredient);
    }
    return randomIngredients;
  }
}