let state = "off";

const toggleBtn = document.querySelector(".hide");
const arrowIcon = document.querySelector(".toggle-btn");

arrowIcon.addEventListener('click', () => {
    if(state == "off"){
        toggleBtn.style.visibility = "inherit";
        arrowIcon.style.background = "url(./src/images/icon-Triangle-up)";  
        state = "on";
    } else if(state == "on"){
        arrowIcon.style.background = "url(./src/images/icon-Triangle-up)";  
        toggleBtn.style.visibility = "hidden";
        state = "off";
    }
})


/* 
const selectBox = document.getElementById("selectBox");
const optionBoxList = document.querySelectorAll("#optionBox li button");
const dropDownBtn = document.getElementById("dropDownBtn");
console.log(optionBoxList);
dropDownBtn.addEventListener("click",(e)=>{
    (e.target.classList.contains("click"))?
        e.target.classList.remove("click"):
        e.target.classList.add("click");
});

for (const item of optionBoxList) {
    item.addEventListener("click",(e)=>{
        selectBox.value=e.target.id;
        dropDownBtn.classList.remove("click");
        dropDownBtn.innerText=e.target.innerText;
    });
} */
