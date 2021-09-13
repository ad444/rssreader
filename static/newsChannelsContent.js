let ifeaturedSourcesContainer = document.getElementById('ifeaturedSourcesContainer');
let featuredSourcesFeeds = JSON.parse(document.getElementById('featuredSourcesFeeds').innerHTML);

featuredSourcesFeeds.items.forEach((element)=>{
    ifeaturedSourcesContainer.innerHTML += `
      <div class="col-10 mx-auto">
         <p id="title">${element.title}</p>
         <p id="link"><a href='${element.link}'>${element.link}</a></p>
         <hr id="hr"/>
      </div>
    `;
});

//javascript code for devices having width less than 992px
let mobileFeaturedSourcesContainer = document.getElementById('mobileFeaturedSourcesContainer');

featuredSourcesFeeds.items.forEach((element)=>{
  mobileFeaturedSourcesContainer.innerHTML += `
    <div class="col-12 col-md-10 mx-auto">
       <p id="title">${element.title}</p>
       <p id="link"><a href='${element.link}'>${element.link}</a></p>
       <hr id="hr"/>
    </div>
  `;
});

// let feedCreateBtn = document.getElementById('feedCreateBtn');
// let feedEnterBar = document.getElementById('feedEnterBar');
// feedCreateBtn.addEventListener('submit', ()=>{
//     feedEnterBar.value="";
// })