document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("backToTop");
    const triggerOffset = window.innerHeight / 2;

    window.addEventListener("scroll", () => {
        if (window.scrollY > triggerOffset) {
            backToTop.style.opacity = "1";
        } else {
            backToTop.style.opacity = "0";
        }
    });

    backToTop.addEventListener("click", () => {
        // Smooth scroll to #navbar
        document.getElementById("navbar").scrollIntoView({behavior: "smooth"});
    });
});
