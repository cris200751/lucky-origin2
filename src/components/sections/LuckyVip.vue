<template>
  <section id="vips">
    <div class="section-container">
      <h1 class="title">LuckyMeta {{$t('vip')}} (LMV)</h1>
      <p class="description">
        {{ $t("vipcontent1") }}<br/>
        {{ $t("vipcontent2") }}<br/>
        {{ $t("vipcontent3") }}
      </p>
      <div class="vips-list">
        <div class="vips-item">
          <img class="img" src="@/assets/images/luckyvips_icon_1.png" alt="">
          <span class="text">{{ $t("MembershipBenefits") }}</span>
        </div>
        <div class="vips-item">
          <img class="img" src="@/assets/images/luckyvips_icon_2.png" alt="">
          <span class="text">{{ $t("MintRedeem") }}</span>
        </div>
        <div class="vips-item">
          <img class="img" src="@/assets/images/luckyvips_icon_3.png" alt="">
          <span class="text">{{ $t("InvitationRebates") }}</span>
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
  padding-top: 33px;
  padding-bottom: 70px;
  background: url("../../assets/images/luckyvips_background.png");
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

#vips .vips-list {
  width: 100%;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

#vips .vips-list .vips-item {
  width: calc((100% - 100px) / 3);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin-right: 50px;
  margin-bottom: 50px;
}

#vips .vips-list .vips-item:nth-child(3n) {
  margin-right: 0;
}

#vips .vips-list .vips-item:last-child {
  margin-right: 0;
}

#vips .vips-list .vips-item .img {
  width: 90px;
  height: 90px;
  margin: 0 auto;
}

#vips .vips-list .vips-item .text {
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@media only screen and (max-width: 1080px) {
  .description {
    padding: 0 0.7rem;
  }
}

@media only screen and (max-width: 767px) { 
 #vips .vips-list .vips-item {
   width: calc(100% / 3);
   margin-right: 0;
 }
}

@media only screen and (max-width: 670px) {
  #vips .vips-list .vips-item .text {
    font-size: 16px;
  }
}


@media only screen and (max-width: 480px) {
  #vips .vips-list .vips-item .text {
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

</style>
