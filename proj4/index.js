// arrow function everything
// change declaration
// spread operator 
// window load

const cards = document.querySelectorAll(".card");
console.log(cards);

//variables
var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

const flip = () => {
    // console.log("Card flipped");
    // console.log(this);
    this.classList.add("flip").bind;
    if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
    } else {
        secondCard = this;
        console.log(firstCard);
        console.log(secondCard);
        checkIt();
    }

};

function checkIt() {
    // console.log("Checking");

    if (firstCard.dataset.image === secondCard.dataset.image) {
        success();
    } else {
        fail();
    }
};

function success() {
    // console.log("Success");
    firstCard.removeEventListener('click', flip);
    secondCard.removeEventListener('click', flip);
    reset();
};

function fail() {
    // console.log("Failed");
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 1000);

};

function reset(params) {
    isFlipped = false;
    firstCard = null;
    secondCard = null;
};

//TODO shuffle 

(function shuffle(params) {
    cards.forEach((card) => {
        var index = Math.floor(Math.random() * 16);
        card.style.order = index;
    });
})();