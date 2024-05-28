<template>
  <section id="about" class="section">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="about-left">
            <h1>Nice to meet you!</h1>
            <p>
              At Inkrut, we are dedicated to delivering unparalleled quality and
              fostering trust in every interaction. We ensure that each project
              we undertake is crafted with meticulous attention and a commitment
              to exceeding expectations.
            </p>
            <p>
              Our journey is defined by the success stories of our valued
              clients. Their success stories inspire us to continue pushing
              boundaries and setting new benchmarks in the industry.
            </p>
            <p>
              So we eagerly anticipate the opportunity to collaborate with you,
              raising the bar further and remarkable results!
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="about-right">
            <i class="fas fa-handshake fa-5x"></i>
            <!-- Adjust the size (fa-5x) as needed -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped>
.section {
  padding: 50px 20px;
  background-color: var(--light-color);
}

.about-left {
  text-align: left;
}

.about-right {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Ensure the handshake icon is centered vertically */
}

.about-right i {
  color: #434343;
}
</style>
