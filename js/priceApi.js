const url = 'https://cms-evalue.herokuapp.com/api/content/64ac38f61bb748a0e6f7e8e5';  // Odkaz na hodnotu ceny
    const priceElement = document.getElementById('price');

    fetch(url)
      .then(response => response.text())
      .then(data => {
        const cleanPrice = data.replace(/<\/?p>/g, '');
        priceElement.textContent = cleanPrice;  // Aktualizace textu elementu s hodnotou získanou z API
      })
      .catch(error => {
        console.error(error);
      });