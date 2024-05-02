'use strict';

const body = document.querySelector('.page');

window.onhashchange = (e) => {
  const menu = e.newURL.includes('#menu')
    ? body.classList.add('page-overflow')
    : body.classList.remove('page-overflow');

  return menu;
};

const flkty = new window.Flickity('.carousel-header', {
  // options
  cellAlign: 'left',
  contain: true,
  draggable: false,
  wrapAround: true,
  autoPlay: 3000,
});

flkty();
