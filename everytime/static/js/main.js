window.onload = function() {
    const writeBtn = document.getElementById('writebtn'); // 연필 버튼
    const postSection = document.getElementById('post-section'); // 숨겨둔 post 영역
    const originalBox = document.querySelector('.secret-box3'); // 원래 있던 연필 박스

    // 버튼이 정상적으로 존재하는지 확인 후 이벤트 등록
    if (writeBtn) {
        writeBtn.addEventListener('click', function() {
            originalBox.style.display = 'none';    
            postSection.style.display = 'block';   
        });
    }
};