<template>
  <section id="team">
    <div class="section-container">
      <h1 class="title">{{ $t("TeamIntroduction") }}</h1>
      <p class="description">
        {{ $t("team1") }}<br/>
        {{ $t("team2") }}<br/>
        {{ $t("team3") }}<br/>
        {{ $t("team4") }}<br/>
        {{ $t("team5") }}
      </p>
      <div class="team-list">
        <div class="team-item">
          <img class="left" src="@/assets/images/team_icon_1.png" alt="" />
          <div class="right">
            {{ $t("DheerajShukla1") }}<br/>
            {{ $t("DheerajShukla2") }}<br/>
            {{ $t("DheerajShukla3") }}<br/>
            {{ $t("DheerajShukla4") }}<br/>
            {{ $t("DheerajShukla5") }}<br/>
            {{ $t("DheerajShukla6") }}
          </div>
        </div>
        <div class="team-item">
          <img class="left" src="@/assets/images/team_icon_2.png" alt="" />
          <div class="right">
            {{ $t("NeonFitzgerald1") }}<br/>
            {{ $t("NeonFitzgerald2") }}<br/>
            {{ $t("NeonFitzgerald3") }}<br/>
            {{ $t("NeonFitzgerald4") }}<br/>
            {{ $t("NeonFitzgerald5") }}<br/>
            {{ $t("NeonFitzgerald6") }}<br/>
            {{ $t("NeonFitzgerald7") }}<br/>
            {{ $t("NeonFitzgerald8") }}<br/>
            {{ $t("NeonFitzgerald9") }}
          </div>
        </div>
        <div class="team-item">
          <img class="left" src="@/assets/images/team_icon_3.png" alt="" />
          <div class="right">
            {{ $t("ClaudiaLEE1") }}<br/>
            {{ $t("ClaudiaLEE2") }}<br/>
            {{ $t("ClaudiaLEE3") }}<br/>
            {{ $t("ClaudiaLEE4") }}<br/>
            {{ $t("ClaudiaLEE5") }}<br/>
            {{ $t("ClaudiaLEE6") }}<br/>
            {{ $t("ClaudiaLEE7") }}<br/>
            {{ $t("ClaudiaLEE8") }}<br/>
            {{ $t("ClaudiaLEE9") }}
          </div>
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
  padding-bottom: 100px;
  background: url("../../assets/images/team_background.png");
  background-size: cover;
  background-position: bottom;
}

.title {
  margin-bottom: 30px;
}

.description {
  margin-bottom: 40px;
  padding: 0 121px;
}

#team .team-list {
  width: 70%;
  margin: 0 auto;
}

#team .team-list .team-item {
  width: 100%;
  height: 307px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

#team .team-list .team-item .left {
  width: 222px;
  margin-right: 61px;
}

#team .team-list .team-item .right {
  flex: 1;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #fff;
  height: 100%;
  display: flex;
}

@media only screen and (max-width: 1080px) {
  .description {
    padding: 0 0.7rem;
  }

  #team .team-list .team-item .right {
    font-size: 16px;
    line-height: 24px;
  }
}

@media only screen and (max-width: 900px) {
#team .team-list .team-item .right {
  font-size: 16px;
  line-height: 18px;
}

}

@media only screen and (max-width: 767px) {
#team .team-list .team-item .right {
  font-size: 14px;
  line-height: 18px;
}

}

@media only screen and (max-width: 670px) {
#team .team-list .team-item .right {
  font-size: 14px;
  line-height: 18px;
}
#team .team-list .team-item {
  display: flex;
  flex-direction: column;
  height: auto;
}

#team .team-list .team-item .left {
  width: 120px;
  margin-bottom: 20px;
  margin-right: 0;
}


}

</style>
