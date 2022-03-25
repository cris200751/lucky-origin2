<template>
  <section id="company">
    <div class="section-container">
      <h1 class="title">{{ $t("Company") }}</h1>
      <p class="description">
        <span>{{ $t("company1") }}</span><br/>
        <span>{{ $t("company2") }}</span><br/>
        <span>{{ $t("company3") }}</span>
      </p>
      <div class="company-list">
        <div class="first-row">
          <div class="first-item">
            <img class="img" src="@/assets/images/company_icon_1.png" alt="">
          </div>
          <div class="first-item">
            <img class="img" src="@/assets/images/company_icon_2.png" alt="">
            <span class="text">{{ $t("Foundation") }}</span>
          </div>
          <div class="first-item">
            <img class="img reverse" src="@/assets/images/company_icon_1.png" alt="">
          </div>
        </div>
        <div class="last-row">
          <div class="last-item">
            <img class="img" src="@/assets/images/company_icon_2.png" alt="">
            <span class="text">{{ $t("Technology") }}</span>
          </div>
          <div class="last-item">
            <img class="img" src="@/assets/images/company_icon_2.png" alt="">
            <span class="text">{{ $t("Marketing") }}</span>
          </div>
        </div>
        <div class="desc">
          <!-- LuckyMeta will continue to explore the journey of<br/>
          compliance and governance of DAO. -->
          {{ $t("company4") }}
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
  padding-bottom: 228px;
  background: url("../../assets/images/company_background.png");
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
.description span {
  display: inline-block;
  margin-bottom: 20px;
}

#company .company-list {
  width: 80%;
  margin: 0 auto;
}
#company .first-row,
#company .last-row {
  width: 100%;
}

#company .first-row .img,
#company .last-row .img {
  width: 100%;
}

#company .first-row .img.reverse {
  -moz-transform: scaleX(-1);
  -webkit-transform: scaleX(-1); 
  -o-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: fliph; /*IE*/ 
}

#company .first-row {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 20px;
}

#company .first-row .first-item,
#company .last-row .last-item {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

#company .first-row .first-item .text,
#company .last-row .last-item .text {
  font-weight: 600;
  font-size: 22px;
  white-space: nowrap;
}

#company .last-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.company-list .desc {
  margin-top: 50px;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
}



@media only screen and (max-width: 1080px) {
  .description {
    padding: 0 0.7rem;
  }
}

@media only screen and (max-width: 767px) { 
 #company .last-row .last-item .text,
 #company .first-row .first-item .text,
 .company-list .desc {
   font-size: 16px;
 }

 .section-container {
   padding-bottom: 60px;
 }

}

@media only screen and (max-width: 480px) {
  #company .company-list {
    width: 90%;
  }

  #company .last-row .last-item .text,
  #company .first-row .first-item .text,
  .company-list .desc {
    font-size: 12px;
  }
}

</style>
