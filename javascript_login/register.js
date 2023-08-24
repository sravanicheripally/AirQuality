document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    
    // Phone number validation (10-digit)
    phoneInput.addEventListener("input", function() {
        const phoneNumber = this.value;
        if (!/^\d{10}$/.test(phoneNumber)) {
            this.setCustomValidity("Please enter a valid 10-digit phone number.");
        } else {
            this.setCustomValidity("");
        }
    });
    
    // Email validation
    emailInput.addEventListener("input", function() {
        const email = this.value;
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            this.setCustomValidity("Please enter a valid email address.");
        } else {
            this.setCustomValidity("");
        }
    });
    
    // Form submission
    registrationForm.addEventListener("submit", function(event) {
        if (!registrationForm.checkValidity()) {
            event.preventDefault();
        }
    });
});
