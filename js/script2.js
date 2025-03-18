document.getElementById('tailor-made-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the page from refreshing

    let params = {
        tailor_made_title: document.getElementById("title").value,
        tailor_made_name: document.getElementById("fullName").value,
        tailor_made_country: document.getElementById("country").value,
        tailor_made_contact_number: document.getElementById("contactNo").value,
        tailor_made_email: document.getElementById("email").value,
        tailor_made_arrival_date: document.getElementById("arrivalDate").value,
        tailor_made_departure_date: document.getElementById("departureDate").value,
        tailor_made_adults: document.getElementById("adults").value,
        tailor_made_kids: document.getElementById("kids").value,
        tailor_made_accomadation: document.getElementById("accommodationType").value,
        tailor_made_how_did_you_hear_about_us: document.getElementById("hearAboutUs").value,
        tailor_made_special_note: document.getElementById("specialNote").value
    };

    // Uncomment this line to send the email with EmailJS
    emailjs.send("service_0ze3hxc", "template_rk03tcm", params).then(() => {
        alert("Your message is sent successfully!");
    });

    // Optionally reset the form after submission
    document.getElementById('tailor-made-form').reset();
});
