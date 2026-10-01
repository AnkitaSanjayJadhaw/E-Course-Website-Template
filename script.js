const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");


// Mobile hamburger
if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

}


// Mobile Courses dropdown
const dropdownLinks = document.querySelectorAll(".dropdown > a");

dropdownLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        if (window.innerWidth <= 900) {

            e.preventDefault();

            const dropdown = this.parentElement;

            dropdown.classList.toggle("active");

        }

    });

});