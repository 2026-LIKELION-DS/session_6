const button = document.getElementById("questionButton");

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


const questionButton= document.getElementById("questionButton");

questionButton.addEventListener("click", function() {
  if(questionContainer.style.display === "block"){
    questionContainer.style.display="none";
  } else{
    questionContainer.style.display="block";
  }
});

const admitButton= document.getElementById("sectionPencil");
const postContainer=document.getElementById("postContainer");
const sectionBox2=document.getElementById("sectionBox2")

admitButton.addEventListener("click", function() {
  if(postContainer.style.display === "none" || postContainer.style.display === ""){
    postContainer.style.display="block";
    sectionBox2.style.display="none"
  } else{
    postContainer.style.display="none";
    sectionBox2.style.display="block"
  }
});