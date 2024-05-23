document.getElementById('toggle-mode').addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
    const modeButton = document.getElementById('toggle-mode');
    modeButton.textContent = document.body.classList.contains('light-mode') ? 'Light Mode' : 'Dark Mode';
});
