const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("card");
const bgMusic = document.getElementById("bgMusic");

const rejections = [
  { text: "Wait… are you sure? 😳", img: "images/1.png" },
  { text: "That button is kinda rude 😤", img: "images/2.png" },
  { text: "Plot twist: you like me 💘", img: "images/3.png" },
  { text: "Nice try 😏", img: "images/4.png" },
  { text: "Okay now you're teasing 🥺", img: "images/5.png" }
];

let rejectCount = 0;

function moveNoButton() {
  const container = document.querySelector(".buttons");

  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  showPopup();
}

function showPopup() {
  const data = rejections[rejectCount % rejections.length];
  rejectCount++;

  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = `
    <img src="${data.img}" alt="reaction" />
    <div>${data.text}</div>
  `;

  document.body.appendChild(popup);
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
