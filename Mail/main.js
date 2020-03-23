// Chiedi all’utente la sua email controlla che sia
// nella lista di chi può accedere e stampa un
// messaggio appropriato


// dichiarazione email e nomi utenze degli array

var email = ["ciao1234@gmail.com", "giovannipascoli@gmail.com", "billgates_xd@outlook.it", "giannimorandi22@gmail.com", "COVID-19@libero.it"]

var nomi = ["Random", "Giovanni Pascoli", "Bill Gates", "Gianni Morandi", "VIRUS"]



console.log(email);
console.log(nomi);

var inserimentoEmail = prompt("inserisci la tua email");

document.getElementById('mail').innerHTML = "l'email inserita non è corretta"


for (var i = 0; i < email.length; i++) {
  if (inserimentoEmail == email[i] ) {
    document.getElementById('mail').innerHTML = "Benvenuto " + nomi[i];
    console.log("puoi entrare")
  }
}
