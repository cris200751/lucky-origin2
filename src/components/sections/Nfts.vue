<template>
  <section id="nfts">
    <div class="section-container">
      <h1 class="title">NFTs</h1>
      <p class="description">
       {{$t('NFTsIntroduce')}}
      </p>
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

.list-nft {
  display: flex;
  justify-content: center;
  margin: auto;
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
