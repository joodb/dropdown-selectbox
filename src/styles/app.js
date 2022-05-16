const selectBtn = document.querySelector('.select-btn');
const contentsOption = document.querySelector('.contents-option')
const options = document.querySelectorAll('.select-option');
/* select option 보여주기 */

// selectBtn 클릭 시 list를 보여주고 삼각형 이미지의 각도를 변경한다. 
selectBtn.addEventListener('click', () => {
    if( contentsOption.classList.contains('hide')) { // hide가 있다면 (기본)
        contentsOption.classList.remove('hide');
        document.documentElement.style.setProperty('--toggle-degree', '-180deg');
    } else {
        contentsOption.classList.add('hide');
        document.documentElement.style.setProperty('--toggle-degree', '0deg');
    }
});

// selectBtn focus를 잃었을 때 list를 숨기고 삼각형 이미지의 각도를 원래대로 변경한다. 
selectBtn.addEventListener('blur', () => {
    contentsOption.classList.add('hide');
    document.documentElement.style.setProperty('--toggle-degree', '0deg');
});

// list가 선택되면 selectBtn에 내용을 보여주고 리스트를 숨긴다. 
contentsOption.addEventListener('mousedown', (e) => {
    if(e.target.nodeName === "BUTTON") {
        selectBtn.textContent = e.target.textContent;
        contentsOption.classList.add("hide");
        document.documentElement.style.setProperty('--toggle-degree', '0deg');
        document.getElementById('hiddenSelectOption').value = e.target.value;
    }
});


