<template>
  <section id="sports-book">
    <div class="section-container">
      <h1 class="title">Sportsbook</h1>
      <p class="description">
        LM cooperates with major blockchain oracle service providers such as
        LINK to launch the world's largest decentralized Sports Betting game
        project. It covers full range of the international events and sports
        that you may think of, including football, NFL and even esports. It also
        covers virtual sports such as virtual horse racing and soccer.
      </p>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.section-container {
  padding-top: 33px;
  padding-bottom: 30px;
  background: url("../../assets/images/sportsbook-background.png");
  background-size: cover;
  background-position: center;
  /* background: #0B0D32; */
}

.title {
  margin-bottom: 424px;
}

.description {
  margin-bottom: 40px;
  padding: 0 121px;
}

@media only screen and (max-width: 1080px) {
  .description {
    padding: 0 0.7rem;
  }
}
</style>
