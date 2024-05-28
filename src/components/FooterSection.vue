<template>
  <footer class="footer-section">
    <div class="footer-content">
      <div class="footer-icons">
        <a
          href="https://www.linkedin.com/company/inkrut/"
          class="footer-icon-link"
        >
          <!-- Replace with your LinkedIn icon -->
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="tel:+1234567890" class="footer-icon-link">
          <!-- Replace with your phone icon -->
          <i class="fas fa-phone"></i>
        </a>
        <a href="https://wa.me/1234567890" class="footer-icon-link">
          <!-- Replace with your WhatsApp icon -->
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
      <div class="copyright">
        Inkrut <span>&copy;</span> Copyright 2024. All rights reserved
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
.footer-section {
  background-color: #434343;
  color: white;
  padding: 20px 0;
  text-align: center;
}

.footer-icons {
  margin-bottom: 10px;
}

.footer-icon-link {
  color: white;
  font-size: 24px;
  margin: 0 10px;
  transition: color 0.3s;
}

.footer-icon-link:hover {
  color: #ff5757;
}

.copyright {
  font-size: 0.875rem;
}
</style>
