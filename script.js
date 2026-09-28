```javascript
/* =========================================================
   VEDIKA DIGITAL
   WEBSITE INTERACTIONS
   ========================================================= */


/* ================= NAVBAR ================= */

const navbar = document.getElementById("navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= MOBILE MENU ================= */

const menuButton =
    document.querySelector(".menu-button");

const navigation =
    document.querySelector(".navigation");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("mobile-active");

});


/* Close mobile menu after clicking a link */

const navLinks =
    document.querySelectorAll(".navigation a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove(
            "mobile-active"
        );

    });

});


/* ================= FAQ ================= */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");


    question.addEventListener("click", () => {


        /* Close other FAQ items */

        faqItems.forEach(otherItem => {

            if (otherItem !== item) {

                otherItem.classList.remove("active");

            }

        });


        /* Toggle selected item */

        item.classList.toggle("active");

    });

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.querySelector(".contact-form");


if (contactForm) {

    contactForm.addEventListener("submit", () => {

        const submitButton =
            contactForm.querySelector(".submit-button");


        if (submitButton) {

            submitButton.innerHTML =
                "Opening Email...";

        }

    });

}


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, .why-card, .process-step, .portfolio-card"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});
```
