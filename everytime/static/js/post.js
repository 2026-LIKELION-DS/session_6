// const ACTIVE_IMG = "/static/img/container.articles.write.question.active.png";
// const NORMAL_IMG = "/static/img/container.articles.write.question.png";

const button = document.getElementById("questionButton");

let clicked = true;

button.addEventListener("click", function () {
  if (clicked === true) {
    button.src = button.dataset.active;
  } else {
    button.src = button.dataset.default;
  }
  clicked = !clicked;
});

const who = document.getElementById("who");

let click = true;

who.addEventListener("click", function () {
  if (click === true) {
    who.src = who.dataset.active;
  } else {
    who.src = who.dataset.default;
  }
  click = !click;
});

// "/img/container.articles.write.anonym.active.png"
// "/img/container.articles.write.anonym.png"

const questionButton= document.getElementById("question");

questionButton.addEventListener("click", function() {
  if(questionContainer.style.display === "block"){
    questionContainer.style.display="none";
  } else{
    questionContainer.style.display="block";
  }
});

// const questionButton= document.getElementById("question");

// questionButton.addEventListener("click", function() {
//   if(questionContainer.style.display === "none"){
//     //questionContainer.style.display="block";
//   } else{
//     //questionContainer.style.display="none";
//     questionContainer.style.display="block";
//   }
// });

// const admitButton=document.getElementById("sectionPencil");

// admitButton.addEventListener("click",function() {
//   if(admitBox.style.display === "block"){
//     admitBox.style.display === "none";
//   } else{
//     admitBox.style.display === "block";
//   }
// });