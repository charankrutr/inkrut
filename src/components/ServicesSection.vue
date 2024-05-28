<template>
  <section id="services" class="section">
    <div class="container text-center">
      <h1>Varied Service Offerings</h1>
      <div class="icons-container">
        <div
          v-for="(service, index) in services"
          :key="service.name"
          class="icon"
          :class="{ visible: iconsVisible }"
          :style="{ animationDelay: `${index * 0.5}s` }"
        >
          <i :class="service.icon"></i>
        </div>
      </div>
      <p>
        Leverage our exceptional technical competence in
        <span class="service-container">
          <transition name="fade">
            <span v-if="visible" key="service" class="service-highlight">{{
              currentService
            }}</span>
          </transition>
        </span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesSection",
  data() {
    return {
      services: [
        { name: "Web Development", icon: "fas fa-code" },
        { name: "Mobile Apps", icon: "fas fa-mobile-alt" },
        { name: "Cloud Solutions", icon: "fas fa-cloud" },
        { name: "AI & ML", icon: "fas fa-brain" },
        { name: "Blockchain", icon: "fas fa-link" },
        { name: "Cybersecurity", icon: "fas fa-shield-alt" },
      ],
      currentService: "Web Development",
      serviceIndex: 0,
      visible: true,
      iconsVisible: false,
    };
  },
  mounted() {
    this.startServiceRotation();
    this.observeSection();
  },
  methods: {
    startServiceRotation() {
      setInterval(() => {
        this.visible = false;
        setTimeout(() => {
          this.serviceIndex = (this.serviceIndex + 1) % this.services.length;
          this.currentService = this.services[this.serviceIndex].name;
          this.visible = true;
        }, 500); // Duration of the fade-out transition
      }, 1500); // Change service every 3 seconds
    },
    observeSection() {
      const options = {
        root: null,
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.iconsVisible = true;
            observer.unobserve(entry.target);
          }
        });
      }, options);

      observer.observe(this.$el);
    },
  },
};
</script>

<style scoped>
.section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: #f0f0f0;
}

.icons-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem; /* Adjust as needed */
}

.icon {
  margin: 10px;
  opacity: 0;
  transform: translateY(20px);
  font-size: 2rem; /* Adjust the size of the icons */
  transition: opacity 0.5s, transform 0.5s;
  animation: fadeInUp 0.5s forwards;
}

.icon.visible {
  animation-play-state: running;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-container {
  display: inline-block;
  width: 220px; /* Adjust the width based on the longest service string */
  text-align: left; /* Align text to the left */
}

.service-highlight {
  font-size: 1.5em;
  color: #ff5757;
  display: inline-block;
  font-weight: 500;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
