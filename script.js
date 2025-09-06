let food = document.querySelector('.food');
let indian = document.querySelector('#indian');
let canadian = document.querySelector('#canadian');
let american = document.querySelector('#american');
let thai = document.querySelector('#thai');
let british = document.querySelector('#british');
let russian = document.querySelector('#russian');

let recipe;
//fetching data from api

const fetchData = async (area) => {
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    let data = await api.json();
    recipe = data.meals; 
    console.log("recipe=",recipe);
    showData(recipe);

}

fetchData('indian');


//search recipe
const search = () =>{
    let input = document.querySelector('#search');
    
    input.addEventListener('keydown', async (e) => {
        if(e.key === 'Enter'){
            let inputval = input.value;
            let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputval}`)
             let data = await api.json();
             recipe = data.meals; 
            showData(recipe);
    }
});
};
search();


const showData = (items) => {
    food.innerHTML = items.map((meal) => `
        <div style="text-align:center; margin: 10px;">
            <img src="${meal.strMealThumb}" class="img" />
            <h5 style="margin:10px">${meal.strMeal}</h5>
        </div>
    `).join(""); 
};

indian.addEventListener('click', () => {
    fetchData('indian');
});
american.addEventListener('click', () => {
    fetchData('american');
});
russian.addEventListener('click', () => {
    fetchData('russian');
});
canadian.addEventListener('click', () => {
    fetchData('canadian');
});
thai.addEventListener('click', () => {
    fetchData('thai');
});
british.addEventListener('click', () => {
    fetchData('british');
});