

if(isAdmin){

//logout = suppr token + reload() index / enlever href addeventlister sur logout
    const nav = document.querySelector("nav ul li:nth-child(3)");
    nav.style.cursor = "pointer";
    nav.innerHTML="logout";
    nav.addEventListener("click", function() {
      localStorage.removeItem("token");
      window.location.href = "index.html";
    });
}

const editDiv = document.querySelector(".edit");
  if (localStorage.getItem("token")) {
    if (editDiv) editDiv.style.display = "block";
  } else {
    if (editDiv) editDiv.style.display = "none";
}

const modifDiv = document.querySelector(".modif");
  if (localStorage.getItem("token")) {
    if (modifDiv) modifDiv.style.display = "block";
  } else {
    if (modifDiv) modifDiv.style.display = "none";
}
