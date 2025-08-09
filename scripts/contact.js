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

// filepath: c:\Users\cutej\Downloads\UXWebDev-3\scripts\common.js
// requires scripts/backend-sim/account.js

function loadMyAccountToNavbar() {
    let username = getNameOfLoggedInUser()
    if (username !== null) {
        document.getElementById("accountnavbarlink").textContent = username;
        document.getElementById("loginnavbaritem").style.display = "none";
        document.getElementById("accountnavbaritem").style.display = "inline";
    }
}

function main() {
    loadMyAccountToNavbar();
} 
window.addEventListener("load", main);

// FAQ Toggle Function
function toggleFAQ(id) {
    // Close all other FAQ items first
    const allAnswers = document.querySelectorAll('.faq-answer');
    const allQuestions = document.querySelectorAll('.faq-question');
    
    allAnswers.forEach(answer => {
        if (answer.id !== id) {
            answer.classList.remove('show');
        }
    });
    
    allQuestions.forEach(question => {
        if (question.getAttribute('onclick') !== `toggleFAQ('${id}')`) {
            question.classList.remove('active');
        }
    });
    
    // Toggle the clicked FAQ item
    const answer = document.getElementById(id);
    const question = document.querySelector(`[onclick="toggleFAQ('${id}')"]`);
    
    if (answer && question) {
        answer.classList.toggle('show');
        question.classList.toggle('active');
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