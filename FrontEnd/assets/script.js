const works = {
  method: "GET",
  redirect: "follow"
};


fetch("http://localhost:5678/api/works", works)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));


function affichergall (){
  let Gallery = document.querySelector(".gallery")  
  works.forEach(element => {
    let img = document.createElement("img")
    img.src = `./images${element.imageUrl}`
  });
}

affichergall()

