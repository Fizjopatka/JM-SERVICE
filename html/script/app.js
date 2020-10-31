//CONST
const today= new Date();
const dayOfWeek = today.getDay();
const hourNow = today.getHours();
const timeEntrance = Date.now();
const ANIM1 = 'anim1';
const HOURS = 'hours';
const SLIDERS = 'sliders';
const HOURS_CONTAINER = '.hours-container';
const HOURS_CONTAINER_XS = '.hours-container-xs';
const TITLE = 'title';
const logo = document.querySelector('#logo')
const op1 = document.querySelector('#option-1');
const op2 = document.querySelector('#option-2');
const op3 = document.querySelector('#option-3');
const op1xs = document.querySelector('#optionxs-1');
const op2xs = document.querySelector('#optionxs-2');
const op3xs = document.querySelector('#optionxs-3');
const CLICK = 'click';
const INDEX = 'index.html';
const OFFER = 'oferta.html';
const LOCATION = 'lokalizacja.html';
const CONTACT = 'kontakt.html';

//WHAT TODAY IS DAY
$('.d'+ dayOfWeek).css('background-color', 'rgba(206, 29, 29, 0.6)');

//FUNCTIONS
function introAnimations() {
    const tl = gsap.timeline({defaults: {ease: 'power1.out'} } );
    
    tl.to('.text', {y: '0%', duration: 1, stagger: 1});
    tl.from('#passion', {duration: 0.6, color:'white'});
    tl.to('.intro-slider', {x:'-100%', duration: 1, delay: 0.5});
    tl.to('.intro', {x: '-100%', duration: 1, delay: -1});
    tl.fromTo('#logo-container', {opacity: 0}, {opacity: 1, duration: 1}, ANIM1);
    tl.fromTo('section', {opacity: 0.2}, {opacity: 1, duration: 1}, ANIM1);
    tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 0.8, delay: 0.5}, ANIM1);
    tl.fromTo('footer', {opacity: 0}, {opacity: 1, duration: 1}, ANIM1);
    tl.fromTo(HOURS_CONTAINER, {opacity: 0}, {opacity: 1, duration: 0.5}, HOURS);
    tl.fromTo(HOURS_CONTAINER_XS, {opacity: 0}, {opacity: 1, duration: 0.5}, HOURS);
    tl.fromTo('.slide-col', {opacity: 0}, {opacity: 1, duration: 0.3, stagger: 0.5}, SLIDERS);
    tl.fromTo('.uslugi-xs', {opacity: 0}, {opacity: 1, duration: 0.3, stagger: 0.5}, SLIDERS);
    localStorage.setItem('view', 'yes');
};

function areYouView() {
    const isView = localStorage.getItem('view');
    
    if (isView === null) {
        $('.intro').css('display', 'flex');
        introAnimations();
        localStorage.setItem('TimeEntrance', timeEntrance);
    } else {
        const TWELVE_HOURS_IN_MILLISEC = 43200000;
        const intTimeEntrance = parseInt(localStorage.getItem('TimeEntrance'));
        const timeAfter12h = intTimeEntrance + TWELVE_HOURS_IN_MILLISEC;

        $('.intro').css('display', 'none');
        if(timeEntrance > timeAfter12h) {
            localStorage.removeItem('view');
            areYouView();
        };
    };
};

function setInfoAboutDay(dayOfWeek, hourNow){
    const STILL_CLOSE_INFO = 'Jeszcze zamknięte. Zapraszamy dziś od 9.';
    const ALREADY_CLOSE_INFO = 'Już zamknięte. Zapraszamy jutro od 9.';
    const OPEN_INFO = 'Otwarte. Zapraszamy do warsztatu lub kontaktu telefonicznego.';
    const ALREADY_CLOSE_SATURDAY_INFO = 'Już zamknięte. Zapraszamy w poniedziałek od 9.';
    const SUNDAY_INFO = 'Zamknięte. Zapraszamy jutro od 9.';

    if (dayOfWeek > 0 || dayOfWeek < 6){
        if (hourNow < 9) {
            $(HOURS_CONTAINER_XS).attr(TITLE, STILL_CLOSE_INFO);
            $(HOURS_CONTAINER).attr(TITLE, STILL_CLOSE_INFO);
        } else if (hourNow > 16) {
            $(HOURS_CONTAINER_XS).attr(TITLE, ALREADY_CLOSE_INFO );
            $(HOURS_CONTAINER).attr(TITLE, ALREADY_CLOSE_INFO );
        } else {
            $(HOURS_CONTAINER).attr(TITLE, OPEN_INFO);
            $(HOURS_CONTAINER_XS).attr(TITLE, OPEN_INFO);
        };
    } else if (dayOfWeek === 6){
        if (hourNow < 9) {
            $(HOURS_CONTAINER_XS).attr(TITLE, STILL_CLOSE_INFO);
            $(HOURS_CONTAINER).attr(TITLE, STILL_CLOSE_INFO);
        } else if (hourNow > 13) {
            $(HOURS_CONTAINER_XS).attr(TITLE, ALREADY_CLOSE_SATURDAY_INFO);
            $(HOURS_CONTAINER).attr(TITLE, ALREADY_CLOSE_SATURDAY_INFO);
        } else {
            $(HOURS_CONTAINER).attr(TITLE, OPEN_INFO);
            $(HOURS_CONTAINER_XS).attr(TITLE, OPEN_INFO);
        };
    } else {
        $(HOURS_CONTAINER_XS).attr(TITLE, SUNDAY_INFO);
        $(HOURS_CONTAINER).attr(TITLE, SUNDAY_INFO);
    };
};

areYouView();
setInfoAboutDay(dayOfWeek, hourNow);

//OPTIONS LISTENERS
logo.addEventListener(CLICK, () => window.location.assign(INDEX));
op1.addEventListener(CLICK, () => window.location.assign(OFFER));
op2.addEventListener(CLICK, () => window.location.assign(LOCATION));
op3.addEventListener(CLICK, () => window.location.assign(CONTACT));
op1xs.addEventListener(CLICK, () => window.location.assign(OFFER));
op2xs.addEventListener(CLICK, () => window.location.assign(LOCATION));
op3xs.addEventListener(CLICK, () => window.location.assign(CONTACT));

//COOKIES
// Skrypt wygenerowano za darmo z uzyciem: https://skrypt-cookies.pl  
function hovered(){document.getElementById('hcks').style.background='#df2e2e';}function unhovered(){document.getElementById('hcks').style.background='#ce1d1d';}function hidecks(){document.getElementById('cookie').style.display='none';setCookie('ck_5960dbf535fa5cbc','y',30);}function setCookie(name,value,days){var expires='';if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires=';expires='+date.toUTCString();}document.cookie=name+'='+(value||'')+expires+';path=/';}function getCookie(name){var nameEQ=name+'=';var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}return null;}if(window.addEventListener){window.addEventListener('load',skr_ckz)}else{window.attachEvent('onload',skr_ckz)}function skr_ckz(){let x=getCookie('ck_5960dbf535fa5cbc');if(!x){let c=document.createElement('aside');let hc=document.createElement('span');c.setAttribute('id','cookie');c.style.zIndex=3000;hc.setAttribute('id','hcks');document.body.appendChild(c);c.style.background='#323435';c.style.color='#fafafa';hc.style.background='#ce1d1d';hc.style.color='#000000';c.innerHTML='<span id=\'cinfo\' style=\'flex: 1 1 auto; margin-top: 2px;\'>Informacja: Niniejszy serwis wykorzystuje do prawidłowego działania pliki cookies [&nbsp;<a href=\'https://skrypt-cookies.pl/czym-sa-ciasteczka\' target=\'_blank\' style=\'text-decoration:underline;color:#fafafa;\'>Więcej informacji</a>&nbsp;]</span>';hc.innerHTML='Rozumiem';c.style.left='0px';c.style.right='0px';c.style.bottom='0px';c.style.top='auto';c.style.maxWidth='100%';hc.style.padding='12px 30px';hc.style.cursor='pointer';hc.style.display='flex';hc.style.letterSpacing='1.5px';hc.style.borderRadius='.3rem';hc.style.alignItems='center';hc.style.marginLeft='15px';hc.addEventListener('click',hidecks,false);hc.addEventListener('mouseenter',hovered,false);hc.addEventListener('mouseleave',unhovered,false);c.style.position='fixed';c.style.padding='20px';c.style.fontSize='17px';c.style.display='flex';c.appendChild(hc);}}
