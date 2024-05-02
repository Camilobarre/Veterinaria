const main = document.querySelector("main");

console.log(main);

main.classList.add("d-flex", "justify-content-center", "flex-wrap", "gap-5")

// for (const mascota of mascotasVeterinario) {
//     console.log(mascota);
// }

for (let i = 0; i < mascotasVeterinario.length; i++) {
    main.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${mascotasVeterinario[i].link}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Nombre: ${mascotasVeterinario[i].nombreMascota}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Especie: ${mascotasVeterinario[i].especieMascota}</li>
        <li class="list-group-item">Raza: ${mascotasVeterinario[i].razaMascota}</li>
        <li class="list-group-item">Edad: ${mascotasVeterinario[i].edadMascota}</li>
        <li class="list-group-item">Peso: ${mascotasVeterinario[i].pesoMascota}</li>
        <li class="list-group-item">Estado: ${mascotasVeterinario[i].estadoMascota}</li>
        <li class="list-group-item">Dueño: ${mascotasVeterinario[i].propietarioMascota.nombreDueñoMascota}</li>
        </ul>
        </div>
        `;
}

let button = document.querySelector("button");

function limpiar() {
    button.addEventListener("click", function () {
        main.innerHTML = ""
    })
}

limpiar();