let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}
document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Your appointment request has been submitted successfully!");

    this.reset();
});
document.getElementById("appointmentForm")
.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your appointment form has been submitted.");

    this.reset();
});
