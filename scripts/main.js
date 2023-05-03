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

  const deck = [...cards, ...cards];

  function shuffleCards(arr) {
    return arr.sort(function () {
      return Math.random() - 0.5;
    });
  }

  shuffleCards(deck);

  function generateCardsHTML() {
    let html = "";
    for (let i = 0; i < deck.length; i++) {
      const card = deck[i];
      html += `
        <div class="card" data-name=${card.text}>
            <div class="card-back">
                <img src="https://clockworkchilli.com/assets/demos/memory/images/back.png" alt="Card Back" /> 
            </div>
            <div class="card-front">
                <img src=${card.url} alt=${card.text} />
            </div>
        </div>
        `; // hard code the card-back img
    }
    return html;
  }

  const htmlContainer = document.querySelector(".container");
  const cardsHtml = generateCardsHTML();
  htmlContainer.insertAdjacentHTML("afterbegin", cardsHtml);
})();
