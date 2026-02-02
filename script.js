const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("card");
const bgMusic = document.getElementById("bgMusic");

const rejections = [
  { text: "Wait… are you sure? 😳", gif: "images/1.gif" },
  { text: "That button is kinda rude 😤", gif: "images/2.gif" },
  { text: "Plot twist: you like me 💘", gif: "images/3.gif" },
  { text: "This is getting suspicious 👀", gif: "images/4.gif" },
  { text: "Okay now you're teasing 🥺", gif: "images/5.gif" },
  { text: "Last chance… choose wisely 😏", gif: "images/6.gif" }
];

let rejectCount = 0;
let hoverAttempts = 0;
const MAX_ATTEMPTS = 5;

function moveNoButton() {
  if (hoverAttempts >= MAX_ATTEMPTS) return;
  hoverAttempts++;

  const container = document.querySelector(".buttons");
  const padding = 10;

  const maxX =
    container.clientWidth - noBtn.offsetWidth - padding;
  const maxY =
    container.clientHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX + padding;
  const y = Math.random() * maxY + padding;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // GIF appears after 3 seconds
  setTimeout(showPopup, 3000);
}

function showPopup() {
  const data = rejections[rejectCount % rejections.length];
  rejectCount++;

  const container = document.querySelector(".buttons");

  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = `
    <img src="${data.gif}" alt="reaction">
    <div>${data.text}</div>
  `;

  container.appendChild(popup);

  // center inside white area
  popup.style.position = "absolute";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";

  setTimeout(() => popup.remove(), 2200);
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

yesBtn.addEventListener("click", () => {
  bgMusic.volume = 0.6;
  bgMusic.play();

  card.innerHTML = `
    <h1>YAY!! 💖</h1>
    <p>You just made this Valentine’s Day special 🥰</p>
    <p>See you on our date 😉</p>
    <div class="credit">wingman: boot</div>
  `;
});

