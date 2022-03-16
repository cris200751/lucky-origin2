<template>
  <section id="tokenomics">
    <div class="section-container">
      <h1 class="title">Tokenomics</h1>
      <img class="tokenomics-img" src="@/assets/images/tokenomic-3.png" />
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
  background: url("../../assets/images/background-4.jpg");
  background-size: 400%;
  /* background: #0B0D32; */
}

.title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 42px;
  font-weight: 600;
  font-family: Magistral-Bold;
}

@media only screen and (max-width: 1080px) {
  .title {
    font-size: 0.4rem;
  }
}

.tokenomics-img {
  margin-left: 10%;
  width: 80%;
  height: auto;
  margin-bottom: 40px;
}
</style>