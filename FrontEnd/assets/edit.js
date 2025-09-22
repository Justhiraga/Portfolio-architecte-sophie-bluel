const modifcard = document.querySelector(".modif")
            
modifcard.addEventListener("click", function() {
    const carre = document.createElement("div");
    carre.id = "carre";
    carre.classList.add("carre");
    document.body.appendChild(carre);

    const backgroundOverlay = document.createElement("div");
    backgroundOverlay.id = "backgroundOverlay";
    backgroundOverlay.classList.add("backgroundOverlay");
    document.body.appendChild(backgroundOverlay);

    function onBgClick() {
        removecbg(carre);
    }
    backgroundOverlay.addEventListener("click", onBgClick);

    function removecbg(carre) {
        const backgroundOverlay = document.querySelector("#backgroundOverlay");
        if (backgroundOverlay) {
            backgroundOverlay.removeEventListener("click", onBgClick);
            document.body.removeChild(backgroundOverlay);
        }
        if (carre && carre.parentNode) {
            document.body.removeChild(carre);
        }
    }

    const closeButton = document.createElement("span");
    closeButton.classList.add("closebtn");
    closeButton.innerHTML = "&times;";
    carre.appendChild(closeButton);
    closeButton.addEventListener("click", function() {
        removecbg(carre);
    });

    const title = document.createElement("h2");
    title.textContent = "Galerie photo";
    title.classList.add("carretitle");
    carre.appendChild(title);

    const galleryContainer = document.createElement("div");
    galleryContainer.classList.add("galleryContainer");
    carre.appendChild(galleryContainer);

    const line = document.createElement("hr");
    carre.appendChild(line);

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

    const addPhotoBtn = document.createElement("button");
    addPhotoBtn.classList.add("btnadd");
    addPhotoBtn.textContent = "Ajouter une photo";
    carre.appendChild(addPhotoBtn);
    addPhotoBtn.addEventListener("click", function() {
        popupAddcarre2(carre, backgroundOverlay, onBgClick);
    });
});

function popupAddcarre2(carre, backgroundOverlay, onBgClick) {
    
    if (backgroundOverlay && onBgClick) {
        backgroundOverlay.removeEventListener("click", onBgClick);
    }
    if (carre && carre.parentNode) {
        document.body.removeChild(carre);
    }
    const carre2 = document.createElement("div");
    carre2.classList.add("carre");
    carre2.id = "carre";
    document.body.appendChild(carre2);

    if (backgroundOverlay && !backgroundOverlay.parentNode) {
        document.body.appendChild(backgroundOverlay);
    }

    function onBgClick2() {
        removecbg2();
    }
    backgroundOverlay.addEventListener("click", onBgClick2);

    function removecbg2() {
        if (backgroundOverlay) {
            backgroundOverlay.removeEventListener("click", onBgClick2);
            document.body.removeChild(backgroundOverlay);
        }
        if (carre2 && carre2.parentNode) {
            document.body.removeChild(carre2);
        }
    }

    const closeButton = document.createElement("span");
    closeButton.classList.add("closebtn");
    closeButton.innerHTML = "&times;";
    carre2.appendChild(closeButton);
    closeButton.addEventListener("click", function() {
        removecbg2();
    });

    const backButton = document.createElement("span");
    backButton.classList.add("arrow-back");
    backButton.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
    carre2.appendChild(backButton);
    backButton.addEventListener("click", function() {
        
        if (backgroundOverlay) {
            backgroundOverlay.removeEventListener("click", onBgClick2);
        }

        if (carre2 && carre2.parentNode) {
            document.body.removeChild(carre2);
        }

        if (carre && !carre.parentNode) {
            document.body.appendChild(carre);
            if (backgroundOverlay && onBgClick) {
                backgroundOverlay.addEventListener("click", onBgClick);
            }
        }
    });

    const title = document.createElement("h2");
    title.textContent = "Ajout photo";
    title.classList.add("carretitle");
    carre2.appendChild(title)

    const imgadd = document.createElement("div");
    imgadd.classList.add("carreimgadd");
    carre2.appendChild(imgadd);

    const pic = document.createElement("label");
    pic.innerHTML = '<i class="fa-regular fa-image"></i>';
    pic.classList.add("pic");
    imgadd.appendChild(pic);
    
    const addimg = document.createElement("span");
    addimg.classList.add("addimg");
    addimg.textContent = "+ Ajouter photo";
    imgadd.appendChild(addimg);

    const infoText = document.createElement("p");
    infoText.textContent = "jpg, png : 4mo max";
    imgadd.appendChild(infoText);

    const form = document.createElement("form");
    form.action = "#";
    form.method = "submit";
    form.classList.add("contact-form");
    carre2.appendChild(form);
    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Titre";
    titleLabel.classList.add("label-carre");
    form.appendChild(titleLabel);

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.name = "title";
    titleInput.id = "name";
    titleInput.required = true;
    titleInput.classList.add("contact-input");
    titleLabel.appendChild(titleInput);

    const titleInput2 = document.createElement("label");
    titleInput2.textContent = "Catégorie";
    titleInput2.classList.add("label-carre");
    form.appendChild(titleInput2);

    const categoryselect = document.createElement("select")
    categoryselect.name = "category";
    categoryselect.id = "category";
    categoryselect.required = true;
    categoryselect.classList.add("select-style");
    titleInput2.appendChild(categoryselect);

    const line = document.createElement("hr");
    carre2.appendChild(line);
}
