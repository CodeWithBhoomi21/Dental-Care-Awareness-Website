// IMAGE SLIDER
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide(direction) {
    if (slides.length === 0) return;

    slides[currentSlide].classList.remove("active");

    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add("active");
}

// APPOINTMENT FORM
const appointmentForm =
document.getElementById("appointmentForm");

if (appointmentForm &&
    document.getElementById("name") &&
    document.getElementById("mobile")) {

    const dateInput = document.getElementById("date");

    if (dateInput) {
        dateInput.min = new Date().toISOString().split("T")[0];
    }

    appointmentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const mobile = document.getElementById("mobile").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value;

        const whatsappMessage =
            "Dental Appointment Enquiry\n\n" +
            "Name: " + name + "\n" +
            "Mobile: " + mobile + "\n" +
            "Email: " + email + "\n" +
            "Date: " + date + "\n" +
            "Time: " + time + "\n" +
            "Service: " + service + "\n" +
            "Message: " + message;

        const whatsappURL =
            "https://wa.me/919827584196?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");
    });
}
// DARK AND LIGHT MODE

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("themeButton");

    if (document.body.classList.contains("dark-mode")) {
        button.innerText = "☀️ Light Mode";
    } else {
        button.innerText = "🌙 Dark Mode";
    }
}
