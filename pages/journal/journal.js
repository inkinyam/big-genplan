const openFilterButton = document.querySelector('.magazine_filter');
const showAllButton = document.querySelector('.magazine_all');

const filterSection = document.querySelector('.magazine_navigation');

openFilterButton.addEventListener('click', ()=>{
  filterSection.classList.toggle('section_open');
  showAllButton.classList.toggle('section__nav-link_active');
  openFilterButton.classList.toggle('section__nav-link_active');
})