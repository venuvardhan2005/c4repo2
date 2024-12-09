document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for contacting us, " + name + "!");
        // You can handle form submission here (e.g., send data to a server)
        this.reset();  // Clear the form
    } else {
        alert("Please fill out all fields.");
    }
});

