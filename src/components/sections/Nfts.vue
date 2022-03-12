<template>
  <section>
    <div class="section-container">
      <h1 class="title">NFTs</h1>
      <p class="description">
        YOUR LUCKY NFT WILL APPEAR IN WHATEVER ADDRESS, OR CONNECTED WALLET YOU USED TO
        PURCHASE THE LUCKY. YOU CAN SEE YOUR FRESHLY MINTED NFT CARD DIRECTLY ON YOUR
        OPENSEA.IO ACCOUNT.
      </p>
      <ul class="list-nft">
        <li class="nft-item">
          <img src="@/assets/images/LMG.png" />
          <p class="nft-name">LMG</p>
        </li>
        <li class="nft-item">
          <img src="@/assets/images/LMT.png" />
          <p class="nft-name">LMT</p>
        </li>
        <li class="nft-item">
          <img src="@/assets/images/LMV.png" />
          <p class="nft-name">LMV</p>
        </li>
      </ul>
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
  padding-top: 33px;
  padding-bottom: 70px;
  background: url("../../assets/images/background-2.png");
  background-size: cover;
  /* background: #0B0D32; */
}

.title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 42px;
  font-weight: 600;
  font-family: Magistral-Bold;
}

.description {
  font-weight: 600;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0.05em;
  text-align: center;
  margin-bottom: 100px;
  padding: 0 144px;
  font-family: Magistral-Medium;
}

.list-nft {
  display: flex;
  justify-content: center;
}

.nft-item {
  margin: 0 65.5px;
}

.nft-name {
  font-weight: 700;
  font-size: 38px;
  line-height: 63px;
  text-align: center;
  letter-spacing: 0.035em;
  font-family: Magistral-Medium;
}
</style>
