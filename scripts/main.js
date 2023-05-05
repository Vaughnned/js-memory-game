(function () {
  "use strict";

  const cards = [
    {
      text: "10",
      url: "https://previews.123rf.com/images/henningmarquardt/henningmarquardt1703/henningmarquardt170300277/74712994-large-index-playing-card-10-of-diamonds.jpg",
    },
    {
      text: "Jack",
      url: "https://banner2.cleanpng.com/20180323/ecw/kisspng-jack-playing-card-spades-valet-de-pique-card-game-cards-5ab597d7866db6.8504334215218503275506.jpg",
    },
    {
      text: "Queen",
      url: "https://w7.pngwing.com/pngs/154/214/png-transparent-queen-of-hearts-playing-card-graphy-playing-cards-white-candle-natural.png",
    },
    {
      text: "King",
      url: "https://i.pinimg.com/originals/05/42/bf/0542bf18697e6304dbe4b84278d05994.png",
    },
    {
      text: "Ace",
      url: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/74850/ace-of-diamonds-clipart-xl.png",
    },
    {
      text: "Joker",
      url: "https://media.istockphoto.com/id/1153852267/vector/playing-card-joker-yellow-red-blue-black.jpg?s=612x612&w=0&k=20&c=Hgz0isA2JMM-q6zOSND372GmFTFzP6HZKYD_tVWK5rk=",
    },
  ];

  const deck = [...cards, ...cards]; // add more ...cards if you want a larger memory game
  const htmlContainer = document.querySelector(".container");
  let flippedCards = [],
    matchedCards = [];
  console.log({ matchedCards });

  function shuffleCards(arr) {
    return arr.sort(function () {
      return Math.random() - 0.5;
    });
  }

  shuffleCards(deck);
  generateCardsHTML(deck, htmlContainer);

  function generateCardsHTML(deck, container) {
    let html = "";
    for (let i = 0; i < deck.length; i++) {
      const card = deck[i];
      html += `
        <div class="card" data-name="${card.text}">
            <div class="card__face card__face--front">
                <img src="${card.url}" alt="${card.text}" />
            </div>
            <div class="card__face card__face--back">
            <img class="card__image" src="https://i.pinimg.com/originals/72/13/e1/7213e1a55a3c0c73d5864e14ba1aa7dc.jpg" alt="Card Back" /> 
        </div>
        </div>
        `;
    }
    container.innerHTML = "";
    container.insertAdjacentHTML("afterbegin", html);
  }

  function checkForDuplicate() {
    console.log({ card1: flippedCards[0] });
    console.log({ card2: flippedCards[1] });
    if (
      matchedCards.includes(flippedCards[0])
      // && matchedCards.includes(flippedCards[1].dataset.name)
    ) {
      console.log(matchedCards.includes(flippedCards[0]));
      return true;
    }
    return false;
  }

  function disableCards() {
    flippedCards.forEach(function (card) {
      card.removeEventListener("click", flipCard);
      card.classList.add("match");
      // matchedCards.push(card);
    });
    flippedCards = [];
    if (matchedCards.length === 12) {
    }
  }

  function checkForMatch() {
    console.dir({ flippedCards });
    console.log("checkForMatch firing");
    if (
      flippedCards[0].dataset.name === flippedCards[1].dataset.name &&
      checkForDuplicate() === false
    ) {
      matchedCards.push(flippedCards[0]);
      matchedCards.push(flippedCards[1]);

      console.log({ flippedCards });
      console.log({ matchedCards });
      disableCards();
    } else {
      unflipCards();
      console.log({ flippedCards });
    }
  }

  function unflipCards() {
    flippedCards.forEach(function (card) {
      setTimeout(function () {
        card.classList.remove("flip");
      }, 1000);
    });
    flippedCards = [];
  }

  function flipCard() {
    if (flippedCards[0] === this) {
      return;
    }
    this.classList.add("flip");
    flippedCards.push(this);

    if (flippedCards.length === 2) {
      checkForMatch();
      flippedCards = [];
    }
    checkGameOver();
  }

  function checkGameOver() {
    if (matchedCards.length === 12) {
      setTimeout(function () {
        if (confirm("Congrats! Play Again?")) {
          matchedCards = [];
          shuffleCards(deck);
          generateCardsHTML(deck, htmlContainer);
        }
      }, 500);
    }
  }

  function play() {
    // shuffleCards(deck);

    // const cardsHtml = generateCardsHTML(deck, htmlContainer);
    // htmlContainer.insertAdjacentHTML("afterbegin", cardsHtml);

    const cardNodes = document.querySelectorAll(".card");
    for (let i = 0; i < cardNodes.length; i++) {
      cardNodes[i].addEventListener("click", flipCard);
    }
  }

  play();
})();
