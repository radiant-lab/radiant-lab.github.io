document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});


// Event listener for all thumbnails
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const newImage = this.getAttribute('data-image');
        const newDescription = this.getAttribute('data-description');

        // Update the featured image and description
        document.getElementById('featuredImage' + targetId).src = newImage;
        document.getElementById('imageDescription' + targetId).textContent = newDescription;
    });
});