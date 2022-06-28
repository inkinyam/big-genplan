
/*открытие блоков в PROJECT*/
const favoriteProjectButton = document.querySelector('.links__favorites');
const allProjectButton     = document.querySelector('.links__all');
const favoriteProject = document.querySelector('.project__favorites');
const allProject = document.querySelector('.project__all');


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


/*инициализация слайдера для блока INTERVIEW*/

new ChiefSlider('.interviews_slider', {
                                        loop: true,
                                        autoplay: true,
                                        interval: 10000,
                                        swipe: true,
                                        refresh: false
                                    }
);


