// Gioco dei dadi, chi fa di più vince

var giocatore = Math.floor(Math.random() * 6) + 1;
var computer = Math.floor(Math.random() * 6) + 1;
var finale;

if(giocatore > computer){
  finale = "Complimenti hai vinto!";
}else if(giocatore < computer){
  finale = "Peccato hai perso :(";
}else{
  finale = "Abbiamo un bel pareggio";
}
document.getElementById('giocatore').innerHTML = giocatore;
document.getElementById('computer').innerHTML = computer;
document.getElementById('finale').innerHTML = finale;

console.log(giocatore);
console.log(computer);
console.log(finale);
