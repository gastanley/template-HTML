const form = document.getElementById('form-container');
const table = document.getElementById('table-container');

form.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === "" || email === ""){
        alert("Tous les champs doivent être remplis!");
    }

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td><button onclick="this.parentElement.parentElement.remove()">Supprimer</button></td>
    `;

    table.appendChild(row);
});
