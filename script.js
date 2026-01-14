// Exemple de formulaire simple
// const form = document.getElementById("form");
// const table = document.getElementById("table-container");

// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;

//     if (name === "" || email === ""){
//         alert("Tous les champs sont obligatoires");
//     }

//     const row = document.createElement('tr');

//     row.innerHTML =(
//     `
//         <td>${name}</td>
//         <td>${email}</td>
//         <td><button onClick="this.parentElement.parentElement.remove()">Supprimer</button></td>
//     `
//     );

//     table.appendChild(row);
// });

// Formulaire de login
// const loginForm = document.getElementById("loginForm");
// const message = document.getElementById("loginMessage");

// loginForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   if (username === "" || password === "") {
//     message.textContent = "Tous les champs sont obligatoires";
//     message.style.color = "red";
//     return;
//   }

//   message.textContent = "Connexion réussie (simulation)";
//   message.style.color = "green";
// });


// Exemple de Sondage
const surveyForm = document.getElementById("surveyForm");
const result = document.getElementById("surveyResult");

surveyForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const selected = document.querySelector('input[name="language"]:checked');

  if (!selected) {
    result.textContent = "Veuillez choisir une option";
    result.style.color = "red";
  }

  result.textContent = "Vous avez voté pour : " + selected.value;
  result.style.color = "green";
});
