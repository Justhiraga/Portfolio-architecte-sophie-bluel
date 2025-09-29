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

const errorMsg = document.createElement("div");
errorMsg.classList.add("errormsg");
form.appendChild(errorMsg);

function userLogin() {
  const user = {
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("mdp").value.trim(),
  };
  requestOptions.body = JSON.stringify(user);
  const errorMsg = document.querySelector(".errormsg");
  fetch("http://localhost:5678/api/users/login", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(errorMsg.textContent = "Identifiants incorrects");
      }
      return response.json();
    })
    .then((res) => {
      localStorage.setItem("token", res.token);
      window.location.href = "index.html";
    })
    .catch((error) => {
      errorMsg.textContent = error.message;
      document.querySelectorAll("input").forEach(item => item.classList.add("inputerror"))
    });
}
