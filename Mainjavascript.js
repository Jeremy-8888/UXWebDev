function submitForm(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Get the subject text (not just the value)
    const subjectSelect = document.getElementById('subject');
    const subjectText = subjectSelect.options[subjectSelect.selectedIndex].text;
    
    // Display the submitted information
    const responseDiv = document.getElementById('formResponse');
    responseDiv.innerHTML = `
        <h5><i class="fas fa-check-circle me-2"></i>Message Submitted Successfully!</h5>
        <div class="mt-3">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subjectText}</p>
            <p><strong>Message:</strong></p>
            <div class="bg-light p-3 rounded border-start border-primary border-4">
                ${message.replace(/\n/g, '<br>')}
            </div>
        </div>
        <p class="mt-3 mb-0 text-muted">
            <i class="fas fa-info-circle me-1"></i>
            We'll get back to you within 24-48 hours at the email address provided.
        </p>
    `;
    responseDiv.style.display = 'block';
    responseDiv.className = 'mt-3 alert alert-success border border-success';
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    // Scroll to response
    responseDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}