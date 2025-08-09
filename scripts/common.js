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