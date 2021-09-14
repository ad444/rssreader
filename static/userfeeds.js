let ifeaturedSourcesContainer = document.getElementById('ifeaturedSourcesContainer');


const userFeeds = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', '/static/json/testing.txt', false);

    xhr.onload = function () {
        JSON.parse(this.response).data.forEach((element) => {
            ifeaturedSourcesContainer.innerHTML += `
            <div id="card" class="col-10 col-md-5 mx-auto mt-3 mb-3">
             <form action="/dashboard/yourfeeds" method="POST">
              <input type="text" value="yourfeeds/${element.id}" name="deleteFeed" style="display:none">
              <button class="deleteFeeds" type="submit"><i class="fas fa-trash"></i></button>
             </form> 
              <p id="feedTitle"><a href="/dashboard/yourfeeds/${element.id}">${element.title}</a></p>
            </div>
        `;
        });
    }

    xhr.send();
}

if(screen.width >= 992){
    userFeeds();
}

// javascript code for devices having width less than 992px
let mobileFeaturedSourcesContainer = document.getElementById('mobileFeaturedSourcesContainer');

const mobileUserFeeds = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', '/static/json/testing.txt', false);

    xhr.onload = function () {
        JSON.parse(this.response).data.forEach((element) => {
            mobileFeaturedSourcesContainer.innerHTML += `
            <div id="card" class="col-10 col-md-5 mx-auto mt-3 mb-3">
             <form action="/dashboard/yourfeeds" method="POST">
              <input type="text" value="yourfeeds/${element.id}" name="deleteFeed" style="display:none">
              <button class="deleteFeeds" type="submit"><i class="fas fa-trash"></i></button>
             </form> 
              <p id="feedTitle"><a href="/dashboard/yourfeeds/${element.id}">${element.title}</a></p>
            </div>
        `;
        });
    }

    xhr.send();
}
if(screen.width < 992){
    mobileUserFeeds();
}

// function to delete feeds
function deleteFeeds(x){
    x.parentElement.remove();
} 