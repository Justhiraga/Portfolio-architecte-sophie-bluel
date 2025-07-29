//WORKS*******************************//
const works = {
  method: "GET",
  redirect: "follow"
};

fetch("http://localhost:5678/api/works", works)
  .then((response) => response.json())
  .then((works) => {affichergall(works)})
  .catch((error) => console.error(error));

function affichergall(works , categoriesid = null) {
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
//CATEGORIES*********************************//
const categories = {
  method: "GET",
  redirect: "follow"
};

fetch("http://localhost:5678/api/categories", categories)
  .then((response) => response.json())
  .then((categories) => affichercate(categories))
  .catch((error) => console.error(error));

function affichercate(categories){
  let filtres = document.querySelector(".filtres");
  categories.forEach(element => {
    let text = document.createElement("button");
    text.textContent = element.name;
    filtres.appendChild(text);
  })
}
 