    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
    });

    document.querySelector('.close-sidebar').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.remove('active');
    });

    // Close sidebar when a link is clicked
    document.querySelectorAll('.sidebar-links a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.sidebar').classList.remove('active');
        });
    });
