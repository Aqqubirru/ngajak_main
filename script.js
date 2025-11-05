// Pesan clingy-nolak-mabar
const messages = [
  "yakin gamau mabar ell",
  "beneran ini gamau??",
  "kamu sibuk banget yaaa",
  "pliss segame aja ell",
  "klo nolak aku sedih ell",
  "plisss main yaa",
  "main plssss",
  "plsssss 😭",
  "kok tega banget si ell sama aku",
  "sedih dehh",
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  // Ganti teks tombol "No" jadi pesan clingy
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Bikin tombol "Yes" makin besar tiap klik "No"
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  // Pindah ke halaman selanjutnya
  window.location.href = "pagekedua.html";
}
