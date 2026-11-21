function showMessage() {
    alert("Welcome to Dental Care Awareness Website! Keep your smile healthy.");
}
document.getElementById("appointmentForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank you " + name +
    "! Your enquiry has been submitted successfully.");

    this.reset();

});