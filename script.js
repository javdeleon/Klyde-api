const API_URL = 'https://api.sampleapis.com/coffee/hot';
const MAX_CARDS = 6;

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

async function displayCoffeeCards() {
    try {
        const data = await fetchData(API_URL);
        console.log('Fetched data:', data);

        const cardsContainer = document.getElementById('cards');
        data.slice(0, MAX_CARDS).forEach(coffee => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h1 class="title">${coffee.title}</h1>
                <img src="${coffee.image}" alt="${coffee.title}">
                <p class="description"><span class='bold'>Description: </span>${coffee.description}</p>
            `;
            cardsContainer.appendChild(card);
        });
    } catch (error) {
        // Handle errors if necessary
    }
}

displayCoffeeCards();
