let isAdmin = false;
if(localStorage.getItem("token")){
  isAdmin = true;
}

if(isAdmin){

//logout = suppr token + reload() index / enlever href addeventlister sur logout
    const nav = document.querySelector("nav ul");
    const li = document.createElement("li");
    li.textContent = "logout";
    li.style.cursor = "pointer";
    nav.appendChild(li);
    li.addEventListener("click", function() {
      localStorage.removeItem("token");
      window.location.href = "index.html";
    });
}