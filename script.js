

const playground = document.getElementById('playground');
//Tekst playground elemendi sisse
console.log(playground.innerText);

// KUIDAS LISADA UUT ELEMENTI
function addNewElement() {
    //Teen uue div elemendi
    const newElement = document.createElement('div'); //Uus div element
    newElement.innerText = 'Im a new element';
    playground.appendChild(newElement); // Uus element läheb playground diviga kokku
}



// KUIDAS KUSTUTADA ELEMENTE

const temporaryElement = document.createElement('p');
temporaryElement.textContent = 'See tekst on nähtaval';
playground.append(temporaryElement);

//Variant 1: temporaryElement.remove();

//Variant 2: (pead teadma parent elementi) playground.removeChild(temporaryElement);

const fruitBasket = document.createElement('div');
fruitBasket.innerHTML = `
<p>Viinamarjad</p>
<p>Maasikad</p>
<p>Vaarikad</p>
`;
// näha on kõiki fruitbasketi asju 

playground.append(fruitBasket);

//Nüüd eemaldame fruitbasketi sisu
while (fruitBasket.firstChild) {
    fruitBasket.removeChild(fruitBasket.firstChild);
}

// ATRIBUUTIDEGA TÖÖTAMINE 

const magicWand = document.createElement('div');
magicWand.setAttribute('id', 'wand1');
magicWand .setAttribute('class', 'magical-item wand');
magicWand.textContent  = 'Magic Wand';

console.log(magicWand.id);
magicWand.id = 'wand3';
console.log(magicWand.id);

//  DATA ATRIBUUTIDEGA TÖÖTAMINE

const secretScroll = document.createElement('div');

secretScroll.id = 'secretScroll';
secretScroll.dataset.spellType = 'invinsibility';
secretScroll.dataset.components = 'moonlight,shadow essense';
secretScroll.textContent = 'Ancient Spell Scroll';

playground.append(secretScroll);

console.log('Spell type:', secretScroll.dataset.spell);
console.log('Components:', secretScroll.dataset.components.split(','));

//  MANIPULATING CLASSES 

const shapeshifter = document.createElement('div');
shapeshifter.textContent = 'Shapeshifter';
playground.append(shapeshifter);

shapeshifter.classList.add('magical', 'creature');
console.log('Initial classes:', shapeshifter.className);

shapeshifter.classList.remove('creature');
shapeshifter.classList.add('humanoid');

console.log('Updated classes: ', shapeshifter.className);

shapeshifter.classList.toggle('invisible');
console.log(shapeshifter.classList.contains('invisible'));

// EVENT HANDLING

const magicButton = document.createElement('button');
magicButton.textContent = 'Nupuke';
playground.append(magicButton);

magicButton.addEventListener('click', () => {
    alert('Üllatus!');
})