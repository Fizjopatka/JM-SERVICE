// INTRO ANIMATION

areYouView();

function introAnimations() {
    const tl = gsap.timeline({defaults: {ease: 'power1.out'} } );

    tl.to('.text', {y: '0%', duration: 1, stagger: 1});
    tl.from('#passion', {duration: 0.6, color:'white'});
    tl.to('.intro-slider', {x:'-100%', duration: 1, delay: 0.5});
    tl.to('.intro', {x: '-100%', duration: 1, delay: -1});
    tl.fromTo('#logo-container', {opacity: 0}, {opacity: 1, duration: 1}, 'anim1');
    tl.fromTo('section', {opacity: 0.2}, {opacity: 1, duration: 1}, 'anim1');
    tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 0.8, delay: 0.5}, 'anim1');
    tl.fromTo('footer', {opacity: 0}, {opacity: 1, duration: 1}, 'anim1');
    tl.fromTo('.hours-container', {opacity: 0}, {opacity: 1, duration: 0.5}, 'hours');
    tl.fromTo('.hours-container-xs', {opacity: 0}, {opacity: 1, duration: 0.5}, 'hours');
    tl.fromTo('.slide-col', {opacity: 0}, {opacity: 1, duration: 0.3, stagger: 0.5}, 'sliders');
    tl.fromTo('.uslugi-xs', {opacity: 0}, {opacity: 1, duration: 0.3, stagger: 0.5},'sliders');
    localStorage.setItem('view', 'yes');
}

// HAVE YOU WATCHED INTRO IN LAST 12H?

function areYouView() {
    const IS_VIEW = localStorage.getItem('view');
    
    if (IS_VIEW === null) {
        const TIME_ENTRANCE = Date.now();

        $('.intro').css('display', 'flex');
        introAnimations();
        localStorage.setItem('TimeEntrance', TIME_ENTRANCE);
    } else {
        const TIME_NOW = Date.now();
        const TWELVE_HOURS_IN_MILLISEC = 43200000;
        const intTimeEntrance = parseInt(localStorage.getItem('TimeEntrance'));
        const timeAfter12h = intTimeEntrance + TWELVE_HOURS_IN_MILLISEC;

        $('.intro').css('display', 'none');
        if (TIME_NOW > timeAfter12h) {
            localStorage.removeItem('view');
            areYouView();
        };
    };
};

//WHAT TODAY IS DAY 

const TODAY= new Date();
const DAY_OF_WEEK = TODAY.getDay();
const HOUR_NOW = TODAY.getHours();

$('.d'+ DAY_OF_WEEK).css('background-color', 'rgba(206, 29, 29, 0.6)');

//HOURS-CONTAINER TITLE ATTRIBUTE

const STILL_CLOSE_INFO = 'Jeszcze zamknięte. Zapraszamy dziś od 9.';
const ALREADY_CLOSE_INFO = 'Już zamknięte. Zapraszamy jutro od 9.';
const OPEN_INFO = 'Otwarte. Zapraszamy do warsztatu, lub do kontaktu telefonicznego.';
const ALREADY_CLOSE_SATURDAY_INFO = 'Już zamknięte. Zapraszamy w poniedziałek od 9.';
const SUNDAY_INFO = 'Zamknięte. Zapraszamy jutro od 9.';

function normalDay(HOUR_NOW) {
    if (HOUR_NOW < 9) {
        $('.hours-container-xs').attr('title', STILL_CLOSE_INFO);
        $('.hours-container').attr('title', STILL_CLOSE_INFO);

    } else if (HOUR_NOW > 16) {
        $('.hours-container-xs').attr('title', ALREADY_CLOSE_INFO );
        $('.hours-container').attr('title', ALREADY_CLOSE_INFO );

    } else {
        $('.hours-container').attr('title', OPEN_INFO);
        $('.hours-container-xs').attr('title', OPEN_INFO);
    };
};

function saturDay(HOUR_NOW) {
    if (HOUR_NOW < 9) {
        $('.hours-container-xs').attr('title', STILL_CLOSE_INFO);
        $('.hours-container').attr('title', STILL_CLOSE_INFO);

    } else if (HOUR_NOW > 13) {
        $('.hours-container-xs').attr('title', ALREADY_CLOSE_SATURDAY_INFO);
        $('.hours-container').attr('title', ALREADY_CLOSE_SATURDAY_INFO);

    } else {
        $('.hours-container').attr('title', OPEN_INFO);
        $('.hours-container-xs').attr('title', OPEN_INFO);
    };
};

switch (DAY_OF_WEEK) {
    case 1:
        normalDay(HOUR_NOW);
        break;
    case 2:
        normalDay(HOUR_NOW);  
        break;      
    case 3:
        normalDay(HOUR_NOW);
        break;
    case 4:
        normalDay(HOUR_NOW);
        break;
    case 5:
        normalDay(HOUR_NOW);
        break;
    case 6:
        saturDay(HOUR_NOW);
        break;
    case 0:
        $('.hours-container-xs').attr('title', SUNDAY_INFO);
        $('.hours-container').attr('title', SUNDAY_INFO);
        break;
}

//OPTIONS LISTENERS

const logo = document.querySelector('#logo');
const op1 = document.querySelector('#option-1');
const op2 = document.querySelector('#option-2');
const op3 = document.querySelector('#option-3');
const op1xs = document.querySelector('#optionxs-1');
const op2xs = document.querySelector('#optionxs-2');
const op3xs = document.querySelector('#optionxs-3');

logo.addEventListener('click', () => window.location.assign('index.html'));
op1.addEventListener('click', () => window.location.assign('oferta.html'));
op2.addEventListener('click', () => window.location.assign('lokalizacja.html'));
op3.addEventListener('click', () => window.location.assign('kontakt.html'));
op1xs.addEventListener('click', () => window.location.assign('oferta.html'));
op2xs.addEventListener('click', () => window.location.assign('lokalizacja.html'));
op3xs.addEventListener('click', () => window.location.assign('kontakt.html'));

//COOKIES
// Skrypt wygenerowano za darmo z uzyciem: https://skrypt-cookies.pl  
function hovered(){document.getElementById('hcks').style.background='#df2e2e';}function unhovered(){document.getElementById('hcks').style.background='#ce1d1d';}function hidecks(){document.getElementById('cookie').style.display='none';setCookie('ck_5960dbf535fa5cbc','y',30);}function setCookie(name,value,days){var expires='';if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires=';expires='+date.toUTCString();}document.cookie=name+'='+(value||'')+expires+';path=/';}function getCookie(name){var nameEQ=name+'=';var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}return null;}if(window.addEventListener){window.addEventListener('load',skr_ckz)}else{window.attachEvent('onload',skr_ckz)}function skr_ckz(){let x=getCookie('ck_5960dbf535fa5cbc');if(!x){let c=document.createElement('aside');let hc=document.createElement('span');c.setAttribute('id','cookie');c.style.zIndex=3000;hc.setAttribute('id','hcks');document.body.appendChild(c);c.style.background='#323435';c.style.color='#fafafa';hc.style.background='#ce1d1d';hc.style.color='#000000';c.innerHTML='<span id=\'cinfo\' style=\'flex: 1 1 auto; margin-top: 2px;\'>Informacja: Niniejszy serwis wykorzystuje do prawidłowego działania pliki cookies [&nbsp;<a href=\'https://skrypt-cookies.pl/czym-sa-ciasteczka\' target=\'_blank\' style=\'text-decoration:underline;color:#fafafa;\'>Więcej informacji</a>&nbsp;]</span>';hc.innerHTML='Rozumiem';c.style.left='0px';c.style.right='0px';c.style.bottom='0px';c.style.top='auto';c.style.maxWidth='100%';hc.style.padding='12px 30px';hc.style.cursor='pointer';hc.style.display='flex';hc.style.letterSpacing='1.5px';hc.style.borderRadius='.3rem';hc.style.alignItems='center';hc.style.marginLeft='15px';hc.addEventListener('click',hidecks,false);hc.addEventListener('mouseenter',hovered,false);hc.addEventListener('mouseleave',unhovered,false);c.style.position='fixed';c.style.padding='20px';c.style.fontSize='17px';c.style.display='flex';c.appendChild(hc);}}
