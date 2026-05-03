const writeBtn = document.querySelector('#write_btn'); 
const writingArea = document.querySelector('#writing_area');


writeBtn.addEventListener('click', () => {
    if (writingArea.style.display === 'none') {
        writingArea.style.display = 'block';
        writeBtn.style.display = 'none';
    } else {
        writingArea.style.display = 'none';
    }
});