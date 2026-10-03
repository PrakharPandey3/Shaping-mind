gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* =========================================================
   MOBILE MENU
   ========================================================= */

/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.querySelector("#menuToggle");
const mobileMenu = document.querySelector("#mobileMenu");

if (menuToggle && mobileMenu) {

  menuToggle.addEventListener("click", () => {

    const open = mobileMenu.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(open)
    );

    menuToggle.setAttribute(
      "aria-label",
      open ? "Close menu" : "Open menu"
    );

  });


  /* Close menu when a link is clicked */

  document.querySelectorAll(".mobile-menu a").forEach((link) => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open menu"
      );

    });

  });


  /* Close with Escape */

  document.addEventListener("keydown", (event) => {

    if (
      event.key === "Escape" &&
      mobileMenu.classList.contains("open")
    ) {

      mobileMenu.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open menu"
      );

    }

  });

}


/* =========================================================
   FOOTER YEAR
   ========================================================= */

document.querySelector("#year").textContent = new Date().getFullYear();


/* =========================================================
   CONTACT FORM
   =========================================================

   This is currently a FRONTEND demo.

   It prevents the page from refreshing and shows a success
   message.

   Later, replace this with:
   - Netlify Forms
   - Formspree
   - EmailJS
   - Your own Node/Express backend
*/

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const name = data.get("name");

  formStatus.textContent =
    `Thank you, ${name}. Your enquiry is ready to be connected to the contact service.`;

  contactForm.reset();
});


/* =========================================================
   GSAP ANIMATIONS
   ========================================================= */

if (!reduceMotion) {

  /* -------------------------------------------------------
     INITIAL STATES
  ------------------------------------------------------- */

  gsap.set("#nav", { opacity: 1, y: 0 });

  gsap.set(".hero-eyebrow", {
    opacity: 0,
    y: 20
  });

  gsap.set(
    ".hero h1 .line > span, .hero h1 .line > em",
    {
      y: "115%"
    }
  );

  gsap.set(".hero-role", {
    opacity: 0,
    y: 18
  });

  gsap.set(".hero-bottom", {
    opacity: 0,
    y: 18
  });

  gsap.set(".hero-card", {
    opacity: 0,
    scale: 0.8
  });


  /* -------------------------------------------------------
     HERO INTRO TIMELINE
  ------------------------------------------------------- */

  const intro = gsap.timeline({
    defaults: {
      ease: "power3.out"
    }
  });

  intro

    // Navbar
    .to(
      "#nav",
      {
        opacity: 1,
        y: 0,
        duration: 0.7
      },
      0.1
    )

    // Eyebrow
    .to(
      ".hero-eyebrow",
      {
        opacity: 1,
        y: 0,
        duration: 0.6
      },
      0.25
    )

    // Main heading


    // Role line
    .to(
      ".hero-role",
      {
        opacity: 1,
        y: 0,
        duration: 0.7
      },
      1
    )

    // Hero description + CTA
    .to(
      ".hero-bottom",
      {
        opacity: 1,
        y: 0,
        duration: 0.7
      },
      1.15
    )

    // Floating cards
    .to(
      ".hero-card",
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.12,
        ease: "back.out(1.5)"
      },
      0.75
    );


  /* =======================================================
     FLOATING HERO CARDS
  ======================================================= */

  gsap.to(".card-a", {
    y: -12,
    rotation: -5,
    duration: 3.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".card-b", {
    y: 13,
    rotation: 7,
    duration: 4.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".card-c", {
    y: -9,
    rotation: -1,
    duration: 3.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });


  /* =======================================================
     ORBIT ROTATIONS
  ======================================================= */

  gsap.to(".orbit-one", {
    rotation: 360,
    duration: 28,
    repeat: -1,
    ease: "none"
  });

  gsap.to(".orbit-two", {
    rotation: -360,
    duration: 20,
    repeat: -1,
    ease: "none"
  });


  /* =======================================================
     GENERIC SECTION REVEALS
  ======================================================= */

  gsap.utils.toArray(
    ".section-label, .about h2, .about-copy, .section-heading h2, .section-heading > p"
  ).forEach((el) => {

    gsap.from(el, {
      opacity: 0,
      y: 35,
      duration: 0.9,
      ease: "power3.out",

      scrollTrigger: {
        trigger: el,
        start: "top 86%"
      }
    });

  });


  /* =======================================================
     WHAT I DO — SERVICE CARDS
  ======================================================= */

  gsap.from(".service-card", {

    opacity: 0,
    y: 60,
    scale: 0.96,

    duration: 0.8,

    stagger: 0.08,

    ease: "power3.out",

    scrollTrigger: {
      trigger: ".service-grid",
      start: "top 82%"
    }

  });


  /* =======================================================
     APPROACH — THINK / TEACH / TRANSFORM
  ======================================================= */

  gsap.from(".approach-title span", {

    opacity: 0,
    x: -70,

    duration: 1,

    stagger: 0.12,

    ease: "power3.out",

    scrollTrigger: {
      trigger: ".approach-title",
      start: "top 80%"
    }

  });


  /* Approach descriptions */

  gsap.from(".approach-item", {

    opacity: 0,
    y: 30,

    duration: 0.8,

    stagger: 0.12,

    scrollTrigger: {
      trigger: ".approach-grid",
      start: "top 80%"
    }

  });


  /* =======================================================
     IMPACT
  ======================================================= */

  gsap.from(".impact-statement blockquote", {

    opacity: 0,
    y: 50,

    duration: 1,

    ease: "power3.out",

    scrollTrigger: {
      trigger: ".impact",
      start: "top 78%"
    }

  });


  /* Impact list */

  gsap.from(".impact-list div", {

    opacity: 0,
    x: 30,

    duration: 0.7,

    stagger: 0.08,

    scrollTrigger: {
      trigger: ".impact-list",
      start: "top 82%"
    }

  });


  /* =======================================================
     QUOTE SECTION
  ======================================================= */

  gsap.from(".quote-section p", {

    opacity: 0,
    y: 30,

    duration: 1,

    scrollTrigger: {
      trigger: ".quote-section",
      start: "top 78%"
    }

  });


  /* =======================================================
     WORK WITH ME
  ======================================================= */

  gsap.from(".connect-inner", {

    opacity: 0,
    y: 55,
    scale: 0.97,

    duration: 1.1,

    ease: "power3.out",

    scrollTrigger: {
      trigger: ".connect",
      start: "top 78%"
    }

  });


  /* =======================================================
     CONTACT SECTION
  ======================================================= */

  gsap.from(".contact-grid > *", {

    opacity: 0,
    y: 35,

    duration: 0.8,

    stagger: 0.15,

    scrollTrigger: {
      trigger: ".contact",
      start: "top 78%"
    }

  });

}


/* =========================================================
   HERO MOUSE PARALLAX
   ========================================================= */

const hero = document.querySelector(".hero");

if (!reduceMotion && window.innerWidth > 720) {

  let mx = 0;
  let my = 0;

  let tx = 0;
  let ty = 0;


  /* Mouse position */

  hero.addEventListener("mousemove", (e) => {

    const rect = hero.getBoundingClientRect();

    mx =
      ((e.clientX - rect.left) / rect.width - 0.5) * 2;

    my =
      ((e.clientY - rect.top) / rect.height - 0.5) * 2;

  });


  /* Reset */

  hero.addEventListener("mouseleave", () => {

    mx = 0;
    my = 0;

  });


  /* Smooth movement */

  function parallax() {

    tx += (mx - tx) * 0.035;
    ty += (my - ty) * 0.035;


    /*
      Each card moves at a slightly different speed
      to create depth.
    */

    gsap.set(".card-a", {
      x: tx * 10,
      y: ty * 6
    });

    gsap.set(".card-b", {
      x: tx * -15,
      y: ty * -8
    });

    gsap.set(".card-c", {
      x: tx * 7,
      y: ty * 12
    });


    requestAnimationFrame(parallax);
  }


  parallax();

}