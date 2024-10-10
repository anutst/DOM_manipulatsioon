// Vastus tuleb konsooli

// Funktsioon Celsius Fahrenheitiks
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Funktsioon Fahrenheit Celsiuseks 
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  // Funktsioon temperatuuride muutmiseks
  function muudaTemperatuur(temperatuur, skaala) {
    let tulemus;
  
    if (skaala === 'C') {
      tulemus = celsiusToFahrenheit(temperatuur);
      console.log(`${temperatuur} °C = ${tulemus.toFixed(2)} °F`);
    } else if (skaala === 'F') {
      tulemus = fahrenheitToCelsius(temperatuur);
      console.log(`${temperatuur} °F = ${tulemus.toFixed(2)} °C`);
    } else {
      console.log("Tundmatu skaala. Palun kasuta 'C' või 'F'.");
    }
  }
  
  // Kasutaja sisendi küsimine
  let temperatuur = parseFloat(prompt("Sisesta temperatuur:"));
  let skaala = prompt("Sisesta skaala (C või F):").toUpperCase();
  
  // Temperatuuri muutmine
  muudaTemperatuur(temperatuur, skaala);
  