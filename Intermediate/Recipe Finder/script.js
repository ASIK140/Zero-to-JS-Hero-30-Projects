// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const timeFilter = document.getElementById('timeFilter');
const recipesContainer = document.getElementById('recipesContainer');
const recipeCount = document.getElementById('recipeCount');
const recipeModal = document.getElementById('recipeModal');
const closeModal = document.querySelector('.close');

let recipes=[]
async function loadRecipes(){
        const response=await fetch("recipes.json")
        recipes= await response.json();
        console.log(recipes);
        displayRecipes(recipes)
        populateCategories()
}

function displayRecipes(recipesToDisplay){
    recipesContainer.innerHTML=''
    if(recipesToDisplay.length===0){
        recipesContainer.innerHTML = '<p class="no-results">No recipes found. Try a different search.</p>';
        recipeCount.textContent="0 recipes found"
        return;
    }
    recipeCount.textContent=`${recipesToDisplay.length} ${recipesToDisplay.length===1? "recipe":"recipes"}`
    recipesToDisplay.forEach(recipe => {
        const recipeCard=document.createElement('div')
        recipeCard.className="recipe-card";
                recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-info">
                <h3 class="recipe-title">${recipe.name}</h3>
                <div class="recipe-meta">
                    <span><i class="fas fa-clock"></i> ${recipe.time} mins</span>
                    <span><i class="fas fa-users"></i> ${recipe.servings} servings</span>
                </div>
                <span class="recipe-category">${recipe.category}</span>
            </div>
        `;

        recipeCard.addEventListener("click",()=> openRecipeModal(recipe))
        recipesContainer.appendChild(recipeCard)
    });
    
}
function populateCategories(){
    const categories=[...new Set(recipes.map(recipe=>recipe.category))]
    categories.sort();
    categories.forEach((category)=>{
        const option =document.createElement("option")
        option.value=category
        option.textContent=category
        categoryFilter.appendChild(option)
    })
}
function filterRecipes(){
    const searchTerm=searchInput.value.toLowerCase();
    const selectedCategory=categoryFilter.value;
    const selectedTime=timeFilter.value
    const filteredRecipes=recipes.filter(recipe => {
        const matchesSearch=
            recipe.name.toLowerCase().includes(searchTerm)||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm))
        const matchesCategory = selectedCategory === '' || recipe.category === selectedCategory;
        const matchesTime = selectedTime === '' || recipe.time <= parseInt(selectedTime);
        
        return matchesSearch && matchesCategory && matchesTime;
    })
    displayRecipes(filteredRecipes)
}
function openRecipeModal(recipe) {
    document.getElementById('modalTitle').textContent = recipe.name;
    document.getElementById('modalImage').src = recipe.image;
    document.getElementById('modalImage').alt = recipe.name;
    document.getElementById('modalTime').textContent = recipe.time;
    document.getElementById('modalServings').textContent = recipe.servings;
    
    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    
    const instructionsList = document.getElementById('modalInstructions');
    instructionsList.innerHTML = '';
    recipe.instructions.forEach((step, index) => {
        const li = document.createElement('li');
        li.textContent = step;
        instructionsList.appendChild(li);
    });
    
    recipeModal.style.display = 'block';
}
// Close modal
closeModal.addEventListener('click', () => {
    recipeModal.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === recipeModal) {
        recipeModal.style.display = 'none';
    }
});

searchBtn.addEventListener('click', filterRecipes);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        filterRecipes();
    }
});
categoryFilter.addEventListener('change', filterRecipes);
timeFilter.addEventListener('change', filterRecipes);
loadRecipes()


