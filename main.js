//ES.1. Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
//Inizializzo un oggetto con 3 chiavi e relativi valori
var studente = {
  'nome' : 'Martina',
  'cognome' : 'Pozzerle',
  'età' : 28
}
//con il for prendo le chiavi dell'oggetto e stampo il testo da me inserito, la chiave e la proprietà della chiave
for(var key in studente){
  $("#first").append("<h4>" + key + ": " + studente[key] + "</h4>");
}
//ES.2.Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
//Creo un array di oggetti con 2 chiavi ciascuno e relative proprietà
var studenti = [
  {
    'nome' : 'Martina',
    'cognome' : 'Pozzerle'
  },
  {
    'nome' : 'Michela',
    'cognome' : 'Rossi'
  },
  {
    'nome' : 'Alessandro',
    'cognome' : 'Brizzi'
  },
  {
    'nome' : 'Marco',
    'cognome' : 'Castellani'
  }
];
//con il for vado a scorrere tutti gli oggetti dentro all'array
for(var i = 0; i < studenti.length; i++){
  $(".box").append("<h4>" + "Nome: " + studenti[i].nome + "</h4>");
  $(".box").append("<h4>" + "Cognome: " + studenti[i].cognome + "</h4>" + "<br>");


}

//ES.3. Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
//creo un oggetto vuoto che verrà poi riempito con gli input dell'utente
var nuovoStudente = {
}

//con il prompt inserisco nelle chiavi che voglio aggiungere nell'oggetto i relativi valori
nuovoStudente.nome = prompt("Inserisci il nome");
nuovoStudente.cognome = prompt("Inserisci il cognome");
nuovoStudente.eta = parseInt(prompt("Insersci l'età"));
console.log(nuovoStudente);
//inserisco il nuovo studente dentro all'array degli studenti
studenti.push(nuovoStudente);
$("#new").append("Nome: " + nuovoStudente.nome + "<br>" + "Cognome: " + nuovoStudente.cognome + "<br>" + "Età: " + nuovoStudente.eta);
