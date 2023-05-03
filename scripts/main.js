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
            <div class="card__face card__face--front">
                <img src=${card.url} alt=${card.text} />
            </div>
            <div class="card__face card__face--back">
            <img src="https://i.pinimg.com/originals/72/13/e1/7213e1a55a3c0c73d5864e14ba1aa7dc.jpg" alt="Card Back" /> 
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

  //   function disableCard() {
  //    flippedCards.removeEventListener("click", play());
  //   }

  let flippedCards = [];
  let matchedCards = [];

  function checkForMatch() {
    if (flippedCards[0] === flippedCards[1] && checkForDuplicate() !== true) {
      matchedCards.push(flippedCards[0]);
      matchedCards.push(flippedCards[1]);
      flippedCards = [];
      console.log(flippedCards);
      console.log(matchedCards);
      //   disableCard();
    } else {
      flippedCards = [];
      //   event.currentTarget.classList.add("flip");
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
    // if (checkForMatch() !== true) {
    //   event.currentTarget.classList.remove("flip");
    // }
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
