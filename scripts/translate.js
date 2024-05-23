const langButton = document.getElementById('toggle-lang');
let isDutch = true;

langButton.addEventListener('click', function () {
    const elements = document.querySelectorAll('[data-nl]');
    elements.forEach(el => {
        if (isDutch) {
            el.innerHTML = el.getAttribute('data-fr');
        } else {
            el.innerHTML = el.getAttribute('data-nl');
        }
    });
    langButton.textContent = isDutch ? 'FR' : 'NL';
    isDutch = !isDutch;
});
