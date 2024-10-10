function arvuta(x, y, op) {
    x = Number(x);
    y = Number(y);
    let tulemus;
  
    switch(op) {
      case 'li': // liitmine
        tulemus = x + y;
        break;
      case 'la': // lahutamine
        tulemus = x - y;
        break;
      case 'k': // korrutamine
        tulemus = x * y;
        break;
      case 'ja': // jagamine
        if (y !== 0) {
          tulemus = x / y;
        } else {
          return 'Nulliga jagamine ei ole lubatud';
        }
        break;
      case 'a': // astmes
        tulemus = x ** y;
        break;
      case 'j': // jääk
        tulemus = x % y;
        break;
      default:
        return 'Tundmatu tehe. Palun vali: li, la, k, ja, a, j.';
    }
  
    return tulemus; // Tagastame ainult tulemuse
  }
  
  // Kasutamine konsoolis
  console.log(arvuta(10, 5, 'la')); // Kuvab 5
  