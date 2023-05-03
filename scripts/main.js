(function () {
  "use strict";

  const cards = [
    {
      text: "Apple",
      url: "https://pngfre.com/wp-content/uploads/apple-png-image.jpg",
    },
    {
      text: "Banana",
      url: "https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png",
    },
    {
      text: "Orange",
      url: "https://w7.pngwing.com/pngs/187/615/png-transparent-orange-fruit-orange-tangerine-orange-natural-foods-food-citrus-thumbnail.png",
    },
    {
      text: "Peach",
      url: "https://icon2.cleanpng.com/20180403/upq/kisspng-wine-sangria-zinfandel-kefir-peaches-and-cream-peach-fruit-5ac4109b9be946.9433240615227987476386.jpg",
    },
    {
      text: "Blueberries",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVc3OJrjgS5B377E1WH6W1bbCqvwVl9QLuuXYuA6F&s",
    },
    {
      text: "Blackberries",
      url: "https://www.transparentpng.com/thumb/blackberry-fruit/purple-blackberry-fruit-png-free-download-raspberry-black-mulberry-5SyhoM.png",
    },
  ];

  const flippedCards = [];
  const matchedCards = [];

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

  function checkForMatch() {
    if (flippedCards[0] === flippedCards[1]) {
      flippedCards.prototype.push.apply(flippedCards, matchedCards);
      console.log(flippedCards);
    }
  }

  function flipCard(event) {
    event.currentTarget.classList.add("flip");
    flippedCards.push(event.currentTarget.dataset.name);
    if (flippedCards.length === 2) {
      checkForMatch();
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
