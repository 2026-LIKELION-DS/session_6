const writeBtn = document.getElementById('write_btn'); 
const writingArea = document.getElementById('writing_area');

if (writeBtn && writingArea) {
    writeBtn.addEventListener('click', () => {
        writingArea.style.display = 'block';
        writeBtn.style.display = 'none';
    })
}