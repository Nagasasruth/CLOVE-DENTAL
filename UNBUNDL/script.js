document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("consultation-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Your consultation request has been submitted!");
    });
});