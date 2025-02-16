document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded successfully!");
    
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for reaching out! I will get back to you soon.");
        contactForm.reset();
    });
});
