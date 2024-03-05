// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23

// VARIABLES: 

// name 
// surname 
// favourite color
// random number 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let favouriteColor = prompt("Qual'è il tuo colore preferito?");
let randomN = getRandomInt(1, 100);
let message = ` Your generated password is: ${name + surname + favouriteColor + randomN}`;
document.getElementById("js-1").innerHTML = message; 