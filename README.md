# c4repo2
**/index.html**
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Landing Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>Welcome to Our Website</h1>
            <p>Your journey to success starts here!</p>
            <a href="#services" class="cta-button">Get Started</a>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
        <h2>Our Services</h2>
        <div class="service-cards">
            <div class="service-card">
                <h3>Service 1</h3>
                <p>Details about Service 1</p>
            </div>
            <div class="service-card">
                <h3>Service 2</h3>
                <p>Details about Service 2</p>
            </div>
            <div class="service-card">
                <h3>Service 3</h3>
                <p>Details about Service 3</p>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact">
        <h2>Contact Us</h2>
        <form id="contactForm">
            <input type="text" id="name" placeholder="Your Name" required>
            <input type="email" id="email" placeholder="Your Email" required>
            <textarea id="message" placeholder="Your Message" required></textarea>
            <button type="submit" class="cta-button">Send Message</button>
        </form>
    </section>

    <script src="script.js"></script>
</body>
</html>
**style.css**
/* styles.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
}

.hero {
    background: #333;
    color: white;
    text-align: center;
    padding: 100px 0;
}

.hero h1 {
    font-size: 3em;
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.2em;
    margin-bottom: 30px;
}

.cta-button {
    background-color: #FF5733;
    color: white;
    padding: 15px 30px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1em;
}

.cta-button:hover {
    background-color: #e04e2b;
}

.services {
    padding: 50px 20px;
    text-align: center;
    background: #f0f0f0;
}

.services h2 {
    margin-bottom: 30px;
    font-size: 2em;
}

.service-cards {
    display: flex;
    justify-content: space-around;
    gap: 20px;
}

.service-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 30%;
}

.service-card h3 {
    font-size: 1.5em;
    margin-bottom: 15px;
}

.contact {
    padding: 50px 20px;
    text-align: center;
}

.contact h2 {
    margin-bottom: 30px;
}

#contactForm {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 500px;
    margin: 0 auto;
}

#contactForm input,
#contactForm textarea {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    font-size: 1em;
}

#contactForm button {
    background-color: #333;
    color: white;
    padding: 15px;
    font-size: 1.1em;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

#contactForm button:hover {
    background-color: #444;
}
**script.js**
// script.js
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
