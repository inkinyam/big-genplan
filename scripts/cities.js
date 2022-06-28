/*навигация по CITIES*/
let citiesProjectLink = document.querySelector('.citiesProject');
let citiesMapLink     = document.querySelector('.citiesMap');
let citiesJournalLink = document.querySelector('.citiesJournal');

let citiesProjectSection = document.querySelector('.cities__project');
let citiesMapSection = document.querySelector('.cities__map');
let citiesJournalSection = document.querySelector('.cities__journal');


citiesProjectLink.addEventListener('click', ()=> {
  citiesProjectLink.classList.add('section__nav-link_active');
  citiesMapLink.classList.remove('section__nav-link_active');
  citiesJournalLink.classList.remove('section__nav-link_active');

  citiesProjectSection.classList.add('section_open');
  citiesMapSection.classList.remove('section_open');
  citiesJournalSection.classList.remove('section_open');
})

citiesMapLink.addEventListener('click', ()=> {
  citiesProjectLink.classList.remove('section__nav-link_active');
  citiesMapLink.classList.add('section__nav-link_active');
  citiesJournalLink.classList.remove('section__nav-link_active');

  citiesProjectSection.classList.remove('section_open');
  citiesMapSection.classList.add('section_open');
  citiesJournalSection.classList.remove('section_open');
})

citiesJournalLink.addEventListener('click', ()=> {
  citiesProjectLink.classList.remove('section__nav-link_active');
  citiesMapLink.classList.remove('section__nav-link_active');
  citiesJournalLink.classList.add('section__nav-link_active');

  citiesProjectSection.classList.remove('section_open');
  citiesMapSection.classList.remove('section_open');
  citiesJournalSection.classList.add('section_open');
})