<template>
  <section id="sports-book">
    <div class="section-container">
      <h1 class="title">{{$t('Sportsbook')}}</h1>
      <!-- <img class="img" src="@/assets/images/home_sports1.png" alt=""> -->
      <p class="description">
        {{$t('SportsbookContent')}}
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

#sports-book .section-container {
  position: relative;
}

#sports-book .section-container .img {
  width: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media only screen and (max-width: 1080px) {
  .description {
    padding: 0 0.7rem;
  }
}

@media only screen and (max-width: 480px) {
  .section-container { 
    padding-top: 33px;
    padding-bottom: 30px;
    background: url("../../assets/images/sportsbook-background-mobile.png");
    background-size: 100% 100%;
    background-position: center;
  }
}
</style>
