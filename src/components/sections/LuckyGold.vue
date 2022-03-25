<template>
  <section id="gold">
    <div class="section-container">
      <h1 class="title">LuckyMeta {{$t('Gold')}} (LMG)</h1>
      <p class="description">
        {{$t('Goldcontent')}} 
      </p>
      <div class="gold-list">
        <div class="gold-item">
          <img class="img" src="@/assets/images/luckygold_icon_1.png" alt="">
          <span class="text">{{$t('Purchases')}}  <br />{{$t('Upgrades')}}</span>
        </div>
        <div class="gold-item">
          <img class="img" src="@/assets/images/luckygold_icon_2.png" alt="">
          <span class="text">{{$t('Participates')}} <br />{{$t('iGaming')}}</span>
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
  background: url("../../assets/images/luckygold_background.png");
  background-size: cover;
  background-position: bottom;
  /* background: #0B0D32; */
}

.title {
  margin-bottom: 30px;
}

.description {
  margin-bottom: 40px;
  padding: 0 121px;
}

#gold .gold-list {
  width: 100%;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#gold .gold-list .gold-item {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin-right: 70px;
}

#gold .gold-list .gold-item:last-child {
  margin-right: 0;
}

#gold .gold-list .gold-item .img {
  width: 90px;
  height: 90px;
  margin: 0 auto;
}

#gold .gold-list .gold-item .text {
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

@media only screen and (max-width: 440px) { 
  #gold .gold-list .gold-item .text {
    font-size: 14px;
  }
}

</style>
