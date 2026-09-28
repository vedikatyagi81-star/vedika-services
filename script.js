```javascript
/* =========================================================
   VEDIKA DIGITAL
   WEBSITE JAVASCRIPT
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");


if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("mobile-navigation");

    });


    /* Close menu after clicking a link */

    const navigationLinks =
        document.querySelectorAll(".navigation a");


    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove(
                "mobile-navigation"
            );

        });

    });

}


/* ================= SCROLL SHADOW ================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.querySelector(".contact-form");


if (contactForm) {

    contactForm.addEventListener("submit", function () {

        const button =
            contactForm.querySelector("button");

        if (button) {

            button.textContent = "Sending...";

        }

    });

}
```
