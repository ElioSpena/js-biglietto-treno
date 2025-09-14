/*
-Richiedo i dati all'utente:

    età e km da percorrere
    calcolo il prezzo pieno del biglietto 
    imposto le variabili globali 

  -Calcolo lo sconto:

  se l'età utente è minore di 18 anni allora applico uno sconto del 20%
    altrimenti 
  se l'età utente è uguale o maggiore a 65 anni applico uno sconto del 40%
    altrimenti 
   in tutti i casi restanti applico il prezzo pieno 

  -Stampo il messaggio di risultato 
*/





//Dichiarazione variabili e raccolta dati utente

const userAge = prompt("Inserisci la tua età");
const travelKm = prompt("Quanti km vuoi percorrere?");
const ticketPrice = travelKm * 0.21;
let message = "";

console.log(`Età ${userAge}, Km ${travelKm}, € ${ticketPrice}`);

//Implementazione logica e calcolo sconto

if (isNaN(userAge) || isNaN(travelKm)) {
    message = "Inserire un valore numerico e ricarica la pagina";
} else {

    if (userAge < 18) {
        const discounted20 = (ticketPrice * 20) / 100;
        const priceDiscounted20 = ticketPrice - discounted20;
        message = `Il prezzo scontato del biglietto per minorenni, per la tratta di km ${travelKm} è di € ${priceDiscounted20.toFixed(2)}`;
    } else if (userAge >= 65) {
        const discounted40 = (ticketPrice * 40) / 100;
        const priceDiscounted40 = ticketPrice - discounted40;
        message = `Il prezzo scontato del biglietto per over65, per la tratta di km ${travelKm} è di € ${priceDiscounted40.toFixed(2)}`;
    } else {
        message = `Il prezzo pieno del biglietto, per la tratta di km ${travelKm} è di € ${ticketPrice}`;
    }
}

//Output

console.log(message);