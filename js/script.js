document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the page from refreshing

    let params = {
        name: document.getElementById("contactname").value,
        email: document.getElementById("contactemail").value,
        phone: document.getElementById("contactphone").value,
        message: document.getElementById("contactmessage").value
    };

    // Uncomment this line to send the email with EmailJS
    emailjs.send("service_0ze3hxc", "template_rk03tcm", params).then(() => {
        alert("Your message is sent successfully!");
    });

    // Optionally reset the form after submission
    document.getElementById('contactForm').reset();
});


