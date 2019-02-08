apos.on('ready', function() {
    let headerMenu = document.getElementById('header-menu');
    let hamburgerMenu = document.getElementById('hamburger-menu');
    if(hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function () {
            headerMenu.classList.toggle('active');
        });
    }
});