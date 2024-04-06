function toggleMenu() {
    const navigationMenu = document.querySelector('.navigation-menu ul');
    if (navigationMenu.style.display === 'block') {
        navigationMenu.style.display = 'none';
    } else {
        navigationMenu.style.display = 'block';
    }
}