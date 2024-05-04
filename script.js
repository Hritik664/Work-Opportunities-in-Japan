// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


// Mock job data (replace with API data)
const jobListings = [
    { title: "Software Engineer", location: "Tokyo", type: "Full-time" },
    { title: "English Teacher", location: "Osaka", type: "Part-time" },
    { title: "Marketing Specialist", location: "Kyoto", type: "Contract" }
];

// Function to display job listings
function displayJobListings() {
    const jobListingContainer = document.getElementById("job-listing-cards");

    jobListings.forEach(job => {
        const card = document.createElement("div");
        card.classList.add("job-card");
        card.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Type:</strong> ${job.type}</p>
        `;
        jobListingContainer.appendChild(card);
    });
}

// Call the function to display job listings
displayJobListings();

// Contact form submission
// const contactForm = document.getElementById("contact-form");

// contactForm.addEventListener("submit", function(event) {
//     event.preventDefault();

    // Send form data to backend or handle form submission
    // Here, you can use JavaScript to send form data to a backend server using fetch or XMLHttpRequest
    // Example:
    // const formData = new FormData(contactForm);
    // fetch("submit.php", {
    //     method: "POST",
    //     body: formData
    // })
    // .then(response => {
    //     // Handle response
    // })
    // .catch(error => {
    //     console.error("Error:", error);
    // });

    // For demonstration purposes, log form data to console
    // console.log("Form submitted:");
//     console.log("Name:", contactForm.elements["name"].value);
//     console.log("Email:", contactForm.elements["email"].value);
//     console.log("Message:", contactForm.elements["message"].value);

//     // Reset form after submission
//     contactForm.reset();
// });


// Initialize the map
var map = L.map('map-container').setView([35.6895, 139.6917], 6); // Set initial coordinates and zoom level for Japan

// Add a base layer (e.g., OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add markers for different locations
var locations = [
    { coordinates: [35.6895, 139.6917], name: "Tokyo" },
    { coordinates: [34.6937, 135.5023], name: "Osaka" },
    { coordinates: [35.0116, 135.7681], name: "Kyoto" }
];

// Loop through locations array and add markers to the map
locations.forEach(location => {
    L.marker(location.coordinates).addTo(map).bindPopup(location.name);
});

// Adjust map view to fit all markers
var group = new L.featureGroup(locations.map(location => L.marker(location.coordinates)));
map.fitBounds(group.getBounds());



// Contact form submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // For demonstration purposes, log form data to console
    console.log("Form submitted:");
    console.log("Name:", contactForm.elements["name"].value);
    console.log("Email:", contactForm.elements["email"].value);
    console.log("Message:", contactForm.elements["message"].value);

    // Reset form after submission
    contactForm.reset();

    // Display success message to user
    alert("Your message has been sent successfully!");
});

// Feedback form submission
const feedbackForm = document.getElementById("feedback-form");

feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // For demonstration purposes, log feedback message to console
    console.log("Feedback submitted:");
    console.log("Message:", feedbackForm.elements["feedback-message"].value);

    // Reset form after submission
    feedbackForm.reset();

    // Display success message to user
    alert("Thank you for your feedback!");
});