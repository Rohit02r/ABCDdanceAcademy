document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    let valid = true;

    // Name validation
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        valid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === '') {
        emailError.textContent = 'Email is required';
        valid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        valid = false;
    }

    // Message validation
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        valid = false;
    }

    if (valid) {
        // If the form is valid, you can submit it to the server here.
        alert('Form submitted successfully');
        // Uncomment the next line to actually submit the form
        // this.submit();
    }
});


