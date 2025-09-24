document.addEventListener('DOMContentLoaded', () => {
    // Mobile nav toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Gallery thumbnail click handler
    document.querySelectorAll('.portfolio-gallery').forEach(gallery => {
        const featuredImage = gallery.querySelector('.featured-image');
        const description = gallery.querySelector('.image-description');

        gallery.addEventListener('click', (event) => {
            const thumb = event.target.closest('.thumbnail');
            if (!thumb) return;

            const newSrc = thumb.getAttribute('data-image');
            const newDesc = thumb.getAttribute('data-description');

            if (featuredImage && newSrc) {
                featuredImage.src = newSrc;
            }

            if (description && newDesc) {
                description.textContent = newDesc;
            }
        });
    });
});
