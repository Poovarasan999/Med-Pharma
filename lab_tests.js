function openMenu() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('show');
}
// Close sidebar
function closeMenu() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
}

function closeHelpModal() {
    const modal = document.getElementById('helpModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function showHelpModal() {
    const modal = document.getElementById('helpModal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

window.addEventListener('load', () => {
    setTimeout(showHelpModal, 1000);
});

// Phone Number Validation Logic
const phoneInput = document.getElementById('phoneInput');
const callbackBtn = document.getElementById('callbackBtn');

phoneInput.addEventListener('input', function (e) {
    // Remove non-numeric characters
    this.value = this.value.replace(/\D/g, '');
    // Enable button only if length is exactly 10
    if (this.value.length === 10) {
        callbackBtn.disabled = false;
    } else {
        callbackBtn.disabled = true;
    }
});

// Search Filter Logic for Lab Tests
const searchInput = document.getElementById('searchInput');
const testCards = document.querySelectorAll('.test-card');

searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase().trim();

    testCards.forEach(card => {
        const testName = card.querySelector('h3').textContent.toLowerCase();
        if (testName.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});