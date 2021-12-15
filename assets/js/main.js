/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav__menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav__close")
    
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu");
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu");
    })
}

/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navmenu = document.getElementById("nav__menu");
    navmenu.classList.remove("show-menu");
}
navLink.forEach(e => e.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleAction(){
    let itemClass = this.parentNode.className;
    for(i = 0; i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close';
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skill__open';
    }
}

skillsHeader.forEach(e => {
    e.addEventListener('click', toggleAction)
    console.log(e);
    }
);

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content');

tabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualication__active')
        })
        target.classList.add('qualication__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualication__active')
        })
        tab.classList.add('qualication__active');
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

const modal = (modalClick => {
    modalViews[modalClick].classList.add('active-modal');
})

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', ()=>  modal(i));
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', ()=> {
        console.log("Hi everybody");    
        modalViews.forEach((modalView) => {
            console.log("Hi cow.")
            modalView.classList.remove('active-modal');
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 