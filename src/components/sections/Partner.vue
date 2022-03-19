<template>
  <section id="partner">
    <div class="section-container">
       <h1 class="title">Partner</h1>
      <ul class="list-partner">
        <li class="partner-item">
          <img class="color" src="@/assets/images/Mastercard.png" />
          <p>MasterCard</p>
        </li>
        <li class="partner-item">
          <img class="color" src="@/assets/images/Visa.png" />
          <p>Visa</p>
        </li>
        <li class="partner-item">
          <img class="color" src="@/assets/images/Polis.png" />
          <p>Polis</p>
        </li>
        <li class="partner-item">
          <img class="color" src="@/assets/images/ETH.png" />
          <p>ETH</p>
        </li>
        <li class="partner-item">
          <img class="color" src="@/assets/images/BTC.png" />
          <p>BTC</p>
        </li>
        <li class="partner-item">
          <img class="color" src="@/assets/images/USDT.png" />
          <p>USDT</p>
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
  padding: 47.5px 0 29.5px;
  color: #ffffff;
  text-align: center;
  font-size: 19.57px;
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
  width: 100%;
  margin: auto;
}

.partner-item {
  text-align: center;
  width: calc(100%/6);
}

.partner-item img {
  width: 50%;
  height: auto;
}

.partner-item p {
    font-size: 16px;
    margin-top: 8px;
}
</style>
