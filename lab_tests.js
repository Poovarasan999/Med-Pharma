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
 var addressToggle = document.getElementById("addressToggle");
        var locationPanel = document.getElementById("locationPanel");
        var locationOverlay = document.getElementById("locationOverlay");
        var locationClose = document.getElementById("locationClose");
        var cartToggle = document.getElementById("cartToggle");
        var cartModal = document.getElementById("cartModal");
        var cartOverlay = document.getElementById("cartOverlay");
        var cartClose = document.getElementById("cartClose");
        var loginToggle = document.getElementById("loginToggle");
        var loginOverlay = document.getElementById("loginOverlay");
        var loginModal = document.getElementById("loginModal");
        var loginClose = document.getElementById("loginClose");
        var loginSubmit = document.getElementById("loginSubmit");
        var loginError = document.getElementById("loginError");

        function openLocationPanel() {
            locationPanel.style.left = "0";
            locationOverlay.style.display = "block";
        }

        function closeLocationPanel() {
            locationPanel.style.left = "-100%";
            locationOverlay.style.display = "none";
        }

        function openCartModal() {
            cartModal.style.display = "block";
            cartOverlay.style.display = "block";
        }

        function closeCartModal() {
            cartModal.style.display = "none";
            cartOverlay.style.display = "none";
        }

        function openLoginModal() {
            loginModal.style.display = "block";
            loginOverlay.style.display = "block";
            loginError.innerText = "";
        }

        function closeLoginModal() {
            loginModal.style.display = "none";
            loginOverlay.style.display = "none";
        }

        addressToggle.addEventListener("click", openLocationPanel);
        addressToggle.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                openLocationPanel();
            }
        });
        locationClose.addEventListener("click", closeLocationPanel);
        locationOverlay.addEventListener("click", closeLocationPanel);

        cartToggle.addEventListener("click", openCartModal);
        cartClose.addEventListener("click", closeCartModal);
        cartOverlay.addEventListener("click", closeCartModal);

        loginToggle.addEventListener("click", openLoginModal);
        loginClose.addEventListener("click", closeLoginModal);
        loginOverlay.addEventListener("click", closeLoginModal);

        loginSubmit.addEventListener("click", function () {
            loginError.innerText = "";
        });

        // Add to Cart Logic
        const addToCartButtons = document.querySelectorAll('.btn-add-cart');
        const cartBadge = document.getElementById('cartBadge');
        let cartCount = 0;

        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                cartCount++;
                cartBadge.innerText = cartCount;
                
                // Optional: Provide feedback to user
                const originalText = button.innerHTML;
                button.innerHTML = '<i class="bx bx-check"></i> Added';
                button.style.backgroundColor = '#4caf50';
                button.style.color = '#fff';
                button.style.borderColor = '#4caf50';
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.style.backgroundColor = '';
                    button.style.color = '';
                    button.style.borderColor = '';
                }, 1000);
            });
        });