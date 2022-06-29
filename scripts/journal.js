let openFilterButton = document.querySelector('.magazine_filter');
let showAllButton = document.querySelector('.magazine_all');

let filterSection = document.querySelector('.magazine_navigation');

openFilterButton.addEventListener('click', ()=>{
  filterSection.classList.toggle('section_open');
  showAllButton.classList.toggle('section__nav-link_active');
  openFilterButton.classList.toggle('section__nav-link_active');
})