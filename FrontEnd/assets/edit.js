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
            fetch(`http://localhost:5678/api/works/${work.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                redirect: "follow"
            })
            .then((response) => {
                if (response.ok) {
                    return;
                }
                throw new Error("Erreur lors de la suppression de la photo");
            })
            .then(() => {
                images.remove();
                const galleryFigures = mainGallery.querySelectorAll("figure");
                stockworks.forEach((item, index) => {
                    if (item.id === work.id) {
                        stockworks.splice(index, 1);
                    }});
                galleryFigures.forEach(figure => {
                    const img = figure.querySelector("img");
                    if (img && img.src === work.imageUrl) {
                        figure.remove();
                    }
                });
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

    const pic = document.createElement("div");
    pic.innerHTML = '<i class="fa-regular fa-image"></i>';
    pic.classList.add("pic");
    imgadd.appendChild(pic);

    const addimage = document.createElement("label");
    addimage.textContent = "+ Ajouter photo";
    addimage.classList.add("addimg");
    addimage.htmlFor = "inputfile";
    imgadd.appendChild(addimage);
    
    const inputfile = document.createElement("input");
    inputfile.type = "file";
    inputfile.name = "inputfile";
    inputfile.id = "inputfile";
    inputfile.accept = ".jpg, .jpeg, .png";
    inputfile.required = true;
    inputfile.classList.add("input-file");
    imgadd.appendChild(inputfile);

    const infoText = document.createElement("p");
    infoText.textContent = "jpg, png : 4mo max";
    imgadd.appendChild(infoText);

    inputfile.addEventListener("change", function() {
        const file = inputfile.files[0];
        if (file) {
            const newimg = document.createElement("img");
            newimg.id = "newimg";
            newimg.classList.add("carre-imgadd");
            newimg.src = URL.createObjectURL(file);
            imgadd.appendChild(newimg);
            imgadd.removeChild(pic);
            imgadd.removeChild(inputfile)
            imgadd.removeChild(infoText);
            imgadd.removeChild(addimage);
    }});
 

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

    const selectbtn = document.createElement("span");
    selectbtn.innerHTML = '<i class="fa-solid fa-angle-down"></i>'
    selectbtn.classList.add("select-btn");
    titleInput2.appendChild(selectbtn);


    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    categoryselect.appendChild(defaultOption);

        const requestOptions = {
    method: "GET",
    redirect: "follow"
    };

    fetch("http://localhost:5678/api/categories", requestOptions)
    .then((response) => response.json())
    .then((categories) => {
        categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = category.name;
        categoryselect.appendChild(option);
        
        });
    })
    .catch((error) => {
      errorMsg.textContent = error.message;
      errorMsg.style.display = "flex";
      document.querySelectorAll("input").forEach(item => item.classList.add("inputerror"))
    });

    const line = document.createElement("hr");
    carre2.appendChild(line);

    const submitBtn = document.createElement("span");
    submitBtn.classList.add("btnempty");
    submitBtn.textContent = "Valider";
    form.appendChild(submitBtn);
    carre2.appendChild(submitBtn);

    form.addEventListener("input", function() {
        if (inputfile.files.length > 0 && titleInput.value.trim() !== "" && categoryselect.value !== "") {
            submitBtn.classList.remove("btnempty");
            submitBtn.classList.add("btnadd");
            submitBtn.style.pointerEvents = "auto"; 
        } else {
            submitBtn.classList.remove("btnadd");
            submitBtn.classList.add("btnempty");
            submitBtn.style.pointerEvents = "none"; 
        }
    });

    submitBtn.addEventListener("click", function() {
        const file = inputfile.files[0];
        const title = titleInput.value.trim();
        const category = categoryselect.value;

        if (!file || title === "" || category === "") {
            return;
        };

        const formData = new FormData();
        formData.append("image", file);
        formData.append("title", title);
        formData.append("category", category);
        const token = localStorage.getItem("token");

        const postRequestOptions = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData,
            redirect: "follow"
        };

        fetch("http://localhost:5678/api/works", postRequestOptions)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Erreur lors de l'ajout de la photo")
            })
            .then((newWork) => {
                const gallery = document.querySelector(".gallery");
                const figure = document.createElement("figure");
                const img = document.createElement("img");
                img.src = newWork.imageUrl;
                const caption = document.createElement("figcaption");
                caption.textContent = newWork.title;
                figure.appendChild(img);
                figure.appendChild(caption);
                gallery.appendChild(figure);
                stockworks.push(newWork);
                myset.add(newWork.title + ":" + newWork.id);
        })
        
        removecbg2();
    }); 

}

