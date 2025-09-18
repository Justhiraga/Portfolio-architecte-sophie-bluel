const modifcard = document.querySelector(".modif")

modifcard.addEventListener("click", function() {
    const carre = document.createElement("div");
    carre.classList.add("carre");
    document.body.appendChild(carre);

    const backgroundOverlay = document.createElement("div");
    backgroundOverlay.classList.add("backgroundOverlay");
    document.body.appendChild(backgroundOverlay);
    backgroundOverlay.addEventListener("click", function() {
        document.body.removeChild(carre);
        document.body.removeChild(backgroundOverlay);
    })

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
        document.body.removeChild(carre);
        const carre2 = document.createElement("div");
        carre2.classList.add("carre");
        document.body.appendChild(carre2);

        backgroundOverlay.addEventListener("click", function() {
            document.body.removeChild(carre2);
            document.body.removeChild(backgroundOverlay);
        })
    

        carre2.appendChild(closeButton);
        closeButton.addEventListener("click", function() {
            document.body.removeChild(carre2);
            document.body.removeChild(backgroundOverlay);
        });

        const backButton = document.createElement("span");
        backButton.classList.add("arrow-back");
        backButton.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
        carre2.appendChild(backButton);
        backButton.addEventListener("click", function() {
            document.body.removeChild(carre2);
            document.body.appendChild(carre);
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



        const line = document.createElement("hr");
        carre2.appendChild(line);
    });
});

