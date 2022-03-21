<template>
  <section>
    <div class="section-container">
      <h1 class="title">Lucky Meta Basic</h1>
      <p class="description">
        LuckyMeta is a metaverse of NFTs, liquidity mining, PLAY to Earn with
        multiple mechanisms, there are more surprises waiting for you to
        discover
      </p>
      <div class="list-item-meta-container">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="meta-item">
              <p class="meta-item-number">1</p>
              <div class="meta-item-img-con">
                <img class="meta-item-img" src="@/assets/images/nfts.png" />
              </div>
              <p class="meta-item-description">
                LuckyMeta will launch multiple common NFTs and rare NFTs at the
                same time. Users can upgrade common NFTs by consuming LMG, and
                upgrade rare NFTs by consuming LMT. The upgraded NFT will get
                more rewards.
              </p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="meta-item">
              <p class="meta-item-number">2</p>
              <div class="meta-item-img-con">
                <img class="meta-item-img" src="@/assets/images/defi.png" />
              </div>
              <p class="meta-item-description">
                The full name of DeFi is Decentralized Finance, which is
                "decentralized finance", and users can get more LMG/LMT by
                adding liquidity.
              </p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="meta-item">
              <p class="meta-item-number">3</p>
              <div class="meta-item-img-con">
                <img class="meta-item-img" src="@/assets/images/p2e.png" />
              </div>
              <p class="meta-item-description">
                The igaming metaverse is first and foremost a gaming metaverse
                and the core of the entire metaverse economy is the Play to
                Earn. We earn while we play. LM achieves the Play to Earn from
                the following aspects:
              </p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="meta-item">
              <p class="meta-item-number">4</p>
              <div class="meta-item-img-con">
                <img class="meta-item-img" src="@/assets/images/dao.png" />
              </div>
              <p class="meta-item-description">
                All the major affairs of LM are decided by the Decentralized
                Autonomous Community Organization (DAO) by LMT voting. The
                community plays a major role in leading towards success since
                its establishment.
              </p>
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
  margin-bottom: 60px;
}

.description {
  margin-bottom: 50px;
  padding: 0 144px;
}

@media only screen and (max-width: 1080px) {
  .description {
    padding: 0 0.7rem;
  }
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
  height: 91%;
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
  background: linear-gradient(
    140.24deg,
    #fe53bb 15.06%,
    rgba(158, 149, 196, 0) 45.93%,
    rgba(106, 185, 202, 0) 60.84%,
    #09fbd3 86.66%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
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
  .section-container {
    padding-bottom: 0.9rem
  }

  .title {
    margin-bottom: 0.6rem;
  }

  .description {
    margin-bottom: 0.5rem;
  }

  .meta-item {
    padding: 0.3rem 0.15rem;
  }

  .meta-item::before {
    padding: 0.05rem;
    border-radius: 0.2rem;
  }
  .meta-item-number {
    font-size: 0.2rem;
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
</style>