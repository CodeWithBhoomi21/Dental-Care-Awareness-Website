document.getElementById("appointmentForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const mobile = this.querySelector('input[type="tel"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const date = this.querySelector('input[type="date"]').value;
    const time = this.querySelector('input[type="time"]').value;
    const service = this.querySelector('select').value;
    const message = this.querySelector('textarea').value;

    const whatsappMessage = `
🦷 NEW DENTAL APPOINTMENT

Patient Name: ${name}
Mobile: ${mobile}
Email: ${email}
Date: ${date}
Time: ${time}
Service: ${service}
Message: ${message}

Thank you for choosing Dental Care!
`;

    const phoneNumber = "9827584196";

    const whatsappURL =
    "https://wa.me/" + phoneNumber +
    "?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

});
