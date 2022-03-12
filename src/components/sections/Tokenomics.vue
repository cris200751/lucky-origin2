<template>
  <section>
    <div class="section-container">
      <h1 class="title">Tokenomics</h1>
      <img class="tokenomics-img" src="@/assets/images/tokenomics.png" />
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.section-container {
  max-width: 1080px;
  margin: auto;
  padding-top: 40px;
  background: url('../../assets/images/background-4.jpg');
  /* background-size: cover; */
  /* background: #0B0D32; */
}

.title {
  text-align: center;
  margin-bottom: -70px;
  font-size: 42px;
  font-weight: 600;
  font-family: Magistral-Bold;
}

.tokenomics-img {
    align-self: center;
    transform: scale(0.8)
}
</style>