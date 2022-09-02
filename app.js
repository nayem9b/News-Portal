const loadAllCatagory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();
     displayCategory(data.data.news_category)
}





const  displayCategory = (categories) =>{
    const categoryContainer = document.getElementById('list-container');
    categories.forEach(category =>{
        const categoryDiv  = document.createElement('div');
    
        categoryDiv.innerHTML = `
        <div class="">
            <ul id="all-menu" class="menu bg-base-100 rounded-box">
            <li><a class="mx-auto" onclick="clicked()">${category.category_name}</a></li>
            </ul>
        </div>
        `;
        categoryContainer.appendChild(categoryDiv);
    });
}

clicked=()=>{
 
}











loadAllCatagory();

displayCategory();

loadAllNews();
// displayNews();
// take();
