const writeIcon = document.querySelector('.textsubmit');
const textBox1 = document.querySelector('.textBox1');
if(writeIcon){
    writeIcon.addEventListener("click", function(e){
    textBox1.style.display="flex";
    writeIcon.style.display="none";
});
}

const article1 = document.querySelector('.article1');
if(article1){
    article1.addEventListener("click", function(){
        window.location.href="detail.html"
    });
}



const hashTag = document.querySelector('.hashTag');
const text_Content = document.querySelector('.text_Content');
if (hashTag && text_Content) {
    hashTag.addEventListener("click", function () {
        text_Content.value += "#";
        text_Content.focus();
    });
}

const questionBox = document.querySelector('#questionBox');
const questionContainer = document.querySelector('.questionContainer');
if (questionBox && questionContainer) {
    questionBox.addEventListener("change", function () {
        if (questionBox.checked) {
            questionContainer.style.display = "flex";
        } else {
            questionContainer.style.display = "none";
        }
    });
}

let reaction = {
    like : document.querySelector('.reaction_button1'),
    likeNum : document.querySelector('.redTxt'),
    likeTxt : document.querySelector('.grayTxt1'),
    scrap : document.querySelector('.reaction_button2'),
    scrapNum : document.querySelector('.yellowTxt'),
    scrapTxt : document.querySelector('.grayTxt'),
    scrapImg: document.querySelector('.reaction_button2 img'),
    likeImg: document.querySelector('.reaction_button1 img'),
};

let likeClick=false;
let scrapNumClick = false;

if (reaction.like && reaction.likeNum) {
    reaction.like.addEventListener("click", function () {
        if(likeClick) return;
        reaction.likeNum.textContent = Number(reaction.likeNum.textContent) + 1;
        likeClick=true;
    });
}
if(reaction.scrap && reaction.scrapNum && reaction.scrapTxt){
    reaction.scrap.addEventListener("click", function(){
        if(!scrapNumClick){
            reaction.scrapNum.textContent = Number(reaction.scrapNum.textContent)+1;
            reaction.scrapTxt.textContent = "스크랩취소";
            reaction.scrapImg.style.display = "none";
            
            scrapNumClick=true;
        }
        else{
            reaction.scrapNum.textContent= Number(reaction.scrapNum.textContent)-1;
            reaction.scrapTxt.textContent = "스크랩"; 
            reaction.scrapImg.style.display = "inline";
            
            scrapNumClick=false;
        }

    });
}