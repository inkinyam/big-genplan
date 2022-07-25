import Form from "./scripts/form.js";

//переменные для открытия мобильного меню
const openMobilMenuButton   = document.querySelector('.header__mobile-button');
const mobilHeaderMenu       = document.querySelector('.header__mobile-menu');
const mobilHeaderLogo       = document.querySelector('.header__mobile-logo'); 
const mobilHeader           = document.querySelector('.header_ver_mobile');
const showMoreButton        = document.querySelector('.header__mobile-menu-next');


// функция открывающая/закрывающая меню в мобильной версии
const toggleStationMenu = () => {
  const openMobileIcon = openMobilMenuButton.querySelector('.bi');
  openMobilMenuButton.classList.toggle('header__mobile-button_opened');
  mobilHeaderLogo.classList.toggle('header__mobile-logo_opened');
  openMobileIcon.classList.toggle('bi-justify');
  openMobileIcon.classList.toggle('bi-x-lg')

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



/*открытие и закрытие окна поиска на главной в десктопе */
const openSearchBarButton = document.querySelector('.header__search');
const navBar = document.querySelector('.navBar');
const searchBar = document.querySelector('.header__search-container');

const togglOpenSearchBarButton = () => {
  const icon = openSearchBarButton.querySelector('.bi');
   icon.classList.toggle('bi-search');
   icon.classList.toggle('bi-x-lg')
}

openSearchBarButton.addEventListener('click', () => {
  navBar.classList.toggle('header_bar_open');
  searchBar.classList.toggle('header_bar_open');
  togglOpenSearchBarButton();
})