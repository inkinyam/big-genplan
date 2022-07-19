
/*открытие блоков в PROJECT*/
const favoriteProjectButton = document.querySelector('.links__favorites');
const allProjectButton      = document.querySelector('.links__all');
const favoriteProject       = document.querySelector('.project__favorites');
const allProject            = document.querySelector('.project__all');

favoriteProjectButton.addEventListener('click', ()=> {
  favoriteProject.classList.add('project_open');
  allProject.classList.remove('project_open');
  favoriteProjectButton.classList.add('links__link_v_active');
  allProjectButton.classList.remove('links__link_v_active');
})

allProjectButton.addEventListener('click', ()=> {
  favoriteProject.classList.remove('project_open');
  allProject.classList.add('project_open');
  favoriteProjectButton.classList.remove('links__link_v_active');
  allProjectButton.classList.add('links__link_v_active');
}) 


/*разворачивание доп.меню в хедер*/
const bigHederMenu   = document.querySelector('.header__big-list');
const smallHederMenu = document.querySelector('.header__small-list');
const activator      = document.querySelector('.header__nav-spetial');

const showSmallMenu = () => {
  bigHederMenu.classList.add('fadeOut');
  smallHederMenu.classList.add('fadeInRight');
}

const hideSmallMenu = (evt) => {
  if (evt.target!=smallHederMenu||activator) {
    bigHederMenu.classList.toggle('fadeOut');
    smallHederMenu.classList.toggle('fadeInRight');
  }

 
}

activator.addEventListener('mouseenter', showSmallMenu);
activator.addEventListener('mouseleave', evt => {
  hideSmallMenu(evt);
})


/*инициализация слайдера для блока LEAD*/
new ChiefSlider('.lead_slider', {
                                  loop: true,
                                  autoplay: true,
                                  interval: 5000,
                                  swipe: true,
                                  refresh: false
                                }
);


/*инициализация слайдера для блока INTERVIEW*/
new ChiefSlider('.interviews_slider', {
                                        loop: true,
                                        autoplay: true,
                                        interval: 5000,
                                        swipe: true,
                                        refresh: false
                                    }
);




