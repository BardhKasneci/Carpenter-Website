const gallery = document.getElementById('gallery');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
    const cardWidth = gallery.querySelector('.gallery-card').offsetWidth + 20;
    gallery.scrollLeft += cardWidth;
});

prevBtn.addEventListener('click', () => {
    const cardWidth = gallery.querySelector('.gallery-card').offsetWidth + 20;
    gallery.scrollLeft -= cardWidth;
});