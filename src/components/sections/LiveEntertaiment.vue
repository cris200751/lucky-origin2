<template>
  <section id="live-entertaiment">
    <div class="section-container">
      <h1 class="title">Live Entertaiment</h1>
      <img class="live-entertaiment-img" src="@/assets/images/live-entertaiment.png" />
      <p class="description">
        The Live Entertainment hosts exciting games such as Monopoly Live, Deal
        or No Deal, and the Wheel of Fortune. There are also various casino
        games with live dealers, such as baccarat. All these games are
        implemented in the form of smart contracts. Through the leading AR/VR
        and the blockchain computing, we breakthrough the barriers of the
        metaverse entertainment and the real-world entertainment.
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

.live-entertaiment-img {
  width: 60%;
  margin-left: 20%;
  margin-bottom: 30px;
}
</style>
