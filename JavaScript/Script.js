const ads = document.querySelectorAll('.ad');
let currentAdIndex = 0;

// Initialize the slideshow by displaying the first ad
function initSlideshow() {
    showAd(currentAdIndex);
}

// Display the ad corresponding to the given index
function showAd(index) {
    ads.forEach((ad, i) => {
        ad.classList.toggle('active', i === index);
    });
}

// Move to the next ad in the slideshow
function nextAd() {
    currentAdIndex = (currentAdIndex + 1) % ads.length;
    showAd(currentAdIndex);
}

// Move to the previous ad in the slideshow
function prevAd() {
    currentAdIndex = (currentAdIndex - 1 + ads.length) % ads.length;
    showAd(currentAdIndex);
}

// Attach event listeners to buttons
function setupEventListeners() {
    document.getElementById('nextBtn').addEventListener('click', nextAd);
    document.getElementById('prevBtn').addEventListener('click', prevAd);
}

// Initialize the slideshow when the page is ready
document.addEventListener('DOMContentLoaded', () => {
    initSlideshow();
    setupEventListeners();
});
