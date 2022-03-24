<template>
  <section id="team">
    <div class="section-container">
      <h1 class="title">{{ $t("TeamIntroduction") }}</h1>
      <p class="description">
        {{ $t("team") }}
      </p>
      <div class="team-list">
        <div class="team-item">
          <img class="left" src="@/assets/images/team_icon_1.png" alt="" />
          <div class="right">
            {{ $t("DheerajShukla") }}
          </div>
        </div>
        <div class="team-item">
          <img class="left" src="@/assets/images/team_icon_2.png" alt="" />
          <div class="right">
            {{ $t("NeonFitzgerald") }}
          </div>
        </div>
        <div class="team-item">
          <img class="left" src="@/assets/images/team_icon_3.png" alt="" />
          <div class="right">
            {{ $t("ClaudiaLEE") }}
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
  align-items: end;
}

@media only screen and (max-width: 1080px) {
  .description {
    padding: 0 0.7rem;
  }
}
</style>
