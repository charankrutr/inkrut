<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/inkrut-logo-bg.png" alt="Logo" class="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a
              class="nav-link"
              href="#home"
              :class="{ active: currentSection === 'home' }"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#services"
              :class="{ active: currentSection === 'services' }"
              >Services</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#about"
              :class="{ active: currentSection === 'about' }"
              >About</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      currentSection: "home",
      isNavbarOpen: false, // Track if the navbar is open for mobile view
    };
  },
  methods: {
    handleScroll() {
      const sections = ["home", "services", "about"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.getBoundingClientRect().top < window.innerHeight / 2
        ) {
          this.currentSection = section;
        }
      }
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>



<style scoped>
.nav-link {
  cursor: pointer;
}

.logo {
  height: 40px; /* Adjust the height as needed */
}

/* Adjust the navbar for mobile view */
@media (max-width: 991.98px) {
  .navbar-collapse {
    position: fixed;
    top: 56px; /* Height of the fixed-top navbar */
    left: 0;
    width: 100%;
    background-color: #fff; /* Background color for the dropdown */
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1); /* Optional: Drop shadow */
    z-index: 1000; /* Ensure it overlaps other content */
    display: none; /* Hide by default */
  }

  .navbar-collapse.show {
    display: block; /* Show when toggled */
  }

  .navbar-nav {
    flex-direction: column;
    text-align: center;
  }

  .navbar-nav .nav-item {
    margin-bottom: 10px;
  }
}
</style>

