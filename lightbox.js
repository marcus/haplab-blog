// Minimal lightbox — click images to view full size
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // Create overlay elements
    const overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Image lightbox');

    const img = document.createElement('img');
    img.id = 'lightbox-img';
    img.alt = '';

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    function openLightbox(src, alt) {
      img.src = src;
      img.alt = alt || '';
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      // Clear src after transition so there's no flicker on next open
      setTimeout(function () { img.src = ''; }, 300);
    }

    // Close on backdrop click (not on image click)
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeLightbox();
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('active')) closeLightbox();
    });

    // Wire up all images in post-content
    function wireImages() {
      const images = document.querySelectorAll('.post-content img, .post-content .lightbox-trigger');
      images.forEach(function (el) {
        el.style.cursor = 'zoom-in';
        el.addEventListener('click', function () {
          openLightbox(el.src, el.alt);
        });
      });
    }

    wireImages();
  });
})();
