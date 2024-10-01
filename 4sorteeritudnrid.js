/* Neljas ülesanne, sorteeritud numbrid
 https://www.codeguage.com/courses/js/sorted-numbers-exercise

let esimeneNumber = prompt("Kirjuta üks number");
let teineNumber = prompt("Kirjuta teine number");
let kolmasNumber = prompt("Kirjuta kolmas number");

esimeneNumber = Number(esimeneNumber);
teineNumber = Number(teineNumber);
kolmasNumber = Number(kolmasNumber);

let numbrid = [esimeneNumber, teineNumber, kolmasNumber];

numbrid.sort((esimeneNumber, teineNumber) => esimeneNumber - teineNumber);

// console.log("Sorteeritud numbrid:", numbrid);
alert("Sorteeritud numbrid: " + numbrid.join(", "));
*/