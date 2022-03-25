<template>
  <section>
    <div class="section-container">
      <h1 class="title">Lucky Meta {{$t('Basic')}}</h1>
      <p class="description">
        {{$t('BasicTitle')}}
      </p>
      <div class="list-item-meta-container">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="meta-item">
              <p class="meta-item-number"><img src="@/assets/images/basic_icon_1.png" alt=""></p>
              <div class="meta-item-img-con">
                <img class="meta-item-img" src="@/assets/images/nfts.png" />
              </div>
              <p class="meta-item-description">{{$t('Basic1')}}</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="meta-item">
              <p class="meta-item-number"><img src="@/assets/images/basic_icon_2.png" alt=""></p>
              <div class="meta-item-img-con">
                <img class="meta-item-img" src="@/assets/images/defi.png" />
              </div>
              <p class="meta-item-description">{{$t('Basic2')}}</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="meta-item">
              <p class="meta-item-number"><img src="@/assets/images/basic_icon_3.png" alt=""></p>
              <div class="meta-item-img-con">
                <img class="meta-item-img" src="@/assets/images/p2e.png" />
              </div>
              <p class="meta-item-description">{{$t('Basic3')}}</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="meta-item">
              <p class="meta-item-number"><img src="@/assets/images/basic_icon_4.png" alt=""></p>
              <div class="meta-item-img-con">
                <img class="meta-item-img" src="@/assets/images/dao.png" />
              </div>
              <p class="meta-item-description">{{$t('Basic4')}}</p>
            </div>
          </el-col>
        </el-row>
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
  padding-bottom: 95px;
  background: url("../../assets/images/basic-background.png");
  background-size: cover;
  /* background: #0B0D32; */
}

.title {
  margin-bottom: 30px;
  padding-bottom: 30px;
}

.description {
  margin-bottom: 50px;
  padding: 0 144px;
}

.list-item-meta-container {
  width: 90%;
  margin: auto;
}

.el-row {
  display: flex;
  /* align-items: center; */
  justify-content: center;
}

.meta-item {
  position: relative;
  text-align: center;
  padding: 30px 15px;
  height: 100%;
}
.meta-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  padding: 7px;
  background: url("../../assets/images/basic_background_border.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* background: linear-gradient(
    140.24deg,
    #fe53bb 15.06%,
    rgba(158, 149, 196, 0) 45.93%,
    rgba(106, 185, 202, 0) 60.84%,
    #09fbd3 86.66%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude; */
}

.meta-item-number {
  font-size: 30px;
  font-family: Magistral-Bold;
  margin-bottom: 10px;
}

.meta-item-img-con {
  display: flex;
  height: 70px;
  align-items: center;
  margin-bottom: 20px;
}

.meta-item-img {
  width: 80%;
  margin-left: 10%;
}

.meta-item-description {
  font-size: 19px;
  font-family: Magistral-Medium;
}

@media only screen and (max-width: 1080px) {
  .description {
    padding: 0 0.7rem;
  }
  .meta-item::before {
    padding: 0.05rem;
  }
  .meta-item-number {
    margin-bottom: 0.05rem;
  }
  .meta-item-img-con {
    height: 0.5rem;
    margin-bottom: 0.05rem;
  }
  .meta-item-description {
    font-size: 0.12rem;
  }
}

@media only screen and (max-width: 670px) {
  .el-row {
    flex-direction: column;
  }
  .el-col-6 {
    width: 72%;
    margin: 0 auto;
  }

  .meta-item {
    margin-bottom: 20px;
  }

  .meta-item-img {
    width: 28%;
    margin: auto;
  }

  .meta-item-description {
    margin-top: 20px;
  }

}
</style>