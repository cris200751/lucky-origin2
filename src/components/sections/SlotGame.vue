<template>
  <section id="slot-game">
    <div class="section-container">
      <h1 class="title">{{$t("SlotsGame")}}</h1>
      <img class="slot-game-img" src="@/assets/images/slot-game.png" />
      <p class="description">
        {{$t("SlotsAlt")}}
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
  padding-bottom: 70px;
  background: url("../../assets/images/nfts-background.png");
  background-size: cover;
  background-position: center;
  /* background: #0B0D32; */
}

.title {
  margin-bottom: 30px;
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

.slot-game-img {
    width: 80%;
    margin-left: 10%;
    margin-bottom: 30px;
}

</style>
