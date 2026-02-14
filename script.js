const yes= document.querySelector("#yes");
const no= document.querySelector("#no");
const gif= document.querySelector("#gif");
const text= document.querySelector("#text");
const vid= document.querySelector("video");
let count=2;

const gifs= [
    "../pic/happy.gif",
    "../pic/rusure.gif",
    "../pic/shock.gif",
    "../pic/cry.gif",
    "../pic/cap.gif",
    "../pic/kiss.gif"
];
gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

no.addEventListener("click", () => {
  if (count == 2) {
    gif.src = "../pic/rusure.gif";
    text.innerHTML = "You meant to press YES right?🤨";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count == 3) {
    gif.src = "../pic/shock.gif";
    text.innerHTML = "Really, you don't want to?🫨";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count == 4) {
    gif.src = "../pic/cap.gif";
    text.innerHTML = "I'm gonna cry😭";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count == 5) {
    gif.src = "../pic/cry.gif";
    text.innerHTML = "Pretty Please🥺😘";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

yes.addEventListener("click", () => {
  vid.style.display = "block";
  gif.src = "../pic/kiss.gif";
  text.innerHTML = "Knew it babe 😘";
  yes.innerHTML = '<a href="https://www.instagram.com/nezz29t/">Message me</a>';
  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";
  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});

