//Domanda nome
var firstName = prompt('Qual è il tuo nome?');

//Domanda cognome
var lastName = prompt('Qual è il tuo cognome?');

//Domanda colore preferito
var favColor = prompt('Qual è il tuo colore preferito?');

//Risposta con password suggerita
var genPass = document.getElementById('result');

genPass.innerHTML = 'In base al nostro avanzatissimo sistema di generazione di password, ti suggeriamo di usare la seguente combinazione: ' + firstName.toLowerCase() + lastName.toLowerCase() + favColor.toLowerCase() + '21';