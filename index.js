let btn = document.querySelectorAll(".drum");
let tom_1 = new Audio("sounds/tom-1.mp3");
let tom_2 = new Audio("sounds/tom-2.mp3");
let tom_3 = new Audio("sounds/tom-3.mp3");
let tom_4 = new Audio("sounds/tom-4.mp3");
let snare = new Audio("sounds/snare.mp3");
let crash = new Audio("sounds/crash.mp3");
let kickBass = new Audio("sounds/kick-bass.mp3");
document.addEventListener("keydown", handelKey);
function handelKey(event) {
  let key = event.key;
  if (key === "w") {
    tom_1.play();
  } else if (key == "a") {
    tom_2.play();
  } else if (key == "s") {
    tom_3.play();
  } else if (key == "d") {
    tom_4.play();
  } else if (key == "j") {
    snare.play();
  } else if (key == "k") {
    crash.play();
  } else if (key == "l") {
    kickBass.play();
  }
  animation(event.key);
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", handelClick);
}
function handelClick(key) {
  let keyWord = this.innerHTML;
  animation(keyWord);
  if (keyWord === "w" || key === "w") {
    tom_1.play();
  } else if (keyWord === "a") {
    tom_2.play();
  } else if (keyWord === "s") {
    tom_3.play();
  } else if (keyWord === "d") {
    tom_4.play();
  } else if (keyWord === "j") {
    snare.play();
  } else if (keyWord === "k") {
    crash.play();
  } else if (keyWord === "l") {
    kickBass.play();
  }
}
function animation(currentKey) {
  let clicked = document.querySelector("." + currentKey);
  clicked.classList.add("pressed");
  setTimeout(() => {
    clicked.classList.remove("pressed");
  }, 100);
}
