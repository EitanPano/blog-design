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
    // document.body.classList.toggle("noscroll");
}

function testButton() {
    alert("Working");
}

let dropDownType;
function doNavigate(ev, el) {
    ev.preventDefault();
    ev.stopPropagation();
    console.log(ev.pointerType);

    if (dropDownType === ev.pointerType) alert(`Navigate into ${el.innerText}`);
    else if (ev.pointerType === 'mouse') alert(`Navigate into ${el.innerText}`);
    dropDownType = ev.pointerType;
}
