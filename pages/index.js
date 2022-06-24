import Form from "./form.js";

/*
  //подключаем swiper для отображения картинок в слайдере
const swiper = new Swiper('.mySwiper', {
  loop: true,
  pagination: {
    el: ".swiper__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper__button_type_next",
    prevEl: ".swiper__button_type_prev",
  },
  centeredSlides:true
});
 */

//переменные для открытия мобильного меню
const openMobilMenuButton   = document.querySelector('.header__mobile-button');
const mobilHeaderMenu  = document.querySelector('.header__mobile-menu');
const mobilHeaderLogo  = document.querySelector('.header__mobile-logo'); 
const mobilHeader       = document.querySelector('.header_ver_mobile');
const showMoreButton   = document.querySelector('.header__mobile-menu-next');


// функция открывающая/закрывающая меню в мобильной версии
const toggleStationMenu = () => {
  mobilHeaderLogo.classList.toggle('header__mobile-logo_opened');
  openMobilMenuButton.classList.toggle('header__mobile-button_opened');
  mobilHeader.classList.toggle('header_ver_mobile-open');
  mobilHeaderMenu.classList.toggle('header__mobile-menu_opened');
  //если меню открыто и мы его закрываем, скрыть доп.разделы
  if (mobilHeaderMenu.classList.contains('header__mobile-menu_opened')) {
    hideMoreMobileSection();
  }
}
// слушатель на открытие мобильного меню по нажатию кнопки
openMobilMenuButton.addEventListener('click', toggleStationMenu);


const mobileMenuSection = document.querySelector('.header__mobile-list-block');

//функция, открывающая доп.разделы в мобильном меню
const showMoreMobileSections = () => {
  showMoreButton.classList.add('header__mobile-menu-next_hide');
  mobileMenuSection.classList.add('header__mobile-list-block_open');
}

const hideMoreMobileSection = () => {
  showMoreButton.classList.remove('header__mobile-menu-next_hide');
  mobileMenuSection.classList.remove('header__mobile-list-block_open');
}

  showMoreButton.addEventListener('click', showMoreMobileSections);



//переменные для открытия формы обратной связи
const contactUsButton   = document.querySelector('.contact-us__button');
const contactUsButtonOpen  = document.querySelector('.contact-us__button_ver_open');
const contactUsButtonClose  = document.querySelector('.contact-us__button_ver_close');

const contactUsForm    = document.querySelector('.form-section');

//функция, открывающая форму обратной связи
const openContactUsForm = () => {
  contactUsForm.classList.toggle('form-section_open');
  contactUsButtonOpen.classList.toggle('contact-us-ver_visible');
  contactUsButtonClose.classList.toggle('contact-us-ver_visible');
}

contactUsButton.addEventListener('click', openContactUsForm);

// создаем форму 
const initForm = (formId) => {
  return new Form (formId);
}

initForm('contactForm');



/*работа инпутов в форме*/
const addClassForInput = (item) => {
  let label = document.querySelector(`[for="${item.id}"]`);
  label.classList.add('form__label_active');
}

const removeClassForInput = (item) => {
  if (!item.value) {
    let label = document.querySelector(`[for="${item.id}"]`);
    label.classList.remove('form__label_active');
  }
}

const formInputs = Array.from(document.querySelectorAll('.form__input'));

formInputs.forEach(item => {
  item.addEventListener('click', ()=> {
    addClassForInput(item);
  });

  item.addEventListener('blur', ()=> {
       removeClassForInput(item);
  }); 

})






/*************************************************************************** */

var forEach = function(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

var randomIntFromInterval = function(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

var $mapPins = document.querySelectorAll('#Map-shape g');

// Setup timelines attached to each map pin
forEach($mapPins, function(index, value) {
  // Group opacity timeline
  value.groupTimeline = new TimelineMax({
    paused: true
  });
  
  value.groupTimeline
  .to(value, 0.4, {
    opacity: 0
  });
  
  // Pulse animation
  var pinTimeline = new TimelineMax({
    repeat: -1,
    delay: randomIntFromInterval(1,60),
    repeatDelay: randomIntFromInterval(0, 1)
  });
    
  pinTimeline.
    to(value.querySelector('.Pin-back'), 2, {
      scale: 30,
      transformOrigin: 'center center',
      opacity: 0
    });
});

forEach(document.querySelectorAll('.js-Location-nav [data-location]'), function(index, value) {
 
   value.addEventListener('mouseenter', function(e) {   
     var location = e.target.getAttribute('data-location');
     
     // Hide other map pins
     forEach($mapPins, function(index, value) {
       if (value.getAttribute('data-location') !== location) {
         value.groupTimeline.play();
       }
     });
   }, false);
  
  value.addEventListener('mouseleave', function(e) {
    // Reverse all hidden map pins
    forEach($mapPins, function(index, value) {
       value.groupTimeline.reverse();
    });
    
  }, false);
});
  