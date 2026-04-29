const inputBox = document.querySelector(".comentbox");
const submitBtn = document.querySelector(".writeButton");
const addComent = document.querySelector(".sectionComment");
const borderTag = document.querySelector(".sectionContent");
const borderTag2 = document.querySelector(".comentContainer");
const dbcoment = document.querySelector(".jscoment");

let cnt = 4;
submitBtn.addEventListener("click", function() {
    let comentTxt=inputBox.value;
    if (comentTxt.length>0){
        createComent(comentTxt);
        borderTag.style.borderBottom = "none";
        borderTag2.style.borderTop="none";
        
        cnt++;
        inputBox.value="";
    }
});

function createComent(text){ //텍스트받아서 대댓글 생성
    addComent.innerHTML += `
        <div class="sectionComment active dbactive">
            <div class="coment-box">
                <div class="writer">
                    <div class="writerImg"><img src="../img/anonymous.profile.png" width="20" height="20">
                    </div>
                    <div class="writerAbout2">
                    <p class="writername2">익명${cnt}</p>
                    </div>
                </div>
                <ul class="comentWriter">
                    <li class="sectionRight-menu jscoment">대댓글</li>
                    <li class="sectionRight-menu">공감</li>
                    <li class="sectionRight-menu">쪽지</li>
                    <li class="sectionRight-menu">신고</li>
                </ul>
            </div>
            <div class="comentValue">
                ${text}
                <p class="writeTime">04/05 21:30</p>
            </div>
        </div>
    `;
    alert(`${text}`);
}
function dbcomentBox(){ //대댓글 입력창 만들기 comentContainer
    const div = document.createElement("div");

    div.className="comentContainer";
    div.innerHTML = `
            <input type="text" class="comentbox" placeholder="대댓글을 입력하세요"></input>
            <ul class="textfunction">
                <li class="check-coment">
                    <input type="checkbox" class="anonymousBox">익명
                </li>
                <li class="writeButton reWriteBtn">
                    <img src="../img/container.articles.write.submit.png"width="40px"height="40px" class="dbcomentSubmit" alt="글작성버튼">
                </li>
            </ul>
    `;
    return div;
    //이 대댓글입력창 comentContainer
}

document.addEventListener("click", function(e){
    if(e.target.classList.contains("jscoment")){
            const commentBox = e.target.closest(".sectionComment"); //sectionComment:댓글 전체 박스
            //댓글당 박스 1개
            if(commentBox.querySelector(".comentContainer"))return; 
            //댓글전체 sectionComment 안에서 comentContainer : 댓글 입력창
        
            const replyBox = dbcomentBox(); //대댓글 입력창
            commentBox.appendChild(replyBox);  //대댓글이랑 대댓글입력창 잡아서 자식으로넣기
    }
});

//대댓글버튼클릭
document.addEventListener("click", function(e){
    const reWriteBtn= e.target.closest(".reWriteBtn");
    if(!reWriteBtn)return; //생성 안됐다면
    const comentContainer = reWriteBtn.closest(".comentContainer");
    const rewriteTxt = comentContainer.querySelector(".comentbox");
    if(rewriteTxt.value.length>0){
        alert(`${rewriteTxt.value}`);
    }
});
