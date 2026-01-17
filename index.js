var viewportWidth = window.innerWidth;
function updateScreenSize(){
    viewportWidth = window.innerWidth;
    console.log(viewportWidth);
    if(viewportWidth < 768){
        location.reload();
    }
}

window.addEventListener('resize', updateScreenSize);

console.log(viewportWidth);

const shareBtn = document.getElementById('shareBtn');
const userContainer = document.getElementById('userContainer');
const socialMediaContainer = document.getElementById('socialMediaContainer');
const boxArrow = document.getElementById('boxArrow');
const arrow = document.getElementById('arrow');
const firstText = document.getElementById('firstText');
const secondText = document.getElementById('secondText');

shareBtn.addEventListener('click', function() {
    
    if(viewportWidth < 768){
        userContainer.style.display = 'none';
        socialMediaContainer.style.display = 'flex';
    }
    if(viewportWidth > 767 && viewportWidth < 1440){
        if(socialMediaContainer.style.opacity === '1'){
            socialMediaContainer.style.opacity = '0';
            boxArrow.style.opacity = '0';
            shareBtn.style.backgroundColor = '#ECF2F8';
            arrow.style.fill = '#48556A';
            // userContainer.style.transform = 'translate(0, 0)';
            // firstText.style.transform = 'translate(0, 0)';
            // secondText.style.transform = 'translate(0, 0)';
        }else{
            socialMediaContainer.style.opacity = '1';
            boxArrow.style.opacity = '1';
            shareBtn.style.backgroundColor = '#48556A';
            arrow.style.fill = '#FFFFFF';
            // userContainer.style.transform = 'translate(0, 38px)';
            // firstText.style.transform = 'translate(0, 38px)';
            // secondText.style.transform = 'translate(0, 38px)';
        }
    }
    if(viewportWidth > 1439){
        if(socialMediaContainer.style.opacity === '1'){
            socialMediaContainer.style.opacity = '0';
            boxArrow.style.opacity = '0';
            shareBtn.style.backgroundColor = '#ECF2F8';
            arrow.style.fill = '#48556A';
            // userContainer.style.transform = 'translate(0, 0)';
            // firstText.style.transform = 'translate(0, 0)';
            // secondText.style.transform = 'translate(0, 0)';
        }else{
            socialMediaContainer.style.opacity = '1';
            boxArrow.style.opacity = '1';
            shareBtn.style.backgroundColor = '#48556A';
            arrow.style.fill = '#FFFFFF';
            // userContainer.style.transform = 'translate(0, 37px)';
            // firstText.style.transform = 'translate(0, 37px)';
            // secondText.style.transform = 'translate(0, 37px)';
        }
    }
});

const shareBtnActive = document.getElementById('shareBtnActive');
shareBtnActive.addEventListener('click', function() {
    if(viewportWidth < 768){
        userContainer.style.display = 'flex';
        socialMediaContainer.style.display = 'none';
    }
});