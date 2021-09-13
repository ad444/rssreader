let newsSectionContainer = document.getElementById("newsSectionContainer");
let websiteSectionContainer = document.getElementById("websiteSectionContainer");
let educationSectionContainer = document.getElementById("educationSectionContainer");

const newsJSON = () => {

   const xhr = new XMLHttpRequest();

   xhr.open('GET', '/static/json/newsSectionContainer.json', false);

   xhr.onload = function () {
      JSON.parse(this.response).newscards.forEach(element => {
         newsSectionContainer.innerHTML += `
             <div id="card" class="col-5 mx-auto mb-5">
               <div class="row">
                  <div class="col-12">
                        <p id="cardHeader">${element.header}</p>
                  </div>
                  <div class="col-6">
                        <img id="cardImage" src="${element.cardImage}" alt="${element.header}">
                  </div>
                  <div class="col-6">
                        <p id="cardLink"><a href='/dashboard/${element.url}'>Check out feeds</a></p>
                  </div>
               </div>
             </div>
             `;
      });
   }

   xhr.send();
};
newsJSON();

const websiteJSON = () => {
   const xhr = new XMLHttpRequest();

   xhr.open('GET', '/static/json/websiteContainer.json', false);

   xhr.onload = function () {
      JSON.parse(this.response).websiteCards.forEach(element => {
         websiteSectionContainer.innerHTML += `
             <div id="card" class="col-5 mx-auto mb-5">
               <div class="row">
                  <div class="col-12">
                        <p id="cardHeader">${element.header}</p>
                  </div>
                  <div class="col-6">
                        <img id="cardImage" src="${element.logo}">
                  </div>
                  <div class="col-6">
                        <p id="cardLink"><a href=${element.link}>Visit the website</a></p>
                  </div>
               </div>
             </div>
             `;
      });
   }

   xhr.send();
};
websiteJSON();

const educationJSON = () => {
   const xhr = new XMLHttpRequest();

   xhr.open('GET', '/static/json/educationSectionContainer.json', false);

   xhr.onload = function () {
      JSON.parse(this.response).educationCards.forEach(element => {
         educationSectionContainer.innerHTML += `
             <div id="card" class="col-5 mx-auto mb-5">
               <div class="row">
                  <div class="col-12">
                        <p id="cardHeader">${element.header}</p>
                  </div>
                  <div class="col-6">
                        <img id="cardImage" src="${element.logo}">
                  </div>
                  <div class="col-6">
                        <p id="cardLink"><a href=${element.link}>Visit the website</a></p>
                  </div>
               </div>
             </div>
             `;
      });
   }
  xhr.send();
};
educationJSON();

// javascript for devices having width less than 992px 

let mobileNewsSectionContainer = document.getElementById("mobileNewsSectionContainer");
let mobileWebsiteSectionContainer = document.getElementById("mobileWebsiteSectionContainer");
let mobileEducationSectionContainer = document.getElementById("mobileEducationSectionContainer");

const mobileNewsJSON = () => {

   const xhr = new XMLHttpRequest();

   xhr.open('GET', '/static/json/newsSectionContainer.json', false);

   xhr.onload = function () {
      JSON.parse(this.response).newscards.forEach(element => {
         mobileNewsSectionContainer.innerHTML += `
             <div id="card" class="col-10 col-sm-5 mx-auto mb-5">
               <div class="row">
                  <div class="col-12">
                        <p id="cardHeader">${element.header}</p>
                  </div>
                  <div class="col-6">
                        <img id="cardImage" src="${element.cardImage}">
                  </div>
                  <div class="col-6">
                        <p id="cardLink"><a href='/dashboard/${element.url}'>Check out feeds</a></p>
                  </div>
               </div>
             </div>
             `;
      });
   }

   xhr.send();
};
mobileNewsJSON();

const mobileWebsiteJSON = () => {
   const xhr = new XMLHttpRequest();

   xhr.open('GET', '/static/json/websiteContainer.json', false);

   xhr.onload = function () {
      JSON.parse(this.response).websiteCards.forEach(element => {
         mobileWebsiteSectionContainer.innerHTML += `
             <div id="card" class="col-10 col-sm-5 mx-auto mb-5">
               <div class="row">
                  <div class="col-12">
                        <p id="cardHeader">${element.header}</p>
                  </div>
                  <div class="col-6">
                        <img id="cardImage" src="${element.logo}">
                  </div>
                  <div class="col-6">
                        <p id="cardLink"><a href=${element.link}>Visit the website</a></p>
                  </div>
               </div>
             </div>
             `;
      });
   }

   xhr.send();
};
mobileWebsiteJSON();

const mobileEducationJSON = () => {
   const xhr = new XMLHttpRequest();

   xhr.open('GET', '/static/json/educationSectionContainer.json', false);

   xhr.onload = function () {
      JSON.parse(this.response).educationCards.forEach(element => {
         mobileEducationSectionContainer.innerHTML += `
             <div id="card" class="col-10 col-sm-5 mx-auto mb-5">
               <div class="row">
                  <div class="col-12">
                        <p id="cardHeader">${element.header}</p>
                  </div>
                  <div class="col-6">
                        <img id="cardImage" src="${element.logo}">
                  </div>
                  <div class="col-6">
                        <p id="cardLink"><a href=${element.link}>Visit the website</a></p>
                  </div>
               </div>
             </div>
             `;
      });
   }
  xhr.send();
};
mobileEducationJSON();


