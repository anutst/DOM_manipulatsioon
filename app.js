/*
1) ÜLESANDE ESIALGNE SEADISTUS
Loo HTML-leht koos järgmiste elementidega:

- Tekstiväli, kuhu kasutaja saab ülesande kirja panna.
- Nupp, millega saab ülesande lisada.
- Tühja loendi ala, kuhu ilmuvad kasutaja poolt lisatud ülesanded.

Nõuded:

- HTML-failis peab olema minimaalne struktuur (nt pealkiri, vajalikud nupud ja sisestusväli).
- JavaScriptiga tuleb rakendada ülesannete lisamine loendisse, kasutades DOM-i manipulatsioone. Iga ülesanne tuleb kuvada nimekirjas.
*/

// =======================================================================================
// 1. Väli, kuhu kasutaja saab lisada ülesande
// =======================================================================================
const taskInput = document.getElementById('taskInput');

// =======================================================================================
// 2. Nupp, millele vajutades ülesanne lisada
// =======================================================================================
const addTaskButton = document.getElementById('addTaskButton');

// =======================================================================================
// 3. Loendi ala, kuhu ülesanded lisatakse
// =======================================================================================
const taskList = document.getElementById('taskList');

// =======================================================================================
// 4. Funktsioon, mis käivitatakse, kui kasutaja vajutab nuppu või Enter klahvi
// =======================================================================================
function addTask() {

  // ---------------------------------------------------------------------------------------
  // 5. Võtan kasutaja sisestatud väärtuse, ehk ülesande teksti
  // ---------------------------------------------------------------------------------------
  const taskValue = taskInput.value.trim(); // trim() eemaldab tühikud

  // ---------------------------------------------------------------------------------------
  // 6. Kontrollin, kas kasutaja on midagi sisestanud
  // ---------------------------------------------------------------------------------------
  if (taskValue === '') {
    alert('Väli ei saa olla tühi. Palun lisa ülesanne!'); // Kui midagi pole kirjutatud, avaneb error popup
    return; // Lõpetab funktsiooni
  }

  // ---------------------------------------------------------------------------------------
  // 7. Loon uue listi elemendi (li) loendi jaoks
  // ---------------------------------------------------------------------------------------
  const listItem = document.createElement('li');
  
  // ---------------------------------------------------------------------------------------
  // 8. Lisan uuele elemendile kasutaja sisestatud ülesande sisu
  // ---------------------------------------------------------------------------------------
  listItem.textContent = taskValue;

  // ---------------------------------------------------------------------------------------
  // 9. Loon ja konfigureerin muuda nuppu
  // ---------------------------------------------------------------------------------------
  const editButton = document.createElement('button');
  editButton.textContent = 'Muuda';
  editButton.className = 'edit-btn';
  editButton.onclick = function() {
    const newTaskValue = prompt('Muuda ülesannet:', listItem.firstChild.textContent);
    if (newTaskValue !== null && newTaskValue.trim() !== '') {
      listItem.firstChild.textContent = newTaskValue.trim();
    }
  };

  // ---------------------------------------------------------------------------------------
  // 10. Loon ja konfigureerin kustuta nuppu
  // ---------------------------------------------------------------------------------------
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Kustuta';
  deleteButton.className = 'delete-btn';
  deleteButton.onclick = function() {
    if (confirm('Kas oled kindel, et soovid selle ülesande kustutada?')) {
      taskList.removeChild(listItem);
    }
  };

  // ---------------------------------------------------------------------------------------
  // 11. Lisab nupud loendi elemendile
  // ---------------------------------------------------------------------------------------
  const buttonsContainer = document.createElement('span');
  buttonsContainer.appendChild(editButton);
  buttonsContainer.appendChild(deleteButton);
  listItem.appendChild(buttonsContainer);

  // ---------------------------------------------------------------------------------------
  // 12. Lisab uue (child)ülesande (li) loendisse (ul)
  // ---------------------------------------------------------------------------------------
  taskList.appendChild(listItem);

  // ---------------------------------------------------------------------------------------
  // 13. Tühjendab sisestusvälja, et kasutaja saaks uue ülesande sisestada
  // ---------------------------------------------------------------------------------------
  taskInput.value = '';
}

// =======================================================================================
// 14. Lisan nupule addeventListeneri, mis käivitab funktsiooni 'addTask', kui nuppu vajutada
// =======================================================================================
addTaskButton.addEventListener('click', addTask);

// =======================================================================================
// 15. Lisan addeventListeneri ka sisestusväljale, et enteri vajutamine lisaks samuti ülesande
// =======================================================================================
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') { // Kontrollib, kas vajutati enterit
    addTask(); // Kui vajutati, siis käivitab ülesande lisamise funktsiooni
  }
});

/*
2) ÜLESANDE MUUTMINE JA KUSTUTAMINE
Täienda loendit nii, et iga lisatud ülesande kõrvale ilmuvad:

- Kustutamise nupp, millega saab üksikuid ülesandeid kustutada.
- Muutmise nupp, millega saab muuta olemasolevat ülesannet.

Nõuded:

- Kasutaja peab saama ülesannet redigeerida ilma seda loendist eemaldamata. Redigeerimiseks ava sisestusväli, mille järel saab muudatuse salvestada.
- Kasutaja peab saama ülesande loendist kustutada, ning vastav DOM-element eemaldatakse lehelt.
- Kustutamise nupp avab kinnitusteate, kas ülesanne tõesti soovitakse kustutada.
*/
