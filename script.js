/* ==========================================================================
   Cauchera El Gordo - Interactive JavaScript Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('ri-menu-line');
        icon.classList.toggle('ri-close-line');
      }
    });

    // Close menu when clicking nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('ri-menu-line');
          icon.classList.remove('ri-close-line');
        }
      });
    });
  }

  // 2. Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. WhatsApp Form Handler
  const whatsappForm = document.getElementById('whatsappForm');
  if (whatsappForm) {
    whatsappForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('userName').value.trim();
      const vehicle = document.getElementById('userVehicle').value.trim();
      const service = document.getElementById('userService').value;
      const detail = document.getElementById('userDetail').value.trim();

      const phone = '584225500009'; // Venezuelan WhatsApp international format

      let message = `¡Hola Cauchera El Gordo! 🚗💨\n\n`;
      message += `Mi nombre es: *${name}*\n`;
      message += `Vehículo / Moto: *${vehicle}*\n`;
      message += `Servicio o Caucho solicitado: *${service}*\n`;
      if (detail) {
        message += `Detalles / Medida: ${detail}\n`;
      }
      message += `\nQuisiera consultar precio y disponibilidad. ¡Gracias!`;

      const encodedMessage = encodeURIComponent(message);
      const waUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

      window.open(waUrl, '_blank');
    });
  }

  // 4. Gallery Lightbox Modal
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalImage = document.getElementById('modalImage');
  const modalClose = document.getElementById('modalClose');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && modalImage && modalOverlay) {
        modalImage.src = img.src;
        modalOverlay.classList.add('active');
      }
    });
  });

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  // 5. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close other open accordions
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});
