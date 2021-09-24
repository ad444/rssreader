let ifeaturedSourcesContainer = document.getElementById('ifeaturedSourcesContainer');
let jsonDataString = document.getElementById('jsondata').innerHTML;

JSON.parse(jsonDataString).items.forEach(element => {
    ifeaturedSourcesContainer.innerHTML += `
        <div class="col-10 mx-auto">
            <p id="title">${element.title}</p>
            <p id="link"><a href='${element.link}' target="_blank">${element.link}</a></p>
            <hr id="hr"/>
        </div>
    `;
});

//javascript code for devices having width less than 992px
let mobileFeaturedSourcesContainer = document.getElementById('mobileFeaturedSourcesContainer');
JSON.parse(jsonDataString).items.forEach(element => {
    mobileFeaturedSourcesContainer.innerHTML += `
        <div class="col-12 mx-auto">
            <p id="title">${element.title}</p>
            <p id="link"><a href='${element.link}' target="_blank">${element.link}</a></p>
            <hr id="hr"/>
        </div>
    `;
});
// let feedCreateBtn = document.getElementById('feedCreateBtn');
// let feedEnterBar = document.getElementById('feedEnterBar');
// feedCreateBtn.addEventListener('submit', ()=>{
//     feedEnterBar.value="";
// })