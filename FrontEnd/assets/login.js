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
  fetch("http://localhost:5678/api/users/login", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Mot de passe ou Email incorrects");
      }
      return response.json();
    })
    .then((res) => {
      localStorage.setItem("token", res.token);
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
}

