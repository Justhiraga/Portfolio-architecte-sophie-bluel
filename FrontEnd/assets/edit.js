const modifcard = document.querySelector(".modif")

modifcard.addEventListener("click", function() {
    const carre = document.createElement("div");
    carre.classList.add("carre");
    document.body.appendChild(carre);

    const backgroundOverlay = document.createElement("div");
    backgroundOverlay.classList.add("backgroundOverlay");
    document.body.appendChild(backgroundOverlay);

    const closeButton = document.createElement("span");
    closeButton.classList.add("closebtn");
    closeButton.innerHTML = "&times;";
    carre.appendChild(closeButton);
    closeButton.addEventListener("click", function() {
        document.body.removeChild(carre);
        document.body.removeChild(backgroundOverlay);
    });

    const title = document.createElement("h2");
    title.textContent = "Galerie photo";
    title.classList.add("carretitle");
    carre.appendChild(title);

    const galleryContainer = document.createElement("div");
    galleryContainer.classList.add("galleryContainer");
    carre.appendChild(galleryContainer);

    const mainGallery = document.querySelector(".gallery");

    stockworks.forEach((work) => {
        let images = document.createElement("div");
        images.style.position = "relative";
        images.style.display = "inline-block";

        let image = document.createElement("img");
        image.classList.add("carre-img");
        image.src = work.imageUrl;
        images.appendChild(image);

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        images.appendChild(deleteBtn);

        galleryContainer.appendChild(images);

        deleteBtn.addEventListener("click", function(e) {
            images.remove();


            const galleryFigures = mainGallery.querySelectorAll("figure");
            galleryFigures.forEach(figure => {
                const img = figure.querySelector("img");
                if (img && img.src === work.imageUrl) {
                    figure.remove();
                }
            });
        });
    });
});

