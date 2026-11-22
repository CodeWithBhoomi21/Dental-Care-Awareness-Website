document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("appointmentForm");

    if (!form) {
        console.log("Appointment form not found!");
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = form.querySelector('input[type="text"]').value;
        const mobile = form.querySelector('input[type="tel"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const date = form.querySelector('input[type="date"]').value;
        const time = form.querySelector('input[type="time"]').value;
        const service = form.querySelector('select').value;
        const message = form.querySelector('textarea').value;

        const whatsappMessage =
`🦷 NEW DENTAL APPOINTMENT

Patient Name: ${name}
Mobile Number: ${mobile}
Email: ${email}
Date: ${date}
Time: ${time}
Service: ${service}
Message: ${message}

Thank you for choosing Dental Care!`;

        const phoneNumber = "919827584196";

        const whatsappURL =
            "https://wa.me/" + phoneNumber +
            "?text=" + encodeURIComponent(whatsappMessage);

        window.location.href = whatsappURL;

    });

});
