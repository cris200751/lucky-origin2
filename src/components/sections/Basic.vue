<template>
  <section>
    <div class="section-container">
      <h1 class="title">Lucky Meta Basic</h1>
      <p class="description">
        LuckyMeta is a metaverse of NFTs, liquidity mining, PLAY to Earn with
        multiple mechanisms, there are more surprises waiting for you to
        discover
      </p>
      <ul class="list-nft-meta">
        <li class="nft-meta-item">
          <img src="@/assets/images/NFTs.png" />
        </li>
        <li class="nft-meta-item">
          <img src="@/assets/images/Defi.png" />
        </li>
        <li class="nft-meta-item">
          <img src="@/assets/images/Play to earn.png" />
        </li>
      </ul>
      <ul class="list-nft-meta">
        <li class="nft-meta-item" style="width: 195px">
          <p class="nft-meta-item-text">NFTs</p>
        </li>
        <li class="nft-meta-item" style="width: 284px">
          <p class="nft-meta-item-text">Defi</p>
        </li>
        <li class="nft-meta-item" style="width: 388px">
          <p class="nft-meta-item-text">Play to earn</p>
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
  background: url("../../assets/images/background-3.jpg");
  background-size: cover;
  /* background: #0B0D32; */
}

.title {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 30px;
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

.list-nft-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.8);
}

.nft-meta-item:nth-child(1) {
  margin-right: 100px;
}

.nft-meta-item:nth-child(2) {
  margin-right: 50px;
}

.nft-meta-item-text {
  font-weight: 500;
  font-size: 38px;
  line-height: 57px;
  text-align: center;
  letter-spacing: 0.035em;
  text-transform: capitalize;
  font-family: Magistral-Medium;
}
</style>