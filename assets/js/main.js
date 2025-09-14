(function() {
  "use strict";

  document.addEventListener('DOMContentLoaded', () => {

    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader) return;
      if (!selectHeader.classList.contains('scroll-up-sticky') && 
          !selectHeader.classList.contains('sticky-top') && 
          !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggleBtn) {
      function mobileNavToogle() {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.classList.toggle('bi-list');
        mobileNavToggleBtn.classList.toggle('bi-x');
      }
      mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
    }

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active') && mobileNavToggleBtn) {
          mobileNavToggleBtn.click(); // toggle mobile nav off
        }
      });
    });

    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        if (this.parentNode.nextElementSibling) {
          this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        }
        e.stopImmediatePropagation();
      });
    });

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => preloader.remove());
    }

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector('.scroll-top');
    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    }
    if (scrollTop) {
      scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    /**
     * Animate on scroll (AOS)
     */
    function aosInit() {
      if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
      }
    }
    window.addEventListener('load', aosInit);

    /**
     * Animate skills progress bars
     */
    let skillsAnimation = document.querySelectorAll('.skills-animation');
    skillsAnimation.forEach((item) => {
      if (typeof Waypoint !== 'undefined') {
        new Waypoint({
          element: item,
          offset: '80%',
          handler: function() {
            let progress = item.querySelectorAll('.progress .progress-bar');
            progress.forEach(el => el.style.width = el.getAttribute('aria-valuenow') + '%');
          }
        });
      }
    });

    /**
     * Initiate Pure Counter
     */
    if (typeof PureCounter !== 'undefined') new PureCounter();

    /**
     * Init swiper sliders
     */
    function initSwiper() {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let configEl = swiperElement.querySelector(".swiper-config");
        if (!configEl) return;
        let config = JSON.parse(configEl.innerHTML.trim());

        if (swiperElement.classList.contains("swiper-tab")) {
          if (typeof initSwiperWithCustomPagination === 'function') {
            initSwiperWithCustomPagination(swiperElement, config);
          }
        } else if (typeof Swiper !== 'undefined') {
          new Swiper(swiperElement, config);
        }
      });
    }
    window.addEventListener("load", initSwiper);

    /**
     * Initiate glightbox
     */
    if (typeof GLightbox !== 'undefined') {
      GLightbox({ selector: '.glightbox' });
    }

    /**
     * Init isotope layout and filters
     */
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
      if (!isotopeItem) return;
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope;
      let container = isotopeItem.querySelector('.isotope-container');
      if (!container) return;

      if (typeof imagesLoaded !== 'undefined') {
        imagesLoaded(container, function() {
          if (typeof Isotope !== 'undefined') {
            initIsotope = new Isotope(container, { itemSelector: '.isotope-item', layoutMode: layout, filter: filter, sortBy: sort });
          }
        });
      }

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
        filters.addEventListener('click', function() {
          let active = isotopeItem.querySelector('.isotope-filters .filter-active');
          if (active) active.classList.remove('filter-active');
          this.classList.add('filter-active');
          if (initIsotope) initIsotope.arrange({ filter: this.getAttribute('data-filter') });
          if (typeof aosInit === 'function') aosInit();
        }, false);
      });
    });

    /**
     * Debug: Social links click
     */
    const socialLinks = document.querySelectorAll('.header-social-links a');
    socialLinks.forEach(link => link.addEventListener('click', () => console.log('Social link clicked')));

  }); // end DOMContentLoaded

})();
