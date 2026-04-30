const button = document.getElementById("question");

let clicked = true;

button.addEventListener("click", function () {
  if (clicked === true) {
    button.src = "../img/container.articles.write.question.active.png";
  } else {
    button.src = "../img/container.articles.write.question.png";
  }
  clicked = !clicked;
});

const who = document.getElementById("who");

let click = true;

who.addEventListener("click", function () {
  if (click === true) {
    who.src = "../img/container.articles.write.anonym.active.png";
  } else {
    who.src = "../img/container.articles.write.anonym.png";
  }
  click = !click;
});


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