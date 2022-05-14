const selectBtn = document.querySelector('.select-btn');
const contentsOption = document.querySelector('.contents-option')
const options = document.querySelectorAll('.list-option');
/* select option 보여주기 */
selectBtn.addEventListener('click', () => {
    if( contentsOption.classList.contains('hide')) { // hide가 있다면 (기본)
        contentsOption.classList.remove('hide');
        document.documentElement.style.setProperty('--toggle-degree', '-180deg');
    } else {
        contentsOption.classList.add('hide');
        document.documentElement.style.setProperty('--toggle-degree', '0deg');
    }
});

/* list 선택 */
for (const i of options) {
    i.addEventListener("click",(e)=>{
        selectBtn.textContent = e.target.textContent;
        contentsOption.classList.add("hide");
        document.documentElement.style.setProperty('--toggle-degree', '0deg');
        document.getElementById('hiddenSelectOption').value = e.target.value;
    });
}



