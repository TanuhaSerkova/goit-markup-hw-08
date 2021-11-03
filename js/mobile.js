(() => {
 const refs = {
    openMobileBtn: document.querySelector('[data-mobile-open]'),
    closeMobileBtn: document.querySelector('[data-mobile-close]'),
    mobile: document.querySelector('[data-modal]'),
 };

 refs.openMobileBtn.addEventListener('click', toggleMobile);
 refs.closeMobileBtn.addEventListener('click', toggleMobile);

 function toggleMobile() {
    refs.mobile.classList.toggle('is-hidden');
 }
})();