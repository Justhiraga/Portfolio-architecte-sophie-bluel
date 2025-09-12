const modifcard = document.querySelector(".modif")

//*toutes les styles en css
modifcard.addEventListener("click", function() {
   
    const carre = document.createElement("div");
    carre.style.width = "630px";
    carre.style.height = "688px";
    carre.style.background = "#fff";
    carre.style.borderRadius = "10px";
    carre.style.position = "fixed";
    carre.style.top = "50%";
    carre.style.left = "50%";
    carre.style.transform = "translate(-50%, -50%)";
    carre.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    carre.style.zIndex = "1000";
    document.body.appendChild(carre);

    const backgroundOverlay = document.createElement("div");
    backgroundOverlay.style.position = "fixed";
    backgroundOverlay.style.top = "0";
    backgroundOverlay.style.left = "0";
    backgroundOverlay.style.width = "100%";
    backgroundOverlay.style.height = "100%";
    backgroundOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    backgroundOverlay.style.zIndex = "999";
    document.body.appendChild(backgroundOverlay);

    const closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "20px";
    closeButton.style.fontSize = "30px";
    closeButton.style.cursor = "pointer";
    carre.appendChild(closeButton);
    closeButton.addEventListener("click", function() {
        document.body.removeChild(carre);
        document.body.removeChild(backgroundOverlay);
    });
    

    const title = document.createElement("h2");
    title.textContent = "Galerie photo";
    title.style.fontFamily = "'Work Sans'";
    title.style.fontWeight = "400";
    title.style.fontSize = "26px";
    title.style.textAlign = "center";
    title.style.marginTop = "60px";
    title.style.color = "#000000";
    carre.appendChild(title);

    const galleryContainer = document.createElement("div");
    galleryContainer.style.display = "flex";
    galleryContainer.style.flexWrap = "wrap";
    galleryContainer.style.justifyContent = "center";
    galleryContainer.style.marginTop = "35px";
    galleryContainer.style.gap = "5px";
    carre.appendChild(galleryContainer);

    stockworks.forEach(work => {
        let image = document.createElement("img");
        image.classList.add("carre-img");
        image.src = work.imageUrl;
        galleryContainer.appendChild(image);
    })
  

});

