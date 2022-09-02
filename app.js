const loadAllCatagory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
     displayCategory(data.data.news_category)
    console.log(data.data.news_category[0].category_name)
}


const  displayCategory = (categories) =>{
    const categoryContainer = document.getElementById('list-container');
    categories.forEach(category =>{
        const categoryDiv  = document.createElement('div');
        categoryDiv.classList.add('col');
        categoryDiv.innerHTML = `
        <div class="flex">
            <ul id="all-menu" class="menu menu-horizontal bg-base-100 rounded-box">
            <li><a>${category.category_name}</a></li>
        </div>
        `;
        categoryContainer.appendChild(categoryDiv);
    });
}





loadAllCatagory();

displayCategory();
