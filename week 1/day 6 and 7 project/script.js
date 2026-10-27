// ==========================================
// PORTFOLIO JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. DARK / LIGHT MODE
    // ==========================================

    const themeBtn = document.getElementById("themeBtn");

    // Check if button exists
    if (themeBtn) {

        // Page load hone par saved theme check karo
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark");
            themeBtn.textContent = "☀️";
        } else {
            document.body.classList.remove("dark");
            themeBtn.textContent = "🌙";
        }


        // Dark/Light button click
        themeBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark");


            // Agar dark mode ON hai
            if (document.body.classList.contains("dark")) {

                themeBtn.textContent = "☀️";

                localStorage.setItem("theme", "dark");

            }

            // Agar dark mode OFF hai
            else {

                themeBtn.textContent = "🌙";

                localStorage.setItem("theme", "light");

            }

        });

    }


    // ==========================================
    // 2. MOBILE MENU
    // ==========================================

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("show");

        });

    }


    // ==========================================
    // 3. MOBILE MENU CLOSE
    // ==========================================

    const navItems = document.querySelectorAll(".nav-link");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navLinks) {
                navLinks.classList.remove("show");
            }

        });

    });


    // ==========================================
    // 4. ACTIVE NAVIGATION
    // ==========================================

    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;

            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        navItems.forEach(function (link) {

            link.classList.remove("active");

            const linkTarget = link.getAttribute("href");

            if (linkTarget === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    });


    // ==========================================
    // 5. CONTACT FORM
    // ==========================================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const name = document.getElementById("name").value.trim();

            const email = document.getElementById("email").value.trim();

            const message = document.getElementById("message").value.trim();


            // Empty field check
            if (name === "" || email === "" || message === "") {

                alert("Please fill all the fields.");

                return;

            }


            // Success message
            alert(
                "Thank you, " +
                name +
                "! Your message has been submitted successfully."
            );


            // Form reset
            contactForm.reset();

        });

    }

});