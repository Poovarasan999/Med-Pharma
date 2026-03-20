// ============================================
// MedPharma - script.js (sections for easy reading)
// ============================================

// --- Variables: Location (delivery address panel) ---
var addressToggle = document.getElementById("addressToggle");
var locationPanel = document.getElementById("locationPanel");
var locationOverlay = document.getElementById("locationOverlay");
var locationClose = document.getElementById("locationClose");

// --- Variables: Cart ---
var cartToggle = document.getElementById("cartToggle");
var cartModal = document.getElementById("cartModal");
var cartOverlay = document.getElementById("cartOverlay");
var cartClose = document.getElementById("cartClose");

// --- Variables: Login ---
var loginToggle = document.getElementById("loginToggle");
var loginOverlay = document.getElementById("loginOverlay");
var loginModal = document.getElementById("loginModal");
var loginClose = document.getElementById("loginClose");
var loginName = document.getElementById("loginName");
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var loginError = document.getElementById("loginError");
var loginSubmit = document.getElementById("loginSubmit");

// --- Variables: Success popup ---
var successOverlay = document.getElementById("successOverlay");
var successModal = document.getElementById("successModal");
var successTitle = document.getElementById("successTitle");
var successMessage = document.getElementById("successMessage");
var successOkBtn = document.getElementById("successOkBtn");

// --- Variables: Promo strip (offers row) ---
var promoOfferCard = document.getElementById("promoOfferCard");
var promoOfferOverlay = document.getElementById("promoOfferOverlay");
var promoOfferModal = document.getElementById("promoOfferModal");
var promoOfferClose = document.getElementById("promoOfferClose");
var promoOfferOk = document.getElementById("promoOfferOk");
var doctorOfferCard = document.getElementById("doctorOfferCard");
var doctorOfferOverlay = document.getElementById("doctorOfferOverlay");
var doctorOfferModal = document.getElementById("doctorOfferModal");
var doctorOfferClose = document.getElementById("doctorOfferClose");
var doctorOfferOk = document.getElementById("doctorOfferOk");
var insuranceOfferCard = document.getElementById("insuranceOfferCard");
var insuranceOfferOverlay = document.getElementById("insuranceOfferOverlay");
var insuranceOfferModal = document.getElementById("insuranceOfferModal");
var insuranceOfferClose = document.getElementById("insuranceOfferClose");
var insuranceOfferOk = document.getElementById("insuranceOfferOk");
var labOfferCard = document.getElementById("labOfferCard");
var labOfferOverlay = document.getElementById("labOfferOverlay");
var labOfferModal = document.getElementById("labOfferModal");
var labOfferClose = document.getElementById("labOfferClose");
var labOfferOk = document.getElementById("labOfferOk");

// --- Variables: Browse by Health Conditions ---
var diabetesCard = document.getElementById("diabetesCard");
var diabetesOverlay = document.getElementById("diabetesOverlay");
var diabetesModal = document.getElementById("diabetesModal");
var diabetesClose = document.getElementById("diabetesClose");
var diabetesOk = document.getElementById("diabetesOk");
var cardiacCard = document.getElementById("cardiacCard");
var cardiacOverlay = document.getElementById("cardiacOverlay");
var cardiacModal = document.getElementById("cardiacModal");
var cardiacClose = document.getElementById("cardiacClose");
var cardiacOk = document.getElementById("cardiacOk");
var stomachCard = document.getElementById("stomachCard");
var stomachOverlay = document.getElementById("stomachOverlay");
var stomachModal = document.getElementById("stomachModal");
var stomachClose = document.getElementById("stomachClose");
var stomachOk = document.getElementById("stomachOk");
var painCard = document.getElementById("painCard");
var painOverlay = document.getElementById("painOverlay");
var painModal = document.getElementById("painModal");
var painClose = document.getElementById("painClose");
var painOk = document.getElementById("painOk");
var liverCard = document.getElementById("liverCard");
var liverOverlay = document.getElementById("liverOverlay");
var liverModal = document.getElementById("liverModal");
var liverClose = document.getElementById("liverClose");
var liverOk = document.getElementById("liverOk");
var oralCard = document.getElementById("oralCard");
var oralOverlay = document.getElementById("oralOverlay");
var oralModal = document.getElementById("oralModal");
var oralClose = document.getElementById("oralClose");
var oralOk = document.getElementById("oralOk");
var respiratoryCard = document.getElementById("respiratoryCard");
var respiratoryOverlay = document.getElementById("respiratoryOverlay");
var respiratoryModal = document.getElementById("respiratoryModal");
var respiratoryClose = document.getElementById("respiratoryClose");
var respiratoryOk = document.getElementById("respiratoryOk");
var sexualCard = document.getElementById("sexualCard");
var sexualOverlay = document.getElementById("sexualOverlay");
var sexualModal = document.getElementById("sexualModal");
var sexualClose = document.getElementById("sexualClose");
var sexualOk = document.getElementById("sexualOk");
var elderlyCard = document.getElementById("elderlyCard");
var elderlyOverlay = document.getElementById("elderlyOverlay");
var elderlyModal = document.getElementById("elderlyModal");
var elderlyClose = document.getElementById("elderlyClose");
var elderlyOk = document.getElementById("elderlyOk");
var immunityCard = document.getElementById("immunityCard");
var immunityOverlay = document.getElementById("immunityOverlay");
var immunityModal = document.getElementById("immunityModal");
var immunityClose = document.getElementById("immunityClose");
var immunityOk = document.getElementById("immunityOk");

// --- Variables: Checkout & Banner ---
var checkoutBtn = document.getElementById("checkoutBtn");
var mainBanner = document.getElementById("mainBanner");
var bannerPrev = document.getElementById("bannerPrev");
var bannerNext = document.getElementById("bannerNext");

// --- Variables: Buy Medicines popup (banner CTA) ---
var buyMedicineCta = document.getElementById("buyMedicineCta");
var buyMedicineOverlay = document.getElementById("buyMedicineOverlay");
var buyMedicineModal = document.getElementById("buyMedicineModal");
var buyMedicineClose = document.getElementById("buyMedicineClose");
var buyMedicineSearch = document.getElementById("buyMedicineSearch");
var buyMedicineNoResult = document.getElementById("buyMedicineNoResult");
var buyMedicineFilters = buyMedicineModal.getElementsByClassName("buy-medicine-filter");
var buyMedicineCards = buyMedicineModal.getElementsByClassName("buy-medicine-card");

// --- Variables: Cart totals & list (modal UI) ---
var cartBadge = document.getElementById("cartBadge");
var cartItemsList = document.getElementById("cartItemsList");
var cartEmptyText = document.getElementById("cartEmptyText");
var cartItemsCount = document.getElementById("cartItemsCount");
var cartSubtotal = document.getElementById("cartSubtotal");
var cartDeliveryFee = document.getElementById("cartDeliveryFee");
var cartDiscount = document.getElementById("cartDiscount");
var cartTotal = document.getElementById("cartTotal");

// --- Variables: Product sliders (value deals sections) ---
var valueDealsTrack = document.getElementById("valueDealsTrack");
var valueDealsPrev = document.getElementById("valueDealsPrev");
var valueDealsNext = document.getElementById("valueDealsNext");
var min50DealsTrack = document.getElementById("min50DealsTrack");
var min50DealsPrev = document.getElementById("min50DealsPrev");
var min50DealsNext = document.getElementById("min50DealsNext");
var ceraveDealsTrack = document.getElementById("ceraveDealsTrack");
var ceraveDealsPrev = document.getElementById("ceraveDealsPrev");
var ceraveDealsNext = document.getElementById("ceraveDealsNext");
var immunityDealsTrack = document.getElementById("immunityDealsTrack");
var immunityDealsPrev = document.getElementById("immunityDealsPrev");
var immunityDealsNext = document.getElementById("immunityDealsNext");
var wellnessDealsTrack = document.getElementById("wellnessDealsTrack");
var wellnessDealsPrev = document.getElementById("wellnessDealsPrev");
var wellnessDealsNext = document.getElementById("wellnessDealsNext");

// --- Variables: Deal card ADD buttons (all sections) ---
var addButtons = document.getElementsByClassName("deal-card__btn");

// --- Data: cart list & banner images ---
var cartItems = [];
var bannerImages = [
    "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1600&h=500&q=80",
    "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1600&h=500&q=80",
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&h=500&q=80",
    "https://images.unsplash.com/photo-1616671276441-2f2c277b8bf9?auto=format&fit=crop&w=1600&h=500&q=80"
];
var currentBannerIndex = 0;

// --- Functions: Location (delivery address) ---
function openLocationPanel() {
    locationPanel.style.left = "0";
    locationOverlay.style.display = "block";
}

function closeLocationPanel() {
    locationPanel.style.left = "-100%";
    locationOverlay.style.display = "none";
}

// --- Functions: Cart modal ---
function openCartModal() {
    updateCartDetails();
    cartModal.style.display = "block";
    cartOverlay.style.display = "block";
}

function closeCartModal() {
    cartModal.style.display = "none";
    cartOverlay.style.display = "none";
}

// --- Functions: Login modal ---
function openLoginModal() {
    loginModal.style.display = "block";
    loginOverlay.style.display = "block";
    loginError.style.color = "#dc2626";
    loginError.innerText = "";
}

function closeLoginModal() {
    loginModal.style.display = "none";
    loginOverlay.style.display = "none";
    loginError.style.color = "#dc2626";
    loginError.innerText = "";
}

// --- Functions: Success popup ---
function openSuccessModal(titleText, messageText) {
    successTitle.innerText = titleText;
    successMessage.innerText = messageText;
    successModal.style.display = "block";
    successOverlay.style.display = "block";
}

function closeSuccessModal() {
    successModal.style.display = "none";
    successOverlay.style.display = "none";
}

// --- Functions: Buy Medicines popup (search, filters, add to cart) ---
function openBuyMedicineModal() {
    buyMedicineModal.style.display = "block";
    buyMedicineOverlay.style.display = "block";

    if (buyMedicineSearch) {
        buyMedicineSearch.value = "";
    }

    filterBuyMedicineProducts();
}

function closeBuyMedicineModal() {
    buyMedicineModal.style.display = "none";
    buyMedicineOverlay.style.display = "none";
}

function getSelectedBuyMedicineFilterValues(groupName) {
    var selectedValues = [];
    var i = 0;
    var filterGroup = "";

    for (i = 0; i < buyMedicineFilters.length; i = i + 1) {
        filterGroup = buyMedicineFilters[i].getAttribute("data-group");

        if (filterGroup === groupName && buyMedicineFilters[i].checked) {
            selectedValues.push(buyMedicineFilters[i].value);
        }
    }

    return selectedValues;
}

function filterBuyMedicineProducts() {
    var cards = buyMedicineModal.getElementsByClassName("buy-medicine-card");
    var searchText = "";
    var i = 0;
    var titleElements = null;
    var titleText = "";
    var selectedCategory = getSelectedBuyMedicineFilterValues("category");
    var selectedHealth = getSelectedBuyMedicineFilterValues("health");
    var selectedAvailability = getSelectedBuyMedicineFilterValues("availability");
    var categoryValue = "";
    var healthValue = "";
    var availabilityValue = "";
    var categoryMatch = false;
    var healthMatch = false;
    var availabilityMatch = false;
    var visibleCount = 0;

    if (buyMedicineSearch) {
        searchText = buyMedicineSearch.value.toLowerCase();
    }

    for (i = 0; i < cards.length; i = i + 1) {
        titleElements = cards[i].getElementsByClassName("buy-medicine-card__title");
        titleText = "";

        if (titleElements.length > 0) {
            titleText = titleElements[0].innerText.toLowerCase();
        }

        categoryValue = cards[i].getAttribute("data-category");
        healthValue = cards[i].getAttribute("data-health");
        availabilityValue = cards[i].getAttribute("data-availability");
        categoryMatch = selectedCategory.length === 0 || selectedCategory.indexOf(categoryValue) !== -1;
        healthMatch = selectedHealth.length === 0 || selectedHealth.indexOf(healthValue) !== -1;
        availabilityMatch = selectedAvailability.length === 0 || selectedAvailability.indexOf(availabilityValue) !== -1;

        if (titleText.indexOf(searchText) !== -1 && categoryMatch && healthMatch && availabilityMatch) {
            cards[i].style.display = "block";
            visibleCount = visibleCount + 1;
        } else {
            cards[i].style.display = "none";
        }
    }

    if (buyMedicineNoResult) {
        if (visibleCount === 0) {
            buyMedicineNoResult.style.display = "block";
        } else {
            buyMedicineNoResult.style.display = "none";
        }
    }
}

function addBuyMedicineCardToCart(cardElement) {
    var titleElements = cardElement.getElementsByClassName("buy-medicine-card__title");
    var priceElements = cardElement.getElementsByTagName("p");
    var itemName = "";
    var priceText = "";
    var priceValue = 0;

    if (titleElements.length > 0) {
        itemName = titleElements[0].innerText;
    }

    if (priceElements.length > 0) {
        priceText = priceElements[0].innerText;
        priceValue = parseFloat(priceText.replace("Rs.", "").replace("Rs", "").replace(",", "").trim());
    }

    if (isNaN(priceValue)) {
        priceValue = 0;
    }

    cartItems.push({
        name: itemName,
        price: priceValue
    });

    updateCartDetails();
    closeBuyMedicineModal();
    openCartModal();
}

// --- Functions: Promo strip modals ---
function openPromoOfferModal() {
    promoOfferModal.style.display = "block";
    promoOfferOverlay.style.display = "block";
}

function closePromoOfferModal() {
    promoOfferModal.style.display = "none";
    promoOfferOverlay.style.display = "none";
}

function openDoctorOfferModal() {
    doctorOfferModal.style.display = "block";
    doctorOfferOverlay.style.display = "block";
}

function closeDoctorOfferModal() {
    doctorOfferModal.style.display = "none";
    doctorOfferOverlay.style.display = "none";
}

function openInsuranceOfferModal() {
    insuranceOfferModal.style.display = "block";
    insuranceOfferOverlay.style.display = "block";
}

function closeInsuranceOfferModal() {
    insuranceOfferModal.style.display = "none";
    insuranceOfferOverlay.style.display = "none";
}

function openLabOfferModal() {
    labOfferModal.style.display = "block";
    labOfferOverlay.style.display = "block";
}

function closeLabOfferModal() {
    labOfferModal.style.display = "none";
    labOfferOverlay.style.display = "none";
}

// --- Functions: Health condition popups ---
function openDiabetesModal() {
    diabetesModal.style.display = "block";
    diabetesOverlay.style.display = "block";
}

function closeDiabetesModal() {
    diabetesModal.style.display = "none";
    diabetesOverlay.style.display = "none";
}

function openCardiacModal() {
    cardiacModal.style.display = "block";
    cardiacOverlay.style.display = "block";
}

function closeCardiacModal() {
    cardiacModal.style.display = "none";
    cardiacOverlay.style.display = "none";
}

function openStomachModal() {
    stomachModal.style.display = "block";
    stomachOverlay.style.display = "block";
}

function closeStomachModal() {
    stomachModal.style.display = "none";
    stomachOverlay.style.display = "none";
}

function openPainModal() {
    painModal.style.display = "block";
    painOverlay.style.display = "block";
}

function closePainModal() {
    painModal.style.display = "none";
    painOverlay.style.display = "none";
}

function openLiverModal() {
    liverModal.style.display = "block";
    liverOverlay.style.display = "block";
}

function closeLiverModal() {
    liverModal.style.display = "none";
    liverOverlay.style.display = "none";
}

function openOralModal() {
    oralModal.style.display = "block";
    oralOverlay.style.display = "block";
}

function closeOralModal() {
    oralModal.style.display = "none";
    oralOverlay.style.display = "none";
}

function openRespiratoryModal() {
    respiratoryModal.style.display = "block";
    respiratoryOverlay.style.display = "block";
}

function closeRespiratoryModal() {
    respiratoryModal.style.display = "none";
    respiratoryOverlay.style.display = "none";
}

function openSexualModal() {
    sexualModal.style.display = "block";
    sexualOverlay.style.display = "block";
}

function closeSexualModal() {
    sexualModal.style.display = "none";
    sexualOverlay.style.display = "none";
}

function openElderlyModal() {
    elderlyModal.style.display = "block";
    elderlyOverlay.style.display = "block";
}

function closeElderlyModal() {
    elderlyModal.style.display = "none";
    elderlyOverlay.style.display = "none";
}

function openImmunityModal() {
    immunityModal.style.display = "block";
    immunityOverlay.style.display = "block";
}

function closeImmunityModal() {
    immunityModal.style.display = "none";
    immunityOverlay.style.display = "none";
}

// --- Functions: Checkout ---
function handleCheckoutSuccess() {
    if (cartItems.length === 0) {
        openSuccessModal("Cart Empty", "Your cart is empty. Please add items first.");
        return;
    }

    closeCartModal();
    openSuccessModal("Order Placed Successful", "Order placed successfully! Thank you for shopping with MedPharma.");
    cartItems = [];
    updateCartDetails();
}

// --- Functions: Banner (image slider) ---
function updateBannerImage() {
    mainBanner.style.backgroundImage = "url('" + bannerImages[currentBannerIndex] + "')";
}

function showNextBanner() {
    currentBannerIndex = currentBannerIndex + 1;
    if (currentBannerIndex >= bannerImages.length) {
        currentBannerIndex = 0;
    }
    updateBannerImage();
}

function showPrevBanner() {
    currentBannerIndex = currentBannerIndex - 1;
    if (currentBannerIndex < 0) {
        currentBannerIndex = bannerImages.length - 1;
    }
    updateBannerImage();
}

// --- Functions: Login form validation ---
function validateLoginForm() {
    var nameValue = loginName.value.trim();
    var emailValue = loginEmail.value.trim();
    var passwordValue = loginPassword.value;
    loginError.style.color = "#dc2626";

    if (nameValue === "") {
        loginError.innerText = "Please enter your name.";
        return;
    }

    if (emailValue === "" || emailValue.indexOf("@") === -1 || emailValue.indexOf(".") === -1) {
        loginError.innerText = "Please enter a valid email address.";
        return;
    }

    if (passwordValue.length < 6) {
        loginError.innerText = "Password must be at least 6 characters.";
        return;
    }

    closeLoginModal();
    openSuccessModal("Login Successful", "Welcome " + nameValue + "! Login successful.");
}

// --- Functions: Cart helper (price format, list, add from deal cards) ---
function formatPrice(value) {
    return "Rs " + value.toFixed(2);
}

function updateCartDetails() {
    var i = 0;
    var subtotalValue = 0;
    var deliveryFeeValue = 0;
    var discountValue = 0;
    var totalValue = 0;
    var itemHtml = "";

    for (i = 0; i < cartItems.length; i = i + 1) {
        subtotalValue = subtotalValue + cartItems[i].price;
        itemHtml = itemHtml + "<p class='cart-modal__item'><span class='cart-modal__item-name'>" + cartItems[i].name + "</span><strong class='cart-modal__item-price'>" + formatPrice(cartItems[i].price) + "</strong></p>";
    }

    if (cartItems.length > 0) {
        deliveryFeeValue = 40;
    }

    if (subtotalValue >= 1500) {
        discountValue = 150;
    } else if (subtotalValue >= 700) {
        discountValue = 70;
    }

    totalValue = subtotalValue + deliveryFeeValue - discountValue;

    cartItemsList.innerHTML = itemHtml;
    cartItemsCount.innerText = cartItems.length;
    cartSubtotal.innerText = formatPrice(subtotalValue);
    cartDeliveryFee.innerText = formatPrice(deliveryFeeValue);
    cartDiscount.innerText = "- " + formatPrice(discountValue);
    cartTotal.innerText = formatPrice(totalValue);
    cartBadge.innerText = cartItems.length;

    if (cartItems.length === 0) {
        cartEmptyText.style.display = "block";
    } else {
        cartEmptyText.style.display = "none";
    }
}

function addItemToCart(buttonElement) {
    var card = buttonElement.parentNode;
    var titleElement = card.getElementsByTagName("h3")[0];
    var priceElement = card.getElementsByClassName("deal-card__now")[0];
    var priceText = priceElement.innerText;
    var priceValue = parseFloat(priceText.replace("Rs", "").replace(",", "").trim());
    var itemName = titleElement.innerText;

    if (isNaN(priceValue)) {
        priceValue = 0;
    }

    cartItems.push({
        name: itemName,
        price: priceValue
    });

    updateCartDetails();
    openCartModal();
}

// --- Functions: Product sliders (horizontal scroll by section) ---
function scrollValueDeals(direction) {
    var firstCard = valueDealsTrack.getElementsByClassName("deal-card")[0];
    var gapValue = 14;
    var cardWidth = 0;
    var moveValue = 0;

    if (!firstCard) {
        return;
    }

    gapValue = parseFloat(window.getComputedStyle(valueDealsTrack).gap);
    if (isNaN(gapValue)) {
        gapValue = 14;
    }

    cardWidth = firstCard.offsetWidth;
    moveValue = cardWidth + gapValue;

    if (direction === "left") {
        valueDealsTrack.scrollBy({
            left: -moveValue,
            behavior: "smooth"
        });
    } else {
        valueDealsTrack.scrollBy({
            left: moveValue,
            behavior: "smooth"
        });
    }
}

function scrollCeraveDeals(direction) {
    var firstCard = ceraveDealsTrack.getElementsByClassName("deal-card")[0];
    var gapValue = 14;
    var cardWidth = 0;
    var moveValue = 0;

    if (!firstCard) {
        return;
    }

    gapValue = parseFloat(window.getComputedStyle(ceraveDealsTrack).gap);
    if (isNaN(gapValue)) {
        gapValue = 14;
    }

    cardWidth = firstCard.offsetWidth;
    moveValue = cardWidth + gapValue;

    if (direction === "left") {
        ceraveDealsTrack.scrollBy({
            left: -moveValue,
            behavior: "smooth"
        });
    } else {
        ceraveDealsTrack.scrollBy({
            left: moveValue,
            behavior: "smooth"
        });
    }
}

function scrollMin50Deals(direction) {
    var firstCard = min50DealsTrack.getElementsByClassName("deal-card")[0];
    var gapValue = 14;
    var cardWidth = 0;
    var moveValue = 0;

    if (!firstCard) {
        return;
    }

    gapValue = parseFloat(window.getComputedStyle(min50DealsTrack).gap);
    if (isNaN(gapValue)) {
        gapValue = 14;
    }

    cardWidth = firstCard.offsetWidth;
    moveValue = cardWidth + gapValue;

    if (direction === "left") {
        min50DealsTrack.scrollBy({
            left: -moveValue,
            behavior: "smooth"
        });
    } else {
        min50DealsTrack.scrollBy({
            left: moveValue,
            behavior: "smooth"
        });
    }
}

function scrollImmunityDeals(direction) {
    var firstCard = immunityDealsTrack.getElementsByClassName("deal-card")[0];
    var gapValue = 14;
    var cardWidth = 0;
    var moveValue = 0;

    if (!firstCard) {
        return;
    }

    gapValue = parseFloat(window.getComputedStyle(immunityDealsTrack).gap);
    if (isNaN(gapValue)) {
        gapValue = 14;
    }

    cardWidth = firstCard.offsetWidth;
    moveValue = cardWidth + gapValue;

    if (direction === "left") {
        immunityDealsTrack.scrollBy({
            left: -moveValue,
            behavior: "smooth"
        });
    } else {
        immunityDealsTrack.scrollBy({
            left: moveValue,
            behavior: "smooth"
        });
    }
}

function scrollWellnessDeals(direction) {
    var firstCard = wellnessDealsTrack.getElementsByClassName("deal-card")[0];
    var gapValue = 14;
    var cardWidth = 0;
    var moveValue = 0;

    if (!firstCard) {
        return;
    }

    gapValue = parseFloat(window.getComputedStyle(wellnessDealsTrack).gap);
    if (isNaN(gapValue)) {
        gapValue = 14;
    }

    cardWidth = firstCard.offsetWidth;
    moveValue = cardWidth + gapValue;

    if (direction === "left") {
        wellnessDealsTrack.scrollBy({
            left: -moveValue,
            behavior: "smooth"
        });
    } else {
        wellnessDealsTrack.scrollBy({
            left: moveValue,
            behavior: "smooth"
        });
    }
}


// Event listeners (grouped by page section)


// --- Event listeners: Location ---
addressToggle.addEventListener("click", openLocationPanel);

addressToggle.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        openLocationPanel();
    }
});

locationClose.addEventListener("click", closeLocationPanel);
locationOverlay.addEventListener("click", closeLocationPanel);

// --- Event listeners: Cart ---
cartToggle.addEventListener("click", openCartModal);

cartToggle.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        openCartModal();
    }
});

cartClose.addEventListener("click", closeCartModal);
cartOverlay.addEventListener("click", closeCartModal);

// --- Event listeners: Login & Success popup ---
loginToggle.addEventListener("click", openLoginModal);
loginClose.addEventListener("click", closeLoginModal);
loginOverlay.addEventListener("click", closeLoginModal);
loginSubmit.addEventListener("click", validateLoginForm);
successOkBtn.addEventListener("click", closeSuccessModal);
successOverlay.addEventListener("click", closeSuccessModal);

// --- Event listeners: Checkout & Banner ---
checkoutBtn.addEventListener("click", handleCheckoutSuccess);
bannerNext.addEventListener("click", showNextBanner);
bannerPrev.addEventListener("click", showPrevBanner);

// --- Event listeners: Buy Medicines popup ---
buyMedicineCta.addEventListener("click", openBuyMedicineModal);
buyMedicineClose.addEventListener("click", closeBuyMedicineModal);
buyMedicineOverlay.addEventListener("click", closeBuyMedicineModal);
buyMedicineSearch.addEventListener("input", filterBuyMedicineProducts);
var filterIndex = 0;
for (filterIndex = 0; filterIndex < buyMedicineFilters.length; filterIndex = filterIndex + 1) {
    buyMedicineFilters[filterIndex].addEventListener("change", filterBuyMedicineProducts);
}
var buyMedicineCardIndex = 0;
for (buyMedicineCardIndex = 0; buyMedicineCardIndex < buyMedicineCards.length; buyMedicineCardIndex = buyMedicineCardIndex + 1) {
    buyMedicineCards[buyMedicineCardIndex].addEventListener("click", function () {
        addBuyMedicineCardToCart(this);
    });
}

// --- Event listeners: Promo strip ---
promoOfferCard.addEventListener("click", function (event) {
    event.preventDefault();
    openPromoOfferModal();
});
promoOfferClose.addEventListener("click", closePromoOfferModal);
promoOfferOverlay.addEventListener("click", closePromoOfferModal);
promoOfferOk.addEventListener("click", closePromoOfferModal);
doctorOfferCard.addEventListener("click", function (event) {
    event.preventDefault();
    openDoctorOfferModal();
});
doctorOfferClose.addEventListener("click", closeDoctorOfferModal);
doctorOfferOverlay.addEventListener("click", closeDoctorOfferModal);
doctorOfferOk.addEventListener("click", closeDoctorOfferModal);
insuranceOfferCard.addEventListener("click", function (event) {
    event.preventDefault();
    openInsuranceOfferModal();
});
insuranceOfferClose.addEventListener("click", closeInsuranceOfferModal);
insuranceOfferOverlay.addEventListener("click", closeInsuranceOfferModal);
insuranceOfferOk.addEventListener("click", closeInsuranceOfferModal);
labOfferCard.addEventListener("click", function (event) {
    event.preventDefault();
    openLabOfferModal();
});
labOfferClose.addEventListener("click", closeLabOfferModal);
labOfferOverlay.addEventListener("click", closeLabOfferModal);
labOfferOk.addEventListener("click", closeLabOfferModal);

// --- Event listeners: Browse by Health Conditions ---
diabetesCard.addEventListener("click", function (event) {
    event.preventDefault();
    openDiabetesModal();
});
diabetesClose.addEventListener("click", closeDiabetesModal);
diabetesOverlay.addEventListener("click", closeDiabetesModal);
diabetesOk.addEventListener("click", closeDiabetesModal);
cardiacCard.addEventListener("click", function (event) {
    event.preventDefault();
    openCardiacModal();
});
cardiacClose.addEventListener("click", closeCardiacModal);
cardiacOverlay.addEventListener("click", closeCardiacModal);
cardiacOk.addEventListener("click", closeCardiacModal);
stomachCard.addEventListener("click", function (event) {
    event.preventDefault();
    openStomachModal();
});
stomachClose.addEventListener("click", closeStomachModal);
stomachOverlay.addEventListener("click", closeStomachModal);
stomachOk.addEventListener("click", closeStomachModal);
painCard.addEventListener("click", function (event) {
    event.preventDefault();
    openPainModal();
});
painClose.addEventListener("click", closePainModal);
painOverlay.addEventListener("click", closePainModal);
painOk.addEventListener("click", closePainModal);
liverCard.addEventListener("click", function (event) {
    event.preventDefault();
    openLiverModal();
});
liverClose.addEventListener("click", closeLiverModal);
liverOverlay.addEventListener("click", closeLiverModal);
liverOk.addEventListener("click", closeLiverModal);
oralCard.addEventListener("click", function (event) {
    event.preventDefault();
    openOralModal();
});
oralClose.addEventListener("click", closeOralModal);
oralOverlay.addEventListener("click", closeOralModal);
oralOk.addEventListener("click", closeOralModal);
respiratoryCard.addEventListener("click", function (event) {
    event.preventDefault();
    openRespiratoryModal();
});
respiratoryClose.addEventListener("click", closeRespiratoryModal);
respiratoryOverlay.addEventListener("click", closeRespiratoryModal);
respiratoryOk.addEventListener("click", closeRespiratoryModal);
sexualCard.addEventListener("click", function (event) {
    event.preventDefault();
    openSexualModal();
});
sexualClose.addEventListener("click", closeSexualModal);
sexualOverlay.addEventListener("click", closeSexualModal);
sexualOk.addEventListener("click", closeSexualModal);
elderlyCard.addEventListener("click", function (event) {
    event.preventDefault();
    openElderlyModal();
});
elderlyClose.addEventListener("click", closeElderlyModal);
elderlyOverlay.addEventListener("click", closeElderlyModal);
elderlyOk.addEventListener("click", closeElderlyModal);
immunityCard.addEventListener("click", function (event) {
    event.preventDefault();
    openImmunityModal();
});
immunityClose.addEventListener("click", closeImmunityModal);
immunityOverlay.addEventListener("click", closeImmunityModal);
immunityOk.addEventListener("click", closeImmunityModal);

// --- Event listeners: Product sliders (arrows) ---
if (valueDealsPrev && valueDealsNext && valueDealsTrack) {
    valueDealsPrev.addEventListener("click", function () {
        scrollValueDeals("left");
    });

    valueDealsNext.addEventListener("click", function () {
        scrollValueDeals("right");
    });
}

if (ceraveDealsPrev && ceraveDealsNext && ceraveDealsTrack) {
    ceraveDealsPrev.addEventListener("click", function () {
        scrollCeraveDeals("left");
    });

    ceraveDealsNext.addEventListener("click", function () {
        scrollCeraveDeals("right");
    });
}

if (min50DealsPrev && min50DealsNext && min50DealsTrack) {
    min50DealsPrev.addEventListener("click", function () {
        scrollMin50Deals("left");
    });

    min50DealsNext.addEventListener("click", function () {
        scrollMin50Deals("right");
    });
}

if (immunityDealsPrev && immunityDealsNext && immunityDealsTrack) {
    immunityDealsPrev.addEventListener("click", function () {
        scrollImmunityDeals("left");
    });

    immunityDealsNext.addEventListener("click", function () {
        scrollImmunityDeals("right");
    });
}

if (wellnessDealsPrev && wellnessDealsNext && wellnessDealsTrack) {
    wellnessDealsPrev.addEventListener("click", function () {
        scrollWellnessDeals("left");
    });

    wellnessDealsNext.addEventListener("click", function () {
        scrollWellnessDeals("right");
    });
}

// --- Event listeners: Deal card ADD buttons ---
var i = 0;
for (i = 0; i < addButtons.length; i = i + 1) {
    addButtons[i].addEventListener("click", function () {
        addItemToCart(this);
    });
}

// --- Page load (first paint) ---
updateCartDetails();
updateBannerImage();
