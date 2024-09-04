const ads = document.querySelectorAll('.ad');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

// แสดงโฆษณาที่ระบุโดย index
function showAd(index) {
    ads.forEach((ad, i) => {
        ad.style.display = i === index ? 'flex' : 'none';
    });
}

// แสดงโฆษณาเริ่มต้น
showAd(currentIndex);

nextBtn.addEventListener('click', () => {
    if (currentIndex < ads.length - 1) {
        currentIndex++;
        showAd(currentIndex);
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showAd(currentIndex);
    }
});
