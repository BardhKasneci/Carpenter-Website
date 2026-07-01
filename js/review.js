document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('.slide');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            let currentSlideIndex = 0;

            function updateSlider(nextIndex) {
                slides[currentSlideIndex].classList.remove('active');
                
                currentSlideIndex = (nextIndex + slides.length) % slides.length;
                
                slides[currentSlideIndex].classList.add('active');
            }

            prevBtn.addEventListener('click', () => {
                updateSlider(currentSlideIndex - 1);
            });

            nextBtn.addEventListener('click', () => {
                updateSlider(currentSlideIndex + 1);
            });
        });