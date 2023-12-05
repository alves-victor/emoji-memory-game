const emojis = [
    "🐱‍👤",
    "🐱‍👤",
    "🎮",
    "🎮",
    "🍷",
    "🍷",
    "🗿",
    "🗿",
    "👌",
    "👌",
    "🎶",
    "🎶",
    "💋",
    "💋",
    "👓",
    "👓"
];

let shuffledEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for(let i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "card";
    box.id = "a" + i;
    box.innerHTML = shuffledEmojis[i];
    document.querySelector(".game").appendChild(box);
}

function shuffleEmojis(){
    shuffledEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));    

    for(let i = 0; i < emojis.length; i++){
        document.querySelector(`#a${i}`).innerHTML = shuffledEmojis[i];
    }
}
