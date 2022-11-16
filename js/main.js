const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup_form');
const openPopupButtons = document.querySelector('.header_btn');
const popupClose = document.querySelector('.popup_close');

openPopupButtons.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('popup_active')
});

popupClose.addEventListener('click', () => {
    popup.classList.remove('popup_active');
});

document.addEventListener('click', (e) => {
    if (e.target == popup) {
        popup.classList.remove('popup_active');
    }
});