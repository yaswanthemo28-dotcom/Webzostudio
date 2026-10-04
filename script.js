/* =========================
   MOBILE NAVIGATION
========================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


/* Close mobile menu after link click */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* =========================
   HEADER ON SCROLL
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.13
        }

    );

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================
   FAQ
========================= */

const faqItems =
    document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button =
        item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        const isActive =
            item.classList.contains("active");

        faqItems.forEach(faq => {
            faq.classList.remove("active");
        });

        if (!isActive) {
            item.classList.add("active");
        }

    });

});


/* =========================
   COUNTER
========================= */

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting)
                return;

            const counter =
                entry.target;

            const target =
                Number(counter.dataset.target);

            let current = 0;

            const increment =
                Math.max(1, Math.floor(target / 60));

            const updateCounter = () => {

                current += increment;

                if (current >= target) {

                    counter.textContent = target;

                } else {

                    counter.textContent = current;

                    requestAnimationFrame(
                        updateCounter
                    );

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        });

    });

counters.forEach(counter => {
    counterObserver.observe(counter);
});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const email =
        document.getElementById("email").value;

    const service =
        document.getElementById("service").value;

    const projectMessage =
        document.getElementById("message").value;


    /*
        Replace this with YOUR WhatsApp number.
        Format:

        country code + number

        Example:
        919876543210
    */

    const whatsappNumber =
        "919876543210";


    const message =
`Hello NexaWeb,

I would like to enquire about a website project.

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}

Project Details:
${projectMessage}`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    formMessage.textContent =
        "Opening WhatsApp...";


    window.open(
        whatsappURL,
        "_blank"
    );


    setTimeout(() => {

        formMessage.textContent =
            "Thank you! Your enquiry is ready to send.";

    }, 1000);

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   ACTIVE NAVIGATION LINK
========================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href")
            === `#${current}`
        ) {

            link.classList.add(
                "active-link"
            );

        }

    });

});
