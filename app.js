const question = document.getElementById("question");
const result = document.getElementById("result");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

const quoteEl = document.getElementById("quote");
const photoEl = document.getElementById("photo");
const nextBtn = document.getElementById("next");

const shareLink = document.getElementById("shareLink");

const items = [
  { photo: "photos/IMG_4069.jpeg", quote: "You are my favorite person." },
  { photo: "photos/IMG_4205.jpeg", quote: "With you, everything feels better." },
  { photo: "photos/IMG_4280.jpeg", quote: "I choose you, every day." },
  { photo: "photos/RAM08220.jpg", quote: "My happy place is with you." },
  { photo: "photos/RAM08912.jpg", quote: "Forever us ❤️" }
];

//

let i = 0;

function showItem(idx) {
  quoteEl.textContent = items[idx].quote;
  photoEl.src = items[idx].photo;
}

no.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * 240) - 120;
  const y = Math.floor(Math.random() * 160) - 80;
  no.style.transform = `translate(${x}px, ${y}px)`;
});

yes.addEventListener("click", () => {
  question.classList.add("hidden");
  result.classList.remove("hidden");

  // start floating animation
  result.classList.add("floating");

  i = 0;
  showItem(i);
});


  const url = window.location.href;
  shareLink.textContent = url;
  shareLink.href = url;
});

nextBtn.addEventListener("click", () => {
  i = (i + 1) % items.length;
  showItem(i);
});
