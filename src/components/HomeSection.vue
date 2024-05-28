<template>
  <section id="home" class="section">
    <div class="container">
      <div class="text-container">
        <h1>Managed Talent for your needs</h1>
        <p>
          Inkrut provides world-class managed talent for your business needs. We
          deliver unparalleled quality at breakneck speed and a fraction of the
          cost. Get in touch to transform your business today!
        </p>
        <div v-if="!formSubmitted" class="form-group">
          <input
            type="email"
            class="form-control my-3 text-center"
            :class="{ 'is-invalid': isInvalid }"
            placeholder="Enter your email"
            v-model="email"
          />
          <button class="btn btn-primary" @click="handleSubmit">Contact</button>
          <div v-if="isInvalid" class="error-message">Invalid email</div>
        </div>
        <div v-else>
          <p class="success-message">
            Hang tight, someone will be in touch with you soon!
          </p>
        </div>
      </div>
      <div class="clients-heading">
        <h5>Join our clients today!</h5>
      </div>
      <div class="clients">
        <div
          v-for="(client, index) in clients"
          :key="client.id"
          class="client-logo"
          :style="{ animationDelay: `${index * 0.5}s` }"
        >
          <img :src="client.logo" :alt="client.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import confetti from "canvas-confetti";
import axios from "axios";
export default {
  name: "HomeSection",
  data() {
    return {
      email: "",
      formSubmitted: false,
      isInvalid: false,
      clients: [
        { id: 1, name: "Client 1", logo: require("@/assets/client1.png") },
        { id: 2, name: "Client 2", logo: require("@/assets/client2.png") },
        { id: 3, name: "Client 3", logo: require("@/assets/client3.png") },
        { id: 4, name: "Client 4", logo: require("@/assets/client4.png") },
        { id: 5, name: "Client 5", logo: require("@/assets/client5.png") },
        { id: 6, name: "Client 6", logo: require("@/assets/client6.png") },
      ],
    };
  },
  computed: {
    emailValid() {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(this.email);
    },
  },
  methods: {
    handleSubmit() {
      if (!this.emailValid) {
        this.isInvalid = true;
      } else {
        this.isInvalid = false;
        this.formSubmitted = true;
        this.showConfetti();

        // Send email to backend server
        axios
          .post("http://18.144.136.180:5000/submit-email", { email: this.email })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Error submitting email:", error);
          });

        // Clear email field after submission
        this.email = "";
      }
    },
    showConfetti() {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    },
  },
  mounted() {
    // if (localStorage.getItem("formSubmitted") === "true") {
    //   this.formSubmitted = true;
    // }
  },
  watch: {
    email() {
      this.isInvalid = false; // Reset invalid state when user types
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
  padding: 20px;
  background-color: var(--light-color);

@media (min-width: 300px) and (max-width: 380px) {
  padding-top: 25vh !important; /* Ensure this rule is applied */
}
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px; /* Adjust as needed */
  margin: 0 auto; /* Center the container horizontally */
}

.text-container {
  text-align: center;
  margin-bottom: 2rem; /* Adjust spacing between text and clients */
  margin-top: 3rem; /* Default margin on top */

  /* Media query for phones (max-width: 767px) */
  @media (max-width: 767px) {
    margin-top: 15vh; /* Adjusted margin-top for phones */
    margin-bottom: 0.5rem;
  }
}
.form-group {
  max-width: 400px;
  margin: 0 auto;
}

.form-control {
  width: 100%;
  text-align: center;
}

.is-invalid {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 1rem;
}

.clients-heading {
  text-align: center;
  margin-top: 4rem; /* Default margin-top */

  /* Media query for phones (max-width: 767px) */
  @media (max-width: 767px) {
    margin-top: 1rem; /* Adjusted margin-top for phones */
  }
}

.clients {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem; /* Adjust as needed */
}

.client-logo {
  margin: 0.5rem;
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.client-logo img {
  max-width: 100px;
  max-height: 100px;
  width: 100%; /* Ensure the logo scales to fit the container */
  height: auto; /* Maintain aspect ratio */
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.success-message {
  font-size: 1.5rem;
  color: var(--success-color);
}
</style>

