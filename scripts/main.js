(function () {
  "use strict";

  const cards = [
    {
      text: "Apple",
      url: "https://freepngimg.com/save/133395-slice-apple-download-free-image/512x367",
    },
    {
      text: "Banana",
      url: "https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png",
    },
    {
      text: "Orange",
      url: "https://pngimg.com/d/orange_PNG780.png",
    },
    {
      text: "Peach",
      url: "https://purepng.com/public/uploads/large/purepng.com-peachpeachfruitfullwholetwopeachessweetfoodorange-4815216318294z3v2.png",
    },
    {
      text: "Blueberries",
      url: "https://pngimg.com/d/blueberries_PNG16.png",
    },
    {
      text: "Blackberries",
      url: "https://www.transparentpng.com/thumb/blackberry-fruit/purple-blackberry-fruit-png-free-download-raspberry-black-mulberry-5SyhoM.png",
    },
  ];

  function shuffleCards(arr) {
    return arr.sort(function () {
      return Math.random() - 0.5;
    });
  }

  function generateCardsHTML(deck) {
    let html = "";
    for (let i = 0; i < deck.length; i++) {
      const card = deck[i];
      html += `
        <div class="card" data-name=${card.text}>
            <div class="card__side card-back">
                <img src="https://clockworkchilli.com/assets/demos/memory/images/back.png" alt="Card Back" /> 
            </div>
            <div class="card__side card-front">
                <img src=${card.url} alt=${card.text} />
            </div>
        </div>
        `;
    }
    return html;
  }

  function checkForDuplicate() {
    if (
      matchedCards.includes(flippedCards[0]) &&
      matchedCards.includes(flippedCards[1])
    ) {
      return true;
    }
  }

  let flippedCards = [];
  let matchedCards = [];

  function checkForMatch() {
    if (flippedCards[0] === flippedCards[1] && checkForDuplicate() !== true) {
      matchedCards.push(flippedCards[0]);
      matchedCards.push(flippedCards[1]);
      flippedCards = [];
      console.log(flippedCards);
      console.log(matchedCards);
    } else {
      flippedCards = [];
      console.log(flippedCards);
    }
  }

  function flipCard(event) {
    event.currentTarget.classList.add("flip");
    flippedCards.push(event.currentTarget.dataset.name);

    if (flippedCards.length === 2) {
      checkForMatch();
    }
    if (matchedCards.length === 12) {
      matchedCards = [];
    }
  }

  function play() {
    const deck = [...cards, ...cards];
    shuffleCards(deck);

    const htmlContainer = document.querySelector(".container");
    const cardsHtml = generateCardsHTML(deck);
    htmlContainer.insertAdjacentHTML("afterbegin", cardsHtml);

    const cardNodes = document.querySelectorAll(".card");
    for (let i = 0; i < cardNodes.length; i++) {
      cardNodes[i].addEventListener("click", flipCard);
    }
  }

  play();
})();
