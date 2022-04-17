let state = "off";

/* background-image 수정 필요 */
function toggleBtn() {
    const toggleBtn = document.querySelector(".hide");
    const arrowIcon = document.querySelector(".toggle-btn");
    
    if(state == "off"){
        toggleBtn.style.visibility = "inherit";
        arrowIcon.style.background = "url(images/icon-Triangle-up)";  
        state = "on";
    } else if(state == "on"){
        toggleBtn.style.visibility = "hidden";
        arrowIcon.style.background = "url(images/icon-Triangle-up)";  
        state = "off";
    }
}



/* li가 선택되었을 때 
    선택 창은 닫히고
    내용은 선택한 문구로 바뀌어야한다    
*/

