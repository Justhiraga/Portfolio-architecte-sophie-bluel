const requestOptions = {
  method: "POST",
  redirect: "follow",
  headers: { "Content-Type": "application/json" },
};

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  userLogin();
});

function userLogin() {
  const user = {
    email: document.getElementById("email").value,
    password: document.getElementById("mdp").value,
  };
  requestOptions.body = JSON.stringify(user);
  const errorMsg = document.querySelector(".errormsg");
  fetch("http://localhost:5678/api/users/login", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Identifiants incorrects");
      }
      return response.json();
    })
    .then((res) => {
      localStorage.setItem("token", res.token);
      window.location.href = "index.html";
    })
    .catch((error) => {
      errorMsg.textContent = error.message;
      errorMsg.style.display = "flex";
      document.querySelectorAll("input").forEach(item => item.classList.add("inputerror"))
    });
}
