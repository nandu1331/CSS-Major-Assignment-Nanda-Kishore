const hamburgerMenu = document.querySelector('.hamburger-menu');
        const sidebar = document.querySelector('.sidebar');

        hamburgerMenu.addEventListener('click', () => {
                    sidebar.classList.toggle('active');
        });

        document.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.style.left = "-250px";
    }
});

