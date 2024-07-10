const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.close-sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
    hamburger.classList.add('active');
    closeSidebar.style.display = 'block';
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
    hamburger.classList.remove('active');
    closeSidebar.style.display = 'none';
});

