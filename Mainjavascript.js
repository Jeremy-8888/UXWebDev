// FAQ Toggle Function
function toggleFAQ(id) {
    const answer = document.getElementById(id);
    const question = answer.previousElementSibling;
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-answer').forEach(item => {
        if (item !== answer && item.classList.contains('show')) {
            item.classList.remove('show');
            item.previousElementSibling.classList.remove('active');
        }
    });
    
    // Toggle current FAQ item
    if (answer.classList.contains('show')) {
        answer.classList.remove('show');
        question.classList.remove('active');
    } else {
        answer.classList.add('show');
        question.classList.add('active');
    }
}

// Contact Form Submission Function
function submitForm(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Show success message
    const responseDiv = document.getElementById('formResponse');
    responseDiv.innerHTML = `Thank you, ${name}! Your message has been received. We'll get back to you soon.`;
    responseDiv.style.display = 'block';
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        responseDiv.style.display = 'none';
    }, 5000);
}