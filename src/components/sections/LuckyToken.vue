<template>
  <section id="token">
    <div class="section-container">
      <h1 class="title">LuckyMeta {{ $t("Token") }} (LMT)</h1>
      <p class="description">
        {{ $t("LuckyMetaToken") }}
      </p>
      <div class="token-list">
        <div class="token-item">
          <img class="img" src="@/assets/images/luckytoken_icon_1.png" alt="" />
          <span class="text"
            >{{ $t("Rewards") }} <br />
            {{ $t("Referrals") }}</span
          >
        </div>
        <div class="token-item">
          <img class="img" src="@/assets/images/luckytoken_icon_2.png" alt="" />
          <span class="text"
            >{{ $t("ReceivesPlatform") }} <br />
            {{ $t("RevenueDividends") }}</span
          >
        </div>
        <div class="token-item">
          <img class="img" src="@/assets/images/luckytoken_icon_3.png" alt="" />
          <span class="text"
            >{{ $t("Participates") }} <br />
            {{ $t("LiquidityMining") }}</span
          >
        </div>
        <div class="token-item">
          <img class="img" src="@/assets/images/luckytoken_icon_4.png" alt="" />
          <span class="text"
            >{{ $t("ParticipatesLM") }} <br />
            {{ $t("Organization") }}</span
          >
        </div>
        <div class="token-item">
          <img class="img" src="@/assets/images/luckytoken_icon_5.png" alt="" />
          <span class="text"
            >{{ $t("Purchases") }} <br />
            {{ $t("Upgrades") }}</span
          >
        </div>
        <div class="token-item">
          <img class="img" src="@/assets/images/luckytoken_icon_6.png" alt="" />
          <span class="text"
            >{{ $t("Participates") }} <br />
            {{ $t("iGaming") }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.section-container {
  padding-top: 126px;
  padding-bottom: 70px;
  background: url("../../assets/images/luckytoken_background.png");
  background-size: 100% 100%;
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

#token .token-list {
  padding: 0 60px;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

#token .token-list .token-item {
  width: calc((100% - 100px) / 3);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin-right: 50px;
  margin-bottom: 50px;
}

#token .token-list .token-item:nth-child(3n) {
  margin-right: 0;
}

#token .token-list .token-item:last-child {
  margin-right: 0;
}

#token .token-list .token-item .img {
  width: 90px;
  height: 90px;
  margin: 0 auto;
}

#token .token-list .token-item .text {
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  color: #fff;
}

@media only screen and (max-width: 1080px) {
  .description {
    padding: 0 0.7rem;
  }
}
</style>
