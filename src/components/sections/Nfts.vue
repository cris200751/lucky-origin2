<template>
  <section id="nfts">
    <div class="section-container">
      <h1 class="title">NFTs</h1>
      <!-- <p class="description">
        YOUR LUCKY NFT WILL APPEAR IN WHATEVER ADDRESS, OR CONNECTED WALLET YOU
        USED TO PURCHASE THE LUCKY. YOU CAN SEE YOUR FRESHLY MINTED NFT CARD
        DIRECTLY ON YOUR OPENSEA.IO ACCOUNT.
      </p> -->
      <ul class="list-nft" style="width: 65%">
        <li class="nft-item">
          <img src="@/assets/images/NFT-1.png" />
          <!-- <p class="nft-name">LMG</p> -->
        </li>
        <li class="nft-item">
          <img src="@/assets/images/NFT-2.png" />
          <!-- <p class="nft-name">LMT</p> -->
        </li>
        <li class="nft-item">
          <img src="@/assets/images/NFT-3.png" />
          <!-- <p class="nft-name">LMV</p> -->
        </li>
      </ul>
      <ul class="list-nft" style="width: 100%">
        <li class="nft-item">
          <img src="@/assets/images/NFT-4.png" />
        </li>
        <li class="nft-item">
          <img src="@/assets/images/NFT-5.png" />
          <!-- <p class="nft-name">LMG</p> -->
        </li>
        <li class="nft-item">
          <img src="@/assets/images/NFT-6.png" />
          <!-- <p class="nft-name">LMT</p> -->
        </li>
        <li class="nft-item">
          <img src="@/assets/images/NFT-7.png" />
          <!-- <p class="nft-name">LMV</p> -->
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
  background-position: center;
  /* background: #0B0D32; */
}

.title {
  text-align: center;
  margin-bottom: 110px;
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
  margin-bottom: 118px;
  padding: 0 144px;
  font-family: Magistral-Medium;
}

@media only screen and (max-width: 1080px) {
  .title {
    font-size: 0.4rem;
  }

  .description {
    font-size: 0.2rem;
    line-height: 0.3rem;
    padding: 0 0.7rem;
  }
}

.list-nft {
  display: flex;
  justify-content: center;
  margin:auto;
  margin-bottom: 40px;
}

.nft-item {
  margin: 0 5%;
}

.nft-item img {
  width: 100%;
  height: auto;
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
