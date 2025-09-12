

if(isAdmin){

    const nav = document.querySelector("nav ul li:nth-child(3)");
    nav.style.cursor = "pointer";
    nav.innerHTML="logout";
    nav.addEventListener("click", function() {
      localStorage.removeItem("token");
      window.location.href = "index.html";
    });
    document.querySelectorAll(".admin").forEach(element => {
      element.classList.remove("hidden");
    });

};



  
