/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealOnScroll = () => {

    const triggerPoint =
        window.innerHeight * 0.85;


    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop < triggerPoint) {

            element.classList.add("active");

        }

    });

};


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();


/* ========================================
   NAVBAR SCROLL EFFECT
======================================== */

const navbar =
    document.querySelector(".navbar");


const handleNavbarScroll = () => {

    if (!navbar) return;


    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

};


window.addEventListener(
    "scroll",
    handleNavbarScroll
);


handleNavbarScroll();


/* ========================================
   ACTIVE NAVBAR
======================================== */

const navLinks =
    document.querySelectorAll(
        ".nav-menu a"
    );


const navSections =
    document.querySelectorAll(
        "section[id]"
    );


const updateActiveNav = () => {

    let currentSection = "";


    navSections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove(
            "active"
        );


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add(
                "active"
            );

        }

    });

};


window.addEventListener(
    "scroll",
    updateActiveNav
);


window.addEventListener(
    "load",
    updateActiveNav
);


updateActiveNav();// ========================================
// STEP A.5 — HERO ILLUSTRATION PARALLAX
// ========================================

const heroSection = document.querySelector(".hero");
const heroIllustration = document.querySelector(".hero-visual");

if (heroSection && heroIllustration) {

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    heroSection.addEventListener("mousemove", (event) => {

        const rect = heroSection.getBoundingClientRect();

        const mouseX =
            (event.clientX - rect.left) / rect.width - 0.5;

        const mouseY =
            (event.clientY - rect.top) / rect.height - 0.5;

        targetX = mouseX * 18;
        targetY = mouseY * 12;
    });

    heroSection.addEventListener("mouseleave", () => {

        targetX = 0;
        targetY = 0;

    });

    function animateHeroParallax() {

        currentX +=
            (targetX - currentX) * 0.06;

        currentY +=
            (targetY - currentY) * 0.06;

        heroIllustration.style.setProperty(
            "--parallax-x",
            `${currentX}px`
        );

        heroIllustration.style.setProperty(
            "--parallax-y",
            `${currentY}px`
        );

        requestAnimationFrame(animateHeroParallax);
    }

    animateHeroParallax();
}// ========================================
// STEP A.11 — ACTIVITY SCROLL REVEAL
// ========================================

const activityCards = document.querySelectorAll(".activity-card");

const activityObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                activityObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

activityCards.forEach((card) => {
    card.classList.add("reveal");
    activityObserver.observe(card);
});// ========================================
// STEP C.3 — OBJECTIVE CARDS SCROLL REVEAL
// ========================================

const objectiveCards = document.querySelectorAll(".objective-card");

if (objectiveCards.length) {

    const objectiveObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("objective-revealed");
                    objectiveObserver.unobserve(entry.target);

                }

            });
        },
        {
            threshold: 0.15
        }
    );

    objectiveCards.forEach((card) => {
        card.classList.add("objective-reveal");
        objectiveObserver.observe(card);
    });

}// ========================================
// STEP C.6 — OBJECTIVES CTA REVEAL
// ========================================

const objectivesCTA = document.querySelector(".objectives-cta");

if (objectivesCTA) {

    const ctaObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("cta-visible");
                    ctaObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.2
        }
    );

    ctaObserver.observe(objectivesCTA);
}// ========================================
// STEP D.4 — ACTIVITIES SCROLL REVEAL
// ========================================

const activitiesPageCards = document.querySelectorAll(
    ".activities-grid .activity-card"
);

if (activitiesPageCards.length) {

    const activitiesPageObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("activities-card-visible");
                    activitiesPageObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    activitiesPageCards.forEach((card) => {
        card.classList.add("activities-card-reveal");
        activitiesPageObserver.observe(card);
    });

}// ========================================
// STEP D.8 — ACTIVITY SHOWCASE REVEAL
// ========================================

const activityShowcaseCards = document.querySelectorAll(
    ".activity-image-card"
);

if (activityShowcaseCards.length) {

    const showcaseObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("showcase-visible");
                    showcaseObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    activityShowcaseCards.forEach((card) => {
        card.classList.add("showcase-reveal");
        showcaseObserver.observe(card);
    });

}// ========================================
// STEP D.9 — ACTIVITIES CTA REVEAL
// ========================================

const activitiesCTA = document.querySelector(".activities-cta");

if (activitiesCTA) {

    const activitiesCtaObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("cta-visible");
                    activitiesCtaObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.2
        }
    );

    activitiesCtaObserver.observe(activitiesCTA);

}// ========================================
// STEP E.4 — PROGRAMME CARD SCROLL REVEAL
// ========================================

const programmeCards = document.querySelectorAll(".programme-card");

if (programmeCards.length) {

    const programmeObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("programme-card-visible");
                    programmeObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    programmeCards.forEach((card) => {
        card.classList.add("programme-card-reveal");
        programmeObserver.observe(card);
    });

}// ========================================
// STEP E.6 — MINI CALENDAR REVEAL
// ========================================

const miniCalendar = document.querySelector(".mini-calendar");

if (miniCalendar) {

    const calendarObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("calendar-visible");
                    calendarObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.2
        }
    );

    calendarObserver.observe(miniCalendar);

}// ========================================
// STEP E.7 — PROGRAMMES CTA REVEAL
// ========================================

const programmesCTA = document.querySelector(".programmes-cta");

if (programmesCTA) {

    const programmesCtaObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("cta-visible");
                    programmesCtaObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.2
        }
    );

    programmesCtaObserver.observe(programmesCTA);

}// ========================================
// STEP F.4 — GALLERY SCROLL REVEAL
// ========================================

const galleryCards = document.querySelectorAll(".gallery-card");

if (galleryCards.length) {

    const galleryObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("gallery-card-visible");
                    galleryObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    galleryCards.forEach((card) => {
        card.classList.add("gallery-card-reveal");
        galleryObserver.observe(card);
    });

/* ==========================================
   STEP F.4 — GALLERY CARD REVEAL
======================================== */

}// ========================================
// STEP F.5 — GALLERY FEATURE REVEAL
// ========================================

const galleryFeature = document.querySelector(".gallery-feature");

if (galleryFeature) {

    const featureObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("gallery-feature-visible");
                    featureObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    galleryFeature.classList.add("gallery-feature-reveal");
    featureObserver.observe(galleryFeature);

}// ========================================
// G.5 — FEATURED VIDEO SCROLL REVEAL
// ========================================

const videosFeature = document.querySelector(".videos-feature");

if (videosFeature) {
    const videosFeatureObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("videos-feature-visible");
                    videosFeatureObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    videosFeature.classList.add("videos-feature-reveal");
    videosFeatureObserver.observe(videosFeature);
}// ========================================
// G.6 — VIDEO CARD SCROLL REVEAL
// ========================================

const videoCards = document.querySelectorAll(".video-card");

if (videoCards.length) {
    const videoCardObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("video-card-visible");
                    videoCardObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    videoCards.forEach((card) => {
        card.classList.add("video-card-reveal");
        videoCardObserver.observe(card);
    });
}/* =========================================
   H.3 — NEWS CARD SCROLL REVEAL
========================================= */

const newsCards = document.querySelectorAll(".news-card");

if (newsCards.length) {

    const newsCardObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("news-card-visible");

                    newsCardObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    newsCards.forEach((card) => {

        card.classList.add("news-card-reveal");

        newsCardObserver.observe(card);

    });
}/* =========================================
   H.4 — FEATURED NEWS REVEAL
========================================= */

const newsFeature = document.querySelector(".news-feature");

if (newsFeature) {

    const newsFeatureObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("news-feature-visible");

                    newsFeatureObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    newsFeature.classList.add("news-feature-reveal");

    newsFeatureObserver.observe(newsFeature);
}/* =========================================
   H.5 — NEWS HERO INTRO
========================================= */

const newsHero = document.querySelector(".news-hero");

if (newsHero) {

    const heroContent = newsHero.querySelector(".news-hero-content");
    const heroVisual = newsHero.querySelector(".news-hero-visual");

    if (heroContent) {
        heroContent.classList.add("news-hero-content-intro");
    }

    if (heroVisual) {
        heroVisual.classList.add("news-hero-visual-intro");
    }

}/* =========================================
   H.7 — NEWS CTA REVEAL
========================================= */

const newsCta = document.querySelector(".news-cta");

if (newsCta) {

    const newsCtaContent = newsCta.querySelector(".cta-content");

    const newsCtaObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("news-cta-visible");

                    newsCtaObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    newsCta.classList.add("news-cta-reveal");

    if (newsCtaContent) {
        newsCtaContent.classList.add("news-cta-content-reveal");
    }

    newsCtaObserver.observe(newsCta);
}/* =========================================
   I.3 — CONTACT PAGE ANIMATIONS
========================================= */

/* Contact Hero */

const contactHero = document.querySelector(".contact-hero");

if (contactHero) {

    const heroContent = contactHero.querySelector(".contact-hero-content");
    const heroVisual = contactHero.querySelector(".contact-hero-visual");

    if (heroContent) {
        heroContent.classList.add("contact-hero-content-intro");
    }

    if (heroVisual) {
        heroVisual.classList.add("contact-hero-visual-intro");
    }
}


/* Contact Info Cards */

const contactInfoCards =
    document.querySelectorAll(".contact-info-card");

if (contactInfoCards.length) {

    const contactInfoObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "contact-info-card-visible"
                    );

                    contactInfoObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    contactInfoCards.forEach((card) => {

        card.classList.add(
            "contact-info-card-reveal"
        );

        contactInfoObserver.observe(card);

    });
}


/* Contact Form */

const contactFormSection =
    document.querySelector(".contact-form-section");

if (contactFormSection) {

    const contactFormObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "contact-form-visible"
                    );

                    contactFormObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    contactFormSection.classList.add(
        "contact-form-reveal"
    );

    contactFormObserver.observe(contactFormSection);
}


/* Contact Location */

const contactLocation =
    document.querySelector(".contact-location");

if (contactLocation) {

    const locationObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "contact-location-visible"
                    );

                    locationObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    contactLocation.classList.add(
        "contact-location-reveal"
    );

    locationObserver.observe(contactLocation);
}


/* Contact CTA */

const contactCta =
    document.querySelector(".contact-cta");

if (contactCta) {

    const contactCtaObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "contact-cta-visible"
                    );

                    contactCtaObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    contactCta.classList.add(
        "contact-cta-reveal"
    );

    contactCtaObserver.observe(contactCta);


}/* ========================================
   CONTACT FORM → GOOGLE APPS SCRIPT
======================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const subjek = document.getElementById("subjek").value.trim();
        const mesej = document.getElementById("mesej").value.trim();

        if (!nama || !email || !subjek || !mesej) {
            alert("Sila lengkapkan semua ruangan sebelum menghantar.");
            return;
        }

        const button = contactForm.querySelector(".contact-button");

        button.disabled = true;
        button.innerHTML = "MENGHANTAR...";

        try {

            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbxR-BPRVwnKJ6XoZrgU4orsG2lDQETudcMUqZafr_xw_EGbGrhy2Zlvba3-bpftgxdt/exec",
                {
                    method: "POST",
                    body: JSON.stringify({
                        nama: nama,
                        email: email,
                        subjek: subjek,
                        mesej: mesej
                    })
                }
            );

            const result = await response.json();

            if (result.success) {

                alert("Mesej berjaya dihantar. Terima kasih kerana menghubungi kami!");

                contactForm.reset();

                button.disabled = false;
                button.innerHTML = 'HANTAR MESEJ <span>→</span>';

            } else {

                throw new Error(result.message);

            }

        } catch (error) {

            console.error(error);

            alert(
                "Maaf, mesej tidak dapat dihantar buat masa ini. Sila cuba lagi."
            );

            button.disabled = false;
            button.innerHTML = 'HANTAR MESEJ <span>→</span>';

        }

    });

}/* ========================================
   CONTACT FORM → GOOGLE APPS SCRIPT
======================================== */

const sendContactButton = document.getElementById("sendContactButton");

if (sendContactButton) {

    sendContactButton.addEventListener("click", async function () {

        const nama = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subjek = document.getElementById("subject").value.trim();
        const mesej = document.getElementById("message").value.trim();

        if (!nama || !email || !subjek || !mesej) {
            alert("Sila lengkapkan semua ruangan sebelum menghantar.");
            return;
        }

        sendContactButton.disabled = true;
        sendContactButton.textContent = "MENGHANTAR...";

        try {

            await fetch(
                "https://script.google.com/macros/s/AKfycbxR-BPRVwnKJ6XoZrgU4orsG2lDQETudcMUqZafr_xw_EGbGrhy2Zlvba3-bpftgxdt/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "text/plain;charset=utf-8"
                    },
                    body: JSON.stringify({
                        nama: nama,
                        email: email,
                        subjek: subjek,
                        mesej: mesej
                    })
                }
            );

            alert("Mesej berjaya dihantar. Terima kasih kerana menghubungi kami!");

            document.getElementById("contactForm").reset();

        } catch (error) {

            console.error(error);

            alert("Maaf, mesej tidak dapat dihantar. Sila cuba lagi.");

        }

        sendContactButton.disabled = false;
        sendContactButton.textContent = "HANTAR MESEJ";

    });

}