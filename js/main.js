'use strict';

function toggleMenu() {
    const elBody = document.body;
    elBody.classList.toggle('menu-open');
    elBody.classList.toggle('noscroll');
    const elBtnMenu = document.querySelector('.btn-menu');
    elBtnMenu.innerText = (elBtnMenu.innerText === 'X') ? '☰' : 'X';
}
function toggleModalNewsletter(ev) {
    ev.preventDefault();

    const elModalNewsletter = document.querySelector('.modal-newsletter');
    elModalNewsletter.classList.toggle('modal-closed');
    document.body.classList.toggle('noscroll');
}
function testButton() {
    alert('Working');
}
