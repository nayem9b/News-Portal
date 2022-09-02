const loadAllNews = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/category/01');
    const data = await response.json();
    displayNews(data.data)
    console.log(data.data[0])
}

const  displayNews = (allNews) =>{
    const newsContainer = document.getElementById('list-container');
    allNews.forEach(news =>{ 
        const newsDiv  = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
        <div class="flex">
        <div class="card card-side bg-base-100 shadow">
        <figure><img class="object-contain h-48 w-96" src="${news.image_url}" alt="Album"></figure>
        <div class="card-body">
          <h2 class="card-title">${news.title}</h2>
          <div class="avatar">
         <div class="w-10 rounded-full">
       <img class="object-contain"src="${news.author.img}" />
           </div>
         </div
          <p>${news.author.name ? news.author.name : "No data available"}</p>
          <p>Total View: ${news.total_view? news.total_view : "No views"}</p>

          <div class="card-actions justify-end">

          <!-- The button to open modal -->
<label for="my-modal-6" class="btn modal-button">open news</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">${news.title}</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal-6" class="btn">Yay!</label>
    </div>
  </div>
</div>
           
          </div>
        </div>
      </div>
        </div>
        `;
        newsContainer.appendChild(newsDiv);
    });
}

loadAllNews();
displayNews();

{/* <button class="btn btn-primary">Listen</button> */}