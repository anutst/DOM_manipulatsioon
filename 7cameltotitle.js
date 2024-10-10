function getWords(camelCaseStr) {
    if (camelCaseStr === '') {
        return [];
    }
    // Jagab sõnad, hoides lühendid nagu nt "HTML" koos
    return camelCaseStr.split(/(?<=[a-z])(?=[A-Z])/);
}

function camelToTitleCase(camelCaseStr) {
    if (camelCaseStr === '') {
        return '';
    }

    const words = getWords(camelCaseStr);
    
    const titleCasedWords = words.map(word => {
        // Kontrollib, kas sõna on lühend (nt "HTML")
        if (word === word.toUpperCase()) {
            return word; // Hoiab lühendi suurtähtedega
        }
        // Muudab esimese tähe suureks ja ülejäänud väikseks
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return titleCasedWords.join(' ');
}


/* Konsoolis:

console.log(camelToTitleCase('insertAdjacentHTML')); // "Insert Adjacent HTML"
console.log(camelToTitleCase('firstChild')); // "First Child"
console.log(camelToTitleCase('releaseDate')); // "Release Date"
console.log(camelToTitleCase('')); // Tühi
console.log(camelToTitleCase('insertHTML')); // "Insert HTML"
*/
