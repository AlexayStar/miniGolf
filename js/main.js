// Popup форма обратной связи для оставления заявки
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

// Вызов меню
const menubBtn = document.querySelector('.menu_btn');
const menuList = document.querySelector('.menu_list');

menubBtn.addEventListener('click', () => {
    menubBtn.classList.toggle('menu_btn--active')
    menuList.classList.toggle('menu_list-active')
});

// Смена местами gallery_item-1 и gallery_item-2
const galleryInner = document.querySelector('.gallery_inner');
const galleryItem2 = document.querySelector('.gallery_item-2');
const pageWidth = window.innerWidth;

console.log(pageWidth);

if (pageWidth <= 779) {
    galleryInner.prepend(galleryItem2);
}