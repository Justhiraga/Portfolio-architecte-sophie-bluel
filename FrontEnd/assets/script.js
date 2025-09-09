//WORKS*******************************//
let isAdmin = false;
if(localStorage.getItem("token")){
  isAdmin = true;
}

let stockworks = [];

let myset = new Set();

const worksRequestOptions = {
  method: "GET",
  redirect: "follow"
};




fetch("http://localhost:5678/api/works", worksRequestOptions)
  .then((response) => response.json())
  .then(
    (works) => {
      stockworks = works;
      afficherall(works);
      exctractcategories(works);
    }
).catch((error) => console.error(error));

function afficherall(works) {
  let Gallery = document.querySelector(".gallery");
  works.forEach(element => {
    let figure = document.createElement("figure");
    let text = document.createElement("figcaption");
    let img = document.createElement("img");
    img.src = element.imageUrl;
    text.textContent = element.title;
    Gallery.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(text);
  });
}

function exctractcategories(works){
  myset.add("Tous:0");
  works.forEach(element => {
    myset.add(element.category.name + ":" + element.category.id)
  })
  if(!isAdmin){
    myset.forEach(element => createFilters(element));
  }
}

function createFilters(element){
  let categories = document.querySelector(".filtres");
  let category = element.split(':')
  let text = document.createElement("button");
  text.textContent = category[0];
  categories.appendChild(text);
  text.addEventListener("click", function() {
    filterWorks(category[1]);
  });
}

function filterWorks(categoryId) {
  let Gallery = document.querySelector(".gallery");
  Gallery.innerHTML = "";
  if( categoryId == "0") {
        afficherall(stockworks);
      }
      const filteredWorks = stockworks.filter(work => work.category.id == categoryId);
      afficherall(filteredWorks);
}

  /**const worksRequestOptions = {
    method: "GET",
    redirect: "follow"
  };

  fetch("http://localhost:5678/api/works", worksRequestOptions)
    .then((response) => response.json())
    .then((works) => {
      if( categoryId == "0") {
        afficherall(works);
      }
      const filteredWorks = works.filter(work => work.category.id == categoryId);
      afficherall(filteredWorks);
    })
    .catch((error) => console.error(error));*/


