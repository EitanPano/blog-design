"use strict";

function toggleMenu() {
    const elBody = document.body;
    elBody.classList.toggle("menu-open");
    const elBtnMenu = document.querySelector(".btn-menu");
    elBtnMenu.innerText = elBtnMenu.innerText === "X" ? "☰" : "X";
}

function toggleModalNewsletter(ev) {
    ev.preventDefault();

    const elModalNewsletter = document.querySelector(".modal-newsletter");
    elModalNewsletter.classList.toggle("modal-closed");
    document.body.classList.toggle("noscroll");
}

function testButton() {
    alert("Working");
}

function navigateJournal(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    // alert('Navigate to Journal page');
}
