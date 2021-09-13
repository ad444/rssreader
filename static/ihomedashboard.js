///i.pug content fetching
let ifeaturedSourcesContainer = document.getElementById('ifeaturedSourcesContainer');
let featuredSourcesURL = document.getElementById('featuredSourcesURL').innerHTML;

const fetchNewsChannelsContent = ()=>{

   const xhr = new XMLHttpRequest();

   xhr.open('GET', '/static/json/ihomedashboard.json', false);

   xhr.onload = function(){
      JSON.parse(this.response).cardDetails.forEach((element)=>{
         ifeaturedSourcesContainer.innerHTML += `
          <div id="card" class="col-5">
            <p id="newsChannelsSectors"><a href="/dashboard/${featuredSourcesURL}/${element.cardURL}">${element.cardContent}</a></p>
          </div>
         `;
     });
   }

   xhr.send();
}
fetchNewsChannelsContent();

// javascript code for devices having width less than 992px

let  mobileFeaturedSourcesContainer = document.getElementById('mobileFeaturedSourcesContainer');

const mobileFetchNewsChannelsContent = ()=>{

   const xhr = new XMLHttpRequest();

   xhr.open('GET', '/static/json/ihomedashboard.json', false);

   xhr.onload = function(){
      JSON.parse(this.response).cardDetails.forEach((element)=>{
         mobileFeaturedSourcesContainer.innerHTML += `
          <div id="card" class="col-10 col-md-5">
            <p id="newsChannelsSectors"><a href="/dashboard/${featuredSourcesURL}/${element.cardURL}">${element.cardContent}</a></p>
          </div>
         `;
     });
   }

   xhr.send();
}
mobileFetchNewsChannelsContent();