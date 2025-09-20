/* chiedere due numeri all'utente 
chiedere il tipo di calcolo (somma o differenza)

se l'utente vuole sommare allora numero1 + numero2
 altrimenti 
 numero1 - numero2
*/


// Definisco le variabili 

let message = "";
const userNumber1 = parseInt(prompt("Inserisci un numero", 5));
const userNumber2 = parseInt(prompt("Inserisci un numero", 20));

console.log(userNumber1, userNumber2);

const userMath = prompt("Scegli tra somma o differenza!", "somma");
const somma = userNumber1 + userNumber2;
const differenza = userNumber1 - userNumber2;

console.log(userMath);

// Aggiungo la condizione 

if (userMath === "somma") {
    message = `${userNumber1} + ${userNumber2} = ${somma}`;
}
else if (userMath === "differenza") {
    message = `${userNumber1} - ${userNumber2} = ${differenza}`;
} else {
    message = "Ricarica la pagina e scegli tra somma e differenza!";
}

// Stampo il messaggio di output

console.log(message);
