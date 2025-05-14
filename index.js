document.addEventListener("DOMContentLoaded", function () {
  // Marquee duplication for large devices
  if (window.innerWidth >= 768) {
    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent && !marqueeContent.classList.contains('duplicated')) {
      marqueeContent.innerHTML += marqueeContent.innerHTML;
      marqueeContent.classList.add('duplicated');
    }
  }
});

function initMobileSwiper() {
  if (window.innerWidth < 768) {
    const cardData = [
      { title: 'Web Development', description: 'Build modern and responsive websites.', image: './images/image5.jpg', link: 'web.html' },
      { title: 'App Development', description: 'Create powerful mobile applications.', image: './images/image2.svg', link: 'app.html' },
      { title: 'UI/UX Design', description: 'Design user-friendly interfaces.', image: './images/image3.svg', link: 'uiux.html' },
      { title: 'Digital Marketing', description: 'Drive Sales Through Digital Ads.', image: './images/digital_marketing.jpg', link: 'digital.html' },
      { title: 'CRM Solutions', description: 'Manage customer relationships effectively.', image: './images/crm_card.jpg', link: 'crm.html' }
    ];

    const wrapper = document.querySelector('.swiper-wrapper');
    if (wrapper) {
      wrapper.innerHTML = ""; // Clear any existing slides
      cardData.forEach(card => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
          <div class="p-4 bg-white rounded shadow text-center">
            <img src="${card.image}" alt="${card.title}" class="mb-3" style="max-height: 150px; width: auto;">
            <h5 class="fw-bold">${card.title}</h5>
            <p class="text-muted">${card.description}</p>
            <a href="${card.link}" class="btn btn-outline-primary btn-sm">Explore</a>
          </div>
        `;
        wrapper.appendChild(slide);
      });

      // Destroy previous Swiper if exists
      if (window.mySwiper && typeof window.mySwiper.destroy === "function") {
        window.mySwiper.destroy(true, true);
      }

      window.mySwiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: 2500, disableOnInteraction: false },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        pagination: { el: '.swiper-pagination', clickable: true }
      });
    }
  }
}

// Initial load
document.addEventListener("DOMContentLoaded", initMobileSwiper);

// Re-initialize on hash change (when navigating back to #services)
window.addEventListener("hashchange", function() {
  if (location.hash === "#services") {
    setTimeout(initMobileSwiper, 100); // slight delay to ensure DOM is ready
  }
});