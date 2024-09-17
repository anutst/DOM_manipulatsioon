// DOM manipulatsiooni õppimine, võimalikult lihtsalt, kasside näited

// 1.  'playground' element HTMList
const playground = document.getElementById('playground');

// 2. Funktsioon uue elemendi lisamiseks
function addNewElement() {
    // 3. Loon uue 'div' elemendi
    const newElement = document.createElement('div');
    newElement.innerText = 'Minu kassi nimi on Priidik'; // 4. Lisan elemendile teksti
    playground.appendChild(newElement); // 5. Lisan uue elemendi 'playground' div-i
}

// 6. Näide elemendi loomisest ja lisamisest
const temporaryElement = document.createElement('p');
temporaryElement.textContent = 'Kas peal on kass või peal on kass?'; // 7. Lisan teksti, ajutise
playground.append(temporaryElement); // 8. Lisan 'temporaryElement' 'playground' div-i

// Variant 1: Elemendi eemaldamine
// temporaryElement.remove(); 

// Variant 2: Eemaldan elemendi, teades selle parent elementi
// playground.removeChild(temporaryElement);

// 9. Lisan uue 'div' elemendi, millel on erinevad read
const catBasket = document.createElement('div');
catBasket.innerHTML = `
<p>Pärsia kass</p>
<p>Siiami kass</p>
<p>Maine Coon kass</p>
`;
playground.append(catBasket); // 10. Lisan 'catBasket' 'playground' div-i

// 11. Eemaldan 'catBasket' sisu
while (catBasket.firstChild) {
    catBasket.removeChild(catBasket.firstChild); // 12. Eemaldan kõik childid
}

// 13. Atribuutide määramine ja muutmine 
const catToy = document.createElement('div');
catToy.setAttribute('id', 'toy1'); // 14. Määran 'id' atribuudi
catToy.setAttribute('class', 'cat-item toy'); // 15. Määran 'class' atribuudi
catToy.textContent = 'Kassi mänguasi'; // 16. Lisan teksti

console.log(catToy.id); // 17. Kuvan 'id' väärtuse konsoolis
catToy.id = 'toy2'; // 18. Muudan 'id' väärtust
console.log(catToy.id); // 19. Kuvan uue 'id' väärtuse konsoolis

// 20. Data atribuutide määramine ja lugemine 
const catBed = document.createElement('div');
catBed.id = 'catBed'; // 21. Määran 'id' atribuudi
catBed.dataset.size = 'large'; // 22. Määran data atribuudi 'size'
catBed.dataset.color = 'black'; // 23. Määran data atribuudi 'color'
catBed.textContent = 'Kasside voodi'; // 24. Lisan teksti

playground.append(catBed); // 25. Lisan 'catBed' 'playground' div-i

console.log('Size:', catBed.dataset.size); // 26. Kuvan data atribuudi 'size'
console.log('Color:', catBed.dataset.color); // 27. Kuvan data atribuudi 'color'

// 28. Klasside manipuleerimine
const catShelf = document.createElement('div');
catShelf.textContent = 'Kasside riiul';
playground.append(catShelf); // 29. Lisan 'catShelf' 'playground' div-i

catShelf.classList.add('cat-shelf', 'wooden'); // 30. Lisan klassid 'cat-shelf' ja 'wooden'
console.log('Initial classes:', catShelf.className); // 31. Kuvan algsed klassid

catShelf.classList.remove('wooden'); // 32. Eemaldan klassi 'wooden'
catShelf.classList.add('modern'); // 33. Lisan klassi 'modern'

console.log('Updated classes:', catShelf.className); // 34. Kuvan uuendatud klassid konsoolis

catShelf.classList.toggle('hidden'); // 35. Kui klassi 'hidden' ei ole, siis lisan selle; kui on, siis eemaldan
console.log(catShelf.classList.contains('hidden')); // 36. Vaatan, kas klass 'hidden' on olemas

// 37. Üritused (nupu klikkimine)
const catButton = document.createElement('button');
catButton.textContent = 'Ära vajuta siia'; // 38. Lisan nupule teksti
playground.append(catButton); // 39. Lisan 'catButton' 'playground' div-i

// 40. Lisan nupule klikkimise
catButton.addEventListener('click', () => {
    alert('Hoiatasin, nüüd su arvuti on täis kasse.'); // Näitab teadet, kui nuppu klikitakse
});