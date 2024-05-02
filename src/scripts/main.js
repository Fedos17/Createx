'use strict';

const body = document.querySelector('.page');

window.onhashchange = (e) => {
  const menu = e.newURL.includes('#menu')
    ? body.classList.add('page-overflow')
    : body.classList.remove('page-overflow');

  return menu;
};
