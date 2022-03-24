<template>
  <section id="tokenomics">
    <div class="section-container">
      <h1 class="title">{{$t('Tokenomics')}}</h1>
      <img class="tokenomics-img" src="@/assets/images/tokenomics4.png" />
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.section-container {
  padding-top: 40px;
  background: url("../../assets/images/background-4.jpg");
  background-size: 400%;
  /* background: #0B0D32; */
}

.title {
  margin-bottom: 30px;
}

.tokenomics-img {
  margin-left: 10%;
  width: 80%;
  height: auto;
  margin-bottom: 40px;
}
</style>