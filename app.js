function displayNews(data){
    
  data.sort(function (a, b) {
  return b.total_view - a.total_view;
})}

breakingnews=()=>{
  const loadAllNews = async () => {
      const response = await fetch('https://openapi.programming-hero.com/api/news/category/01');
      const data = await response.json();
      displayNews(data.data)
      console.log(data.data[0])
  }
  const regNews= document.getElementById('news-count');
  regNews.innerHTML=`<h1 id="move"class="text-xl">8 News Found</h1>`
  
  const spinner = document.getElementById("spinner");
  spinner.classList.remove("hidden");
  
  
  const  displayNews = (allNews) =>{
   const newsContainer = document.getElementById('list-container');
      newsContainer.textContent = '' ;
      allNews.forEach(news =>{ 
          const newsDiv  = document.createElement('div');
          newsDiv.classList.add('col');
          spinner.classList.add("hidden");
          newsDiv.innerHTML = `
        
          <a href="#" class="grid grid-cols-1 mx-auto items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      
      <div class="flex flex-col justify-between p-4 leading-normal">
      <img class="object-contain h-60 w-96" src="${news.thumbnail_url}" alt="Album">
      <h2 class="card-title">${news.title}</h2>
      <p>${news.details.slice(0,200)+"..."}</p>
      <div class="avatar">
     <div class="w-10 rounded-full">
   <img class="object-contain"src="${news.author.img}" />
       </div>
     </div
      <p>${news.author.name ? news.author.name : "No data available"}</p>
      <p>${news.author.published_date ? news.author.published_date : "No data available"}</p>
      <p>Total View: ${news.total_view? news.total_view : "No views"}</p>
      </div>
      <label for="my-modal-6" class="btn modal-button grid">open news</label>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg mb-6">${news.title}</h3>
          <img class="object-contain h-60 w-96" src="${news.image_url}" alt="Album">
          <p class="py-4 mb-5">${news.details}</p>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">Okay!</label>
          </div>
        </div>
      </div>
      
  </a>
  `;
          newsContainer.appendChild(newsDiv);
      });
  }
  
  loadAllNews();
  displayNews();
  
  }
  regularnews=()=>{
  
  
  const loadAllNews = async () => {
      const response = await fetch('https://openapi.programming-hero.com/api/news/category/02');
      const data = await response.json();
      displayNews(data.data)
      console.log(data.data[0])
  }
  const regNews= document.getElementById('news-count');
  regNews.innerHTML=`<h1 class="text-xl" >5 News found</h1>`
  
  const spinner = document.getElementById("spinner");
  spinner.classList.remove("hidden");
  
  
  const  displayNews = (allNews) =>{
      const newsContainer = document.getElementById('list-container');
      newsContainer.textContent = '' ;
      allNews.forEach(news =>{ 
          const newsDiv  = document.createElement('div');
          newsDiv.classList.add('col');
          spinner.classList.add("hidden");
          newsDiv.innerHTML = `
        
          <a href="#" class="grid grid-cols-1 mx-auto items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      
      <div class="flex flex-col justify-between p-4 leading-normal">
      <img class="object-contain h-60 w-96" src="${news.thumbnail_url}" alt="Album">
      <h2 class="card-title">${news.title}</h2>
      <p>${news.details.slice(0,200)+"..."}</p>
      <div class="avatar">
     <div class="w-10 rounded-full">
   <img class="object-contain"src="${news.author.img}" />
       </div>
     </div
      <p>${news.author.name ? news.author.name : "No data available"}</p>
      <p>${news.author.published_date ? news.author.published_date : "No data available"}</p>
      <p>Total View: ${news.total_view? news.total_view : "No views"}</p>
      </div>
      <label for="my-modal-6" class="btn modal-button grid">open news</label>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg mb-6">${news.title}</h3>
          <img class="object-contain h-60 w-96" src="${news.image_url}" alt="Album">
          <p class="py-4 mb-5">${news.details}</p>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">Okay!</label>
          </div>
        </div>
      </div>
      
  </a>
  `;
          newsContainer.appendChild(newsDiv);
      });
  }
  
  loadAllNews();
  displayNews();
  
  
  }
  internationalNews=()=>{
  
  
  const loadAllNews = async () => {
      const response = await fetch('https://openapi.programming-hero.com/api/news/category/03');
      const data = await response.json();
      displayNews(data.data)
      console.log(data.data[0])
  }
  
  const regNews= document.getElementById('news-count');
  regNews.innerHTML=`<h1 class="text-xl">5 News Found</h1>`
  
  const spinner = document.getElementById("spinner");
  spinner.classList.remove("hidden");
  
  
  const  displayNews = (allNews) =>{
      const newsContainer = document.getElementById('list-container');
      newsContainer.textContent = '' ;
      allNews.forEach(news =>{ 
          const newsDiv  = document.createElement('div');
          newsDiv.classList.add('col');
          spinner.classList.add("hidden");
          newsDiv.innerHTML = `
        
          <a href="#" class="grid grid-cols-1 mx-auto items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      
      <div class="flex flex-col justify-between p-4 leading-normal">
      <img class="object-contain h-60 w-96" src="${news.thumbnail_url}" alt="Album">
      <h2 class="card-title">${news.title}</h2>
      <p>${news.details.slice(0,200)+"..."}</p>
      <div class="avatar">
     <div class="w-10 rounded-full">
   <img class="object-contain"src="${news.author.img}" />
       </div>
     </div
      <p>${news.author.name ? news.author.name : "No data available"}</p>
      <p>${news.author.published_date ? news.author.published_date : "No data available"}</p>
      <p>Total View: ${news.total_view? news.total_view : "No views"}</p>
      </div>
      <label for="my-modal-6" class="btn modal-button grid">open news</label>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg mb-6">${news.title}</h3>
          <img class="object-contain h-60 w-96" src="${news.image_url}" alt="Album">
          <p class="py-4 mb-5">${news.details}</p>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">Okay!</label>
          </div>
        </div>
      </div>
      
  </a>
  `;
          newsContainer.appendChild(newsDiv);
      });
  }
  
  
  loadAllNews();
  displayNews();
  
  }
  sports=()=>{
  
  
  const loadAllNews = async () => {
      const response = await fetch('https://openapi.programming-hero.com/api/news/category/04');
      const data = await response.json();
      displayNews(data.data)
      console.log(data.data[0])
  }
  const regNews= document.getElementById('news-count');
  regNews.innerHTML=`<h1 class="text-xl">3 News Found</h1>`
   
  const spinner = document.getElementById("spinner");
  spinner.classList.remove("hidden");
  
  const  displayNews = (allNews) =>{
      const newsContainer = document.getElementById('list-container');
      newsContainer.textContent = '' ;
      allNews.forEach(news =>{ 
          const newsDiv  = document.createElement('div');
          newsDiv.classList.add('col');
          spinner.classList.add("hidden");
          newsDiv.innerHTML = `
        
          <a href="#" class="grid grid-cols-1 mx-auto items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      
      <div class="flex flex-col justify-between p-4 leading-normal">
      <img class="object-contain h-60 w-96" src="${news.thumbnail_url}" alt="Album">
      <h2 class="card-title">${news.title}</h2>
      <p>${news.details.slice(0,200)+"..."}</p>
      <div class="avatar">
     <div class="w-10 rounded-full">
   <img class="object-contain"src="${news.author.img}" />
       </div>
     </div
      <p>${news.author.name ? news.author.name : "No data available"}</p>
      <p>${news.author.published_date ? news.author.published_date : "No data available"}</p>
      <p>Total View: ${news.total_view? news.total_view : "No views"}</p>
      </div>
      <label for="my-modal-6" class="btn modal-button grid">open news</label>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg mb-6">${news.title}</h3>
          <img class="object-contain h-60 w-96" src="${news.image_url}" alt="Album">
          <p class="py-4 mb-5">${news.details}</p>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">Okay!</label>
          </div>
        </div>
      </div>
      
  </a>
  `;
          newsContainer.appendChild(newsDiv);
      });
  }
  
  loadAllNews();
  displayNews();
  
  }
  function displayNews(data){
    
    data.sort(function (a, b) {
    return b.total_view - a.total_view;
  });



  
}


  entertainment=()=>{
  const loadAllNews = async () => {
      const response = await fetch('https://openapi.programming-hero.com/api/news/category/05');
      const data = await response.json();
      displayNews(data.data)
      console.log(data.data[0])
  }
  
  const regNews= document.getElementById('news-count');
  regNews.innerHTML=`<h1 class="text-xl">3 News Found</h1>`
  
  const spinner = document.getElementById("spinner");
  spinner.classList.remove("hidden");
  
  const  displayNews = (allNews) =>{
      const newsContainer = document.getElementById('list-container');
      newsContainer.textContent = '' ;
      allNews.forEach(news =>{ 
          const newsDiv  = document.createElement('div');
          newsDiv.classList.add('col');
          spinner.classList.add("hidden");
          newsDiv.innerHTML = `
        
          <a href="#" class="grid grid-cols-1 mx-auto items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      
      <div class="flex flex-col justify-between p-4 leading-normal">
      <img class="object-contain h-60 w-96" src="${news.thumbnail_url}" alt="Album">
      <h2 class="card-title">${news.title}</h2>
      <p>${news.details.slice(0,200)+"..."}</p>
      <div class="avatar">
     <div class="w-10 rounded-full">
   <img class="object-contain"src="${news.author.img}" />
       </div>
     </div
      <p>${news.author.name ? news.author.name : "No data available"}</p>
      <p>${news.author.published_date ? news.author.published_date : "No data available"}</p>
      <p>Total View: ${news.total_view? news.total_view : "No views"}</p>
      </div>
      <label for="my-modal-6" class="btn modal-button grid">open news</label>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg mb-6">${news.title}</h3>
          <img class="object-contain h-60 w-96" src="${news.image_url}" alt="Album">
          <p class="py-4 mb-5">${news.details}</p>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">Okay!</label>
          </div>
        </div>
      </div>
      
  </a>
  `;
          newsContainer.appendChild(newsDiv);
      });
  }
  
  loadAllNews();
  displayNews();
  }
  
  culture=()=>{
  
  
  const loadAllNews = async () => {
      const response = await fetch('https://openapi.programming-hero.com/api/news/category/06');
      const data = await response.json();
      displayNews(data.data)
      console.log(data.data[0])
  }
  
  const regNews= document.getElementById('news-count');
  regNews.innerHTML=`<h1 class="text-xl">No News Found</h1>`
  
  const spinner = document.getElementById("spinner");
  spinner.classList.remove("hidden");
  
  const  displayNews = (allNews) =>{
      const newsContainer = document.getElementById('list-container');
      newsContainer.textContent = '' ;
      allNews.forEach(news =>{ 
          const newsDiv  = document.createElement('div');
          newsDiv.classList.add('col');
          spinner.classList.add("hidden");
          newsDiv.innerHTML = `
        <a href="#" class="grid grid-cols-1 mx-auto items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="flex flex-col justify-between p-4 leading-normal">
      <img class="object-contain h-60 w-96" src="${news.thumbnail_url}" alt="Album">
      <h2 class="card-title">${news.title}</h2>
      <p>${news.details.slice(0,200)+"..."}</p>
      <div class="avatar">
     <div class="w-10 rounded-full">
   <img class="object-contain"src="${news.author.img}" />
       </div>
     </div
      <p>${news.author.name ? news.author.name : "No data available"}</p>
      <p>${news.author.published_date ? news.author.published_date : "No data available"}</p>
      <p>Total View: ${news.total_view? news.total_view : "No views"}</p>
      </div>
      <label for="my-modal-6" class="btn modal-button grid">open news</label>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg mb-6">${news.title}</h3>
          <img class="object-contain h-60 w-96" src="${news.image_url}" alt="Album">
          <p class="py-4 mb-5">${news.details}</p>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">Okay!</label>
          </div>
        </div>
      </div>
      
  </a>
  `;
          newsContainer.appendChild(newsDiv);
      });
  }
  
  loadAllNews();
  displayNews();
  
  
  }
  arts=()=>{
  
  
      const loadAllNews = async () => {
          const response = await fetch('https://openapi.programming-hero.com/api/news/category/07');
          const data = await response.json();
          displayNews(data.data)
          console.log(data.data[0])
      }
  
      const regNews= document.getElementById('news-count');
      regNews.innerHTML=`<h1 class="text-xl">2 News Found</h1>`
  
      const spinner = document.getElementById("spinner");
      spinner.classList.remove("hidden");
  
      
      const  displayNews = (allNews) =>{
          const newsContainer = document.getElementById('list-container');
          newsContainer.textContent = '' ;
          allNews.forEach(news =>{ 
              const newsDiv  = document.createElement('div');
              newsDiv.classList.add('col');
              spinner.classList.add("hidden");
              newsDiv.innerHTML = `
            
      
              <a href="#" class="grid grid-cols-1 mx-auto items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          
          <div class="flex flex-col justify-between p-4 leading-normal">
          <img class="object-contain h-60 w-96" src="${news.thumbnail_url}" alt="Album">
          <h2 class="card-title">${news.title}</h2>
          <p>${news.details.slice(0,200)+"..."}</p>
          <div class="avatar">
         <div class="w-10 rounded-full">
       <img class="object-contain"src="${news.author.img}" />
           </div>
         </div
          <p>${news.author.name ? news.author.name : "No data available"}</p>
          <p>${news.author.published_date ? news.author.published_date : "No data available"}</p>
          <p>Total View: ${news.total_view? news.total_view : "No views"}</p>
          </div>
          <label for="my-modal-6" class="btn modal-button grid">open news</label>
          <input type="checkbox" id="my-modal-6" class="modal-toggle" />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <h3 class="font-bold text-lg mb-6">${news.title}</h3>
              <img class="object-contain h-60 w-96" src="${news.image_url}" alt="Album">
              <p class="py-4 mb-5">${news.details}</p>
              <div class="modal-action">
                <label for="my-modal-6" class="btn">Okay!</label>
              </div>
            </div>
          </div>
          
      </a>
      `;
              newsContainer.appendChild(newsDiv);
          });
      }
      
      
      loadAllNews();
      displayNews();
      
      
      }
      
  
      allNews=()=>{
  
  
          const loadAllNews = async () => {
              const response = await fetch('https://openapi.programming-hero.com/api/news/category/08');
              const data = await response.json();
              displayNews(data.data)
              console.log(data.data[0])
          }
          const regNews= document.getElementById('news-count');
          regNews.innerHTML=`<h1 class="text-xl">26 News Found</h1>`
  
          const spinner = document.getElementById("spinner");
          spinner.classList.remove("hidden");
          
          const  displayNews = (allNews) =>{
              const newsContainer = document.getElementById('list-container');
              newsContainer.textContent = '' ;
              allNews.forEach(news =>{ 
                  const newsDiv  = document.createElement('div');
                  newsDiv.classList.add('col');
                  spinner.classList.add("hidden");
                  newsDiv.innerHTML = `
                
          
                  <a href="#" class="grid grid-cols-1 mx-auto items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              
              <div class="flex flex-col justify-between p-4 leading-normal">
              <img class="object-contain h-60 w-96" src="${news.thumbnail_url}" alt="Album">
              <h2 class="card-title">${news.title}</h2>
              <p>${news.details.slice(0,200)+"..."}</p>
              <div class="avatar">
             <div class="w-10 rounded-full">
           <img class="object-contain"src="${news.author.img}" />
               </div>
             </div
              <p>${news.author.name ? news.author.name : "No data available"}</p>
              <p>${news.author.published_date ? news.author.published_date : "No data available"}</p>
              <p>Total View: ${news.total_view? news.total_view : "No views"}</p>
              </div>
              <label for="my-modal-6" class="btn modal-button grid">open news</label>
              <input type="checkbox" id="my-modal-6" class="modal-toggle" />
              <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                  <h3 class="font-bold text-lg mb-6">${news.title}</h3>
                  <img class="object-contain h-60 w-96" src="${news.image_url}" alt="Album">
                  <p class="py-4 mb-5">${news.details}</p>
                  <div class="modal-action">
                    <label for="my-modal-6" class="btn">Okay!</label>
                  </div>
                </div>
              </div>
              
          </a>
          `;
                  newsContainer.appendChild(newsDiv);
              });
          }
          
          loadAllNews();
          displayNews();
          
          
          }