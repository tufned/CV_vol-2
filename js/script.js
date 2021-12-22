const mainPage = document.querySelector('#main-page');
const justInfoBlock = document.querySelector('#just-info-block');
const skillPage = document.querySelector('#skill-page');
const aboutMePage = document.querySelector('#about-me-page');
// const experiencePage = document.querySelector('#experience-page');
const projectsPage = document.querySelector('#projects-page');
const downloadPage = document.querySelector('.download-page');
const contactPage = document.querySelector('#contact-page');
const body = document.querySelector('body');




// smooth scrolling
const links = document.querySelectorAll('a[href*="#"]');

for (let link of links) {
    const link_href = link.getAttribute('href');
    link.addEventListener('click', e => {
        e.preventDefault();
        if (link_href == '#projects-page' || link_href == '#contact-page') {
            document.querySelector(link_href).scrollIntoView({
                block: "start",
                behavior: "smooth"
            });
        }
        else {
            document.querySelector(link_href).scrollIntoView({
                block: "center",
                behavior: "smooth"
            });
        }
    });
}



const main_dist = mainPage.offsetHeight;
const skill_dist = main_dist + skillPage.offsetHeight + justInfoBlock.offsetHeight;
const aboutMe_dist = skill_dist + aboutMePage.offsetHeight;
// const experience_dist = aboutMe_dist + experiencePage.offsetHeight;
// const projects_dist = experience_dist + projectsPage.offsetHeight;
const projects_dist = aboutMe_dist + projectsPage.offsetHeight;

const navbar = document.querySelector('.nav-bar');
const navElems = document.querySelectorAll('.nav-elem');
const navText_all = document.querySelectorAll('.nav-text');
const navElem_main = document.querySelector('.nav-elem_main');
const navLine = document.querySelector('.nav-line');
const langChangeBlock = document.querySelector('.lang-change-block');

const justInfo = document.querySelector('.just-info');

const aboutMe_photo = document.querySelector('.about-me_left-side');

const projects_title = document.querySelector('.projects_title');
const projectsBg = document.querySelector('.bg_onproject');
projectsBg.style.height = `${document.documentElement.offsetHeight}px`;

const projects = document.querySelectorAll('.project');


let scroll_Y = 0

function onScroll() {
    // nav-bar
    scroll_Y = window.pageYOffset;
    if (scroll_Y > 120) {
        navElem_main.style.display = 'block';
        navLine.style.display = 'block';
        navbar.classList.add('nav-bar_changed');
        langChangeBlock.style.display = 'none';
    }
    else {
        navElem_main.style.display = 'none';
        navLine.style.display = 'none';
        navbar.classList.remove('nav-bar_changed');
        langChangeBlock.style.display = 'block';
    }

    


    const halfWindow = document.documentElement.clientHeight / 2 + scroll_Y;

    if (halfWindow < main_dist) {
        navBarElemsChange(0);
        justInfo_move(scroll_Y);
        projectsBg.style.zIndex = '-2';
        projectsBg.style.opacity = '0';
    }
    else if (halfWindow > main_dist && halfWindow < skill_dist) {
        navBarElemsChange(1);
        justInfo_move(scroll_Y);
        aboutMe_photoMove(scroll_Y);
        projectsBg.style.zIndex = '-2';
        projectsBg.style.opacity = '0';
    }
    else if (halfWindow > skill_dist && halfWindow < aboutMe_dist) {
        navBarElemsChange(2);
        aboutMe_photoMove(scroll_Y);
        projectsBg.style.zIndex = '-2';
        projectsBg.style.opacity = '0';
    }
    // else if (halfWindow > aboutMe_dist && halfWindow < experience_dist) {
    //     navBarElemsChange(3);
    //     aboutMe_photoMove(scroll_Y);
    //     projectsBg.style.zIndex = '-2';
    //     projectsBg.style.opacity = '0';
    // }
    // else if (halfWindow > experience_dist && halfWindow < projects_dist) {
    //     navBarElemsChange(4);
    //     aboutMe_photoMove(scroll_Y);
    //     projectsBg.style.zIndex = '10';
    //     projectsBg.style.opacity = '1';
    //     projects_photoMove(scroll_Y);
    // }
    else if (halfWindow > aboutMe_dist && halfWindow < projects_dist) {
        navBarElemsChange(3);
        aboutMe_photoMove(scroll_Y);
        projectsBg.style.zIndex = '10';
        projectsBg.style.opacity = '1';
        projects_photoMove(scroll_Y);
    }
    else if (halfWindow > projects_dist) {
        navBarElemsChange(4);
        projectsBg.style.zIndex = '-2';
        projectsBg.style.opacity = '0';
    }



}
window.addEventListener('scroll', onScroll);




function justInfo_move(scroll_y) {
    justInfo.classList.add('justInfo_onactive');
    justInfo.style.transform = `translateX(-${scroll_y / 1.5}px)`
}

function navBarElemsChange(elemNum) {
    for (let i = 0; i < navElems.length; i++) {
        navText_all[i].classList.remove('nav-text-onaction');   
    }
    navText_all[elemNum].classList.add('nav-text-onaction');
}

function aboutMe_photoMove(scroll_y) {
    aboutMe_photo.classList.add('about-me_left-side_onactive');
    aboutMe_photo.style.transform = `translateY(-${scroll_y / 4}px)`;
}

function projects_photoMove(scroll_y) {
    for (let i = 0; i < projects.length; i++) {
        projects[i].classList.add(`project_onproject__${i}`);
        projects[i].style.transform = `translateY(-${scroll_y / 3}px)`;
    }
}

// function projects_photoMove(scroll_y) {
//     projects_title.classList.add('');
//     projects_title.style.transform = `translateX(-${scroll_y / 10}px)`;
// }







// moving-elem
const actionBut = document.querySelector('.button-block');

function mainPageButMove(elem, force, startNum, endNum) {
    function elemTransform(e) {
        if (scroll_Y >= startNum && scroll_Y <= endNum) {
            const butPos_Y = elem.getBoundingClientRect().top;
            const butPos_X = elem.getBoundingClientRect().left;
            const midButPos_Y = butPos_Y + (elem.offsetHeight / 2);
            const midButPos_X = butPos_X + (elem.offsetWidth / 2);
            
            const mouse_X = e.x - midButPos_X;
            const mouse_Y = e.y - midButPos_Y;
            
            elem.style.transform = `translateX(${-mouse_X / force}px) translateY(${-mouse_Y / force}px)`;
        }
    }
    document.addEventListener('mousemove', elemTransform);
}

mainPageButMove(actionBut, 20, 0, main_dist);







// ============== contact page ==============
const iMenuBut = document.querySelector('.inputs-menu-open-button');
const iButText = document.querySelector('.i-but-text');
const iBall = document.querySelector('.ball');
const inputsMenu = document.querySelector('.inputs-menu');
const inputsMenu_bg = document.querySelector('.bg-inputs-menu');
const nextToiMenu_text = document.querySelector('.next-to-inputs-menu-text');

const inputs = document.querySelectorAll('.input');
const input_email = document.querySelector('.input_email');
let inputVal = 0;
const inputsBut = document.querySelector('.inputs-but');
const textAreaElems = document.querySelectorAll('.text-area .text');

let bool = false;



function iMenuButTransform(e) {
    const butPos_Y = iMenuBut.getBoundingClientRect().top;
    const butPos_X = iMenuBut.getBoundingClientRect().left;
    const midButPos_Y = butPos_Y + (iMenuBut.offsetHeight / 2);
    const midButPos_X = butPos_X + (iMenuBut.offsetWidth / 2);

    const mouse_X = e.x - midButPos_X;
    const mouse_Y = e.y - midButPos_Y;

    iMenuBut.style.transform = `translateX(${-mouse_X / 5}px) translateY(${-mouse_Y / 5}px)`;
}
contactPage.addEventListener('mousemove', iMenuButTransform);




// inputs menu open
iMenuBut.addEventListener('click', () => {
    iMenuBut.scrollIntoView({
        block: "center",
    });
    document.querySelector('body').style.overflow = 'hidden';

    contactPage.removeEventListener('mousemove', iMenuButTransform);
    iBall.classList.add('i-ball_onactive');
    iButText.style.transform = 'scale(0)';
    navbar.classList.add('nav-bar_changed_contactPge');
    iMenuBut.classList.remove('inputs-menu-open-button_hover');
    
    inputsMenu.style.display = 'block';
    nextToiMenu_text.style.display = 'flex';
    setTimeout(() => {
        inputsMenu_bg.style.display = 'block';
        inputsMenu.style.transform = 'translateX(0)';
        nextToiMenu_text.style.transform = 'translateX(0)';
        nextToiMenu_text.style.opacity = '1';
    }, 200);

    for (let input of inputs) {
        input.addEventListener('change', inputsChange);
    }

    inputsBut.addEventListener('click', infoSending);
});

// inputs menu close
inputsMenu_bg.addEventListener('click', iMenuClose);
function iMenuClose(e) {
    document.querySelector('body').style.overflow = 'visible';

    setTimeout(() => {
        contactPage.addEventListener('mousemove', iMenuButTransform);
        iBall.classList.remove('i-ball_onactive');
        iButText.style.transform = 'scale(1)';
        navbar.classList.remove('nav-bar_changed_contactPge');
        iMenuBut.classList.add('inputs-menu-open-button_hover');
    }, 200);
    
    inputsMenu_bg.style.display = 'none';
    setTimeout(() => {
        inputsMenu.style.display = 'none'
        nextToiMenu_text.style.display = 'none';
    }, 600);
    inputsMenu.style.transform = "translateX(-200%)";

    nextToiMenu_text.style.transform = 'translateX(200%)';
    nextToiMenu_text.style.opacity = '0';

    if (bool == true) iMenuClean();
}


// cancel cursor func
const cancelCursor = document.querySelector('.cancel-cursor')
inputsMenu_bg.addEventListener('mousemove', e => {
    cancelCursor.style.opacity = '1';
    cancelCursor.style.top = `${e.clientY}px`
    cancelCursor.style.left = `${e.clientX}px`
});
inputsMenu_bg.addEventListener('mouseleave', () => {
    cancelCursor.style.opacity = '0';
});




// contact page inputs
function inputsChange() {
    inputVal = this.value.trim();
    this.classList.remove('input_incorrect');
    this.classList.remove('input_correct');
    if (inputVal.length > 0) {
        if (this.classList.contains('input_email')) {
            if (this.value.includes('@')) {
                this.classList.add('input_correct');
                this.classList.remove('input_incorrect');
            }
            else {
                this.classList.remove('input_correct');
                this.classList.add('input_incorrect');
            }
        }
        else this.classList.add('input_correct');
    }
}



// actions after inputs button click
const textAreaH3_value = textAreaElems[0].value;

function infoSending() {
    bool = false;
    let c = 0;
    for (let input of inputs) {
        if (input.classList.contains('input_correct')) {
            c++;
            if (c == 3) bool = true;
        }
    }

    if (bool == true) {
        inputsBut.removeEventListener('click', infoSending);
        for (let i = 0; i < textAreaElems.length; i++) {
            textAreaElems[i].style.color = '#1e2030';
        }
        setTimeout(() => {
            textAreaElems[0].innerHTML = 'Your message was sent!';
            textAreaElems[0].style.color = '#fff';
        }, 600);
    }
    else {
        for (let input of inputs) {
            inputVal = input.value.trim();
            if (inputVal.length == 0) input.classList.add('input_incorrect');
        }
    }
}


// inputs menu clean after the message was sent
function iMenuClean() {
    for (let input of inputs) {
        input.value = '';
        input.classList.remove('input_correct');
    }
    for (let i = 0; i < textAreaElems.length; i++) {
        textAreaElems[i].style.color = '#3a3f5e';
    }
    textAreaElems[0].value = textAreaH3_value;
}



// footer
const footerBottomText = document.querySelector('.footer-bottom-text');
const date = new Date()
const curYear = date.getFullYear();

footerBottomText.innerHTML = `© ${curYear} - Denis Funderat`;

// ============== /contact page ==============