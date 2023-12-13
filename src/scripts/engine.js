const emojis = [
    "🐱‍👤",
    "🐱‍👤",
    "🎮",
    "🎮",
    "🍷",
    "🍷",
    "🗿",
    "🗿",
    "🎶",
    "🎶",
    "👓",
    "👓",
    "💋",
    "💋",
    "👌",
    "👌",
    "💕",
    "💕"
];



let openCards = [];

let points = 0;

let shuffledEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for(let i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "card";
    box.id = "a" + i;
    box.innerHTML = shuffledEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function shuffleEmojis(){
    shuffledEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));    

    for(let i = 0; i < emojis.length; i++){
        document.querySelector(`#a${i}`).classList.remove("open");
        setTimeout(() => {
            document.querySelector(`#a${i}`).innerHTML = shuffledEmojis[i]; 
        }, 500);
    }
    document.querySelector(".modal").classList.remove("visible");
}

function handleClick(){
    let checkId = "";
    if(openCards.length < 2 && this.id != checkId){
        this.classList.add("open");
        checkId = this.id;
        openCards.push(this);
    }

    if(openCards.length === 2){
        setTimeout(checkMatchingCards, 500);
    }
}

function checkMatchingCards(){
    if(openCards[0].innerHTML != openCards[1].innerHTML){
        openCards[0].classList.remove("open");
        openCards[1].classList.remove("open");
        openCards.pop();
        openCards.pop();
    }else if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards.pop();
        openCards.pop();
        points += 1;
        checkWin();
    }
}

function checkWin(){
    if(points === 9){
        points = 0;
        document.querySelector(".modal").classList.add("visible");
    }
}
