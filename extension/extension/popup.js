let focusCheckBox = document.querySelector(".toggle-checkbox");
let blockingSection = document.querySelector(".blocking-section");
let blSection = document.querySelector(".blocked-list-section");

//blocked-list-section
let visibilityFlag=false;
focusCheckBox.addEventListener("click", function onClick() {
    // console.log("button clicked");
    if(visibilityFlag==true){
        blockingSection.style.display='none';
        blSection.style.display='none';
    }else{
        blockingSection.style.display='block';
        blSection.style.display='block';
    }
    visibilityFlag=!visibilityFlag;
})