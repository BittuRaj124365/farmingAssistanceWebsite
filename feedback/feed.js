// Get elements
const openBtn = document.getElementById("openFeedback");
const modal = document.getElementById("feedbackModal");
const closeBtn = document.getElementById("closeFeedback");
const form = document.getElementById("feedbackForm");
const responseMessage = document.getElementById("responseMessage");

// Open the modal
openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Close the modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    resetForm();
});

// Close modal if user clicks outside content
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        resetForm();
    }
});

// Handle form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Capture input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        responseMessage.textContent = "Thank you for your valuable feedback!";
        form.reset();
    } else {
        responseMessage.textContent = "Please fill all fields.";
    }
});

// Reset form and message
function resetForm() {
    form.reset();
    responseMessage.textContent = "";
}
