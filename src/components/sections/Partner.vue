<template>
  <section id="partner">
    <div class="section-container">
       <h1 class="title">{{$t('Partner')}}</h1>
      <ul class="list-partner">
        <li class="partner-item">
          <img class="color" src="@/assets/images/BINANCE.png" />
          <p>BINANCE</p>
        </li>
        <li class="partner-item">
          <img class="color" src="@/assets/images/COINMARKETCAP.png" />
          <p>COINMARKETCAP</p>
        </li>
        <li class="partner-item">
          <img class="color" src="@/assets/images/COINGECKO.png" />
          <p>CONINGECKO</p>
        </li>
        <li class="partner-item">
          <img class="color" src="@/assets/images/PLAY2EARN.png" />
          <p>PLAY2EARN</p>
        </li>
        <li class="partner-item">
          <img class="color" src="@/assets/images/POLYGON.png" />
          <p>POLYGON</p>
        </li>
        <li class="partner-item">
          <img class="color" src="@/assets/images/ETH.png" />
          <p>ETH</p>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.title {
  padding: 47.5px 0 60px;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  font-size: 42px;
  font-family: Magistral-Bold;
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

.list-partner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: auto;
}

.partner-item {
  text-align: center;
  width: calc((100% - 100px) / 3);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 50px;
  margin-bottom: 80px;
}

.partner-item:nth-child(3n) {
  margin-right: 0;
}

.partner-item img {
  width: 32%;
  height: auto;
}

.partner-item p {
  font-weight: 500;
  font-size: 22px;
  margin-top: 8px;
}

</style>
