// 에브리타임 글 작성페이지 클론코딩
// 질문 버튼 클릭 안내문
const questionInfo = document.getElementById('question_info');
const questionBtn = document.querySelector('.question_btn');

let isQuestionActive = false;

questionBtn.addEventListener('click', function() {
    isQuestionActive = !isQuestionActive;
    const question_img = this.querySelector('img');
    if (isQuestionActive) {
        question_info.style.display = 'block';
        question_img.src = "../img/container.articles.write.question.active.png";
    } else {
        question_info.style.display = 'none';
        question_img.src = "../img/container.articles.write.question.png";
    }
});

// 익명 버튼
const anonymButton = document.querySelector('.anonym_btn');

let isAnonym = false;

anonymButton.addEventListener('click', function() {
    isAnonym = !isAnonym;
    const anonym_img = this.querySelector('img');
    if (isAnonym) {
        anonym_img.src = "../img/container.articles.write.anonym.active.png";
    } else {
        anonym_img.src = "../img/container.articles.write.anonym.png";
    }
});