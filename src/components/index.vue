<template>
  <div class="index">
    <div class="setting">
      <Publicheader></Publicheader>
      <div class="main">
        <div class="list" id="imglist">
          <ul id="indexlist" class="is-visible">
            <li>
              <a href="#sports-book">
                <img
                  class="trans-up delay-10"
                  src="../../static/images/1e.png"
                />
              </a>
              <!--<p>SPORTSBOOK</p>-->
            </li>
            <li>
              <a href="#nfts">
                <img
                  class="trans-up delay-15"
                  src="../../static/images/2e.png"
                />
              </a>
              <!--<p>play to earn</p>-->
            </li>
            <li>
              <a href="#slot-game">
                <img
                  class="trans-up delay-20"
                  src="../../static/images/3e.png"
                />
              </a>
              <!--<p>casino</p>-->
            </li>
          </ul>
          <ul id="indexlist2">
            <li>
              <a href="#live-entertaiment">
                <img
                  class="trans-up delay-05"
                  src="../../static/images/4e.png"
                />
              </a>
              <!--<p>LIVE CASINO</p>-->
            </li>
            <li>
              <a href="#slot-game">
                <img
                  class="trans-up delay-10"
                  src="../../static/images/5ec.png"
                />
              </a>
              <!--<p>slots</p>-->
            </li>
            <li>
              <a href="#social-media">
                <img
                  class="trans-up delay-15"
                  src="../../static/images/6e.png"
                />
              </a>
              <!--<p>social games</p>-->
            </li>
          </ul>
          <div class="backgroundgif is-visible">
            <!--<img class="trans-upthree delay-25" src="../../static/images/chipsanddice.png" />-->
            <!--<img class="trans-uptwo" src="../../static/images/neonroulette.png" />-->
            <img class="trans-uptwo" src="../../static/images/22.gif" />
          </div>
        </div>
        <div class="intoset" id="intoset">
          <!--<div class="intoimg">
						<img class="trans-upfour" src="../../static/images/photoback.jpg" />
					</div>-->

          <div class="info trans-up delay-30">
            <p>{{ $t("info1") }}</p>
            <p>{{ $t("info2") }}</p>
            <p>{{ $t("info3") }}</p>
          </div>
        </div>
        <div class="pingt">
          <img
            class="trans-up delay-20"
            src="../../static/images/zedhorse_red.gif"
          />
          <img
            class="trans-up delay-20"
            src="../../static/images/zedhorse_gold.gif"
          />
          <img class="trans-up delay-20" src="../../static/images/pint.png" />
        </div>
      </div>
    </div>
    <introduce />
    <basic />
    <nfts />
    <slot-game />
    <live-entertaiment />
    <sportsbook />
    <lucky-gold />
    <lucky-token />
    <lucky-vips />
    <tokenomics />
    <company />
    <team />
    <social-media />
    <partner />
    <faq />
    <Publicfooter></Publicfooter>
  </div>
</template>

<script>
import Publicfooter from "./public/footer";
import Publicheader from "./public/header";
import Basic from "./sections/Basic.vue";
import Faq from "./sections/Faq.vue";
import Introduce from "./sections/Introduce.vue";
import LiveEntertaiment from "./sections/LiveEntertaiment.vue";
import Nfts from "./sections/Nfts.vue";
import Partner from "./sections/Partner.vue";
import SlotGame from "./sections/SlotGame.vue";
import SocialMedia from "./sections/SocialMedia.vue";
import Sportsbook from "./sections/Sportsbook.vue";
import Tokenomics from "./sections/Tokenomics.vue";
import LuckyGold from './sections/LuckyGold.vue';
import LuckyToken from './sections/LuckyToken.vue';
import LuckyVips from './sections/LuckyVip.vue';
import Company from './sections/Company.vue';
import Team from './sections/Team.vue';
export default {
  components: {
    Publicfooter,
    Publicheader,
    Nfts,
    Basic,
    Tokenomics,
    Introduce,
    SlotGame,
    LiveEntertaiment,
    Sportsbook,
    SocialMedia,
    Faq,
    Partner,
    LuckyGold,
    LuckyToken,
    LuckyVips,
    Company,
    Team
  },
  data() {
    return {};
  },
  mounted() {
    if (document.body.offsetWidth > 767) {
      window.addEventListener("scroll", this.handleScroll);
    }
    //			if(document.body.offsetWidth > 767) {
    //				window.addEventListener('scroll', this.allScroll)
    //			}
    $(".faq ul li p").click(function () {
      $(this).parent().find("div").toggle();
    });
  },
  created() {},
  methods: {
    allScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop < 600) {
        $(".index").css("transform", "translate3d(0px, 0px, 0px)");
      } else if (scrollTop < 1400) {
        $(".index").css(
          "transform",
          "translate3d(0px, -" + scrollTop + "px, 0px)"
        );
      }
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // var offsetTop = $("#indexlist").offset().top;
      // if (scrollTop > offsetTop) {
      //   $("#indexlist").addClass("is-visible");
      // }
      var offsetTop = document.querySelector("#indexlist2").offsetTop;
      if (scrollTop > offsetTop) {
        $("#indexlist2").addClass("is-visible");
      }
      // var offsetTop = document.querySelector("#imglist").offsetTop;
      // if (scrollTop > offsetTop) {
      //   $("#imglist .backgroundgif").addClass("is-visible");
      // }
      var offsetTop =
        Number(document.querySelector("#intoset").offsetTop) - 100;
      if (scrollTop > offsetTop) {
        $("#intoset").addClass("is-visible");
        $(".pingt").addClass("is-visible");
        $(".setting").addClass("trans-upfour");
      }
    },
  },
};
</script>

<style>
.faq ul li div a {
  color: #ffffff;
  font-size: 12.5px;
  font-family: Magistral-Book;
  text-transform: uppercase;
}
</style>
<style scoped>
.setting {
  background-size: 1080px;
}
.index {
  background: #000000;
  /*position: sticky;
    top: 0px;*/
}
/*.main {
		width: 1080px;
		margin: 0 auto;
	}*/

.main .list {
  position: relative;
  /*background-image: url(../../static/images/22.gif);
		background-repeat: no-repeat;
		background-position: center 421px;
		background-size: 689px;*/
}

.main .list .backgroundgif {
  width: 689px;
  position: absolute;
  top: 421px;
  left: 50%;
  margin-left: -330px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 380px;
}

.main .list .backgroundgif img:nth-child(1) {
  display: block;
  position: absolute;
  /*margin-top: -50px;*/
  z-index: 2;
  width: 689px;
}

.main .list .backgroundgif img:nth-child(2) {
  margin: -300px auto;
  display: block;
  margin-top: -360px;
}

.main .list ul {
  display: flex;
  justify-content: space-around;
}

.main .list ul li {
  width: 33.3%;
  position: relative;
}

.main .list ul li p {
  font-size: 23.72px;
  color: #ffffff;
  text-transform: uppercase;
  font-family: Magistral-Medium;
  position: absolute;
  text-align: center;
  width: 100%;
}

.main .list ul li img {
  display: block;
  margin: 0 auto;
  animation: moveto linear 3s infinite;
}

@keyframes moveto {
  0% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(5px, 0px);
  }
  50% {
    transform: translate(5px, 5px);
  }
  75% {
    transform: translate(0px, 5px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

.main .list ul:nth-child(1) li:nth-child(1) img {
  width: 290px;
  margin-top: 175px;
}

.main .list ul:nth-child(1) li:nth-child(2) img {
  margin-top: 75px;
  width: 335px;
  mix-blend-mode: screen;
}

.main .list ul:nth-child(1) li:nth-child(3) img {
  margin-top: 146px;
  width: 290px;
}

.main .list ul:nth-child(2) li:nth-child(1) img {
  margin-top: 241px;
  width: 290px;
}

.main .list ul:nth-child(2) li:nth-child(2) img {
  width: 290px;
  margin-top: 332px;
  /*margin-top: 292px;*/
  /*mix-blend-mode: screen;*/
}

.main .list ul:nth-child(2) li:nth-child(3) img {
  width: 290px;
  margin-top: 253px;
}

.main .list ul:nth-child(1) li:nth-child(1) p {
  top: 260px;
  margin-top: 241.5px;
  left: -5px;
}

.main .list ul:nth-child(1) li:nth-child(2) p {
  top: 255px;
  margin-top: 106.5px;
}

.main .list ul:nth-child(1) li:nth-child(3) p {
  top: 290px;
  margin-top: 175px;
}

.main .list ul:nth-child(2) li:nth-child(1) p {
  top: 230px;
  margin-top: 316.5px;
}

.main .list ul:nth-child(2) li:nth-child(2) p {
  top: 250px;
  margin-top: 504.5px;
}

.main .list ul:nth-child(2) li:nth-child(3) p {
  top: 190px;
  margin-top: 385px;
}

.main .intoset {
  position: relative;
}

.main .intoset .intoimg {
  position: absolute;
  top: 312px;
  width: 100%;
}

.main .intoset .intoimg img {
  display: block;
  margin: 0 auto;
  padding-left: 48px;
  height: 198px;
  width: 347px;
}

.main .info {
  background-image: url(../../static/images/backgroundinfo.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 806px;
  padding: 80px 0 108px;
  margin: 221px auto 0;
  position: relative;
}

.main .info p {
  margin: 0 106px 26px;
  font-size: 22px;
  font-family: Magistral-Medium;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
}

.main .info p:last-child {
  margin-bottom: 0;
}

.main .pingt {
  position: relative;
  margin: 10px auto 0;
}

.main .pingt img:nth-child(1) {
  width: 298px;
  padding-left: 44px;
  position: relative;
  margin: 0 auto;
  display: block;
  transform: scale(1.5);
  z-index: 2;
}

.main .pingt img:nth-child(2) {
  width: 298px;
  margin: 0 auto;
  margin-top: -200px;
  padding-right: 44px;
  position: relative;
  display: block;
  transform: scale(1.5);
  z-index: 2;
}

.main .pingt img:nth-child(3) {
  width: 800px;
  margin: 0 auto;
  margin-top: -130px;
  display: block;
}

.faq {
  background: #000000;
}

.faq h1 {
  padding: 47.5px 0 29.5px;
  color: #ffffff;
  text-align: center;
  font-size: 19.57px;
  font-family: Magistral-Bold;
}

.faq ul {
  width: 527px;
  margin: 0 auto;
}

.faq ul li {
  padding-bottom: 22px;
}

.faq ul li p {
  color: #c88dff;
  font-size: 15px;
  font-family: Magistral-Bold;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
}

.faq ul li p img {
  width: 16.5px;
  margin-right: 9.5px;
}

.faq ul li div {
  color: #ffffff;
  margin-left: 26.5px;
  display: block;
  margin-top: 8.5px;
  font-size: 12.5px;
  font-family: Magistral-Book;
  text-transform: uppercase;
  display: none;
}

@media only screen and (max-width: 767px) {
  .setting {
    background-size: 100% 100%;
  }
  .main .list {
    /*background-size: 4.96rem;
			background-position: center 3.2rem;*/
  }
  .main .list .backgroundgif {
    width: 4.96rem;
    top: 3.5rem;
    margin-left: -2.33rem;
    height: 2rem;
  }
  .main .list .backgroundgif img:nth-child(1) {
    width: 4.96rem;
    margin-top: 0.1rem;
  }
  .main .list .backgroundgif img:nth-child(2) {
    width: 3rem;
    margin: 0 auto;
  }
  .main .list ul:nth-child(1) li:nth-child(1) img {
    width: 2.12rem;
    margin-top: 1.45rem;
  }
  .main .list ul:nth-child(1) li:nth-child(2) img {
    width: 2.3rem;
    margin-top: 0.75rem;
  }
  .main .list ul:nth-child(1) li:nth-child(3) img {
    width: 1.66rem;
    margin-top: 1.25rem;
  }
  .main .list ul:nth-child(2) li:nth-child(1) img {
    margin-top: 2.13rem;
    width: 1.72rem;
  }
  .main .list ul:nth-child(2) li:nth-child(2) img {
    margin-top: 2.41rem;
    width: 2.19rem;
  }
  .main .list ul:nth-child(2) li:nth-child(3) img {
    margin-top: 2.32rem;
    width: 1.76rem;
  }
  .main .info {
    width: 90%;
    margin: 1.52rem auto 0;
    padding: 0.66rem 0 0.87rem;
  }
  .main .info p {
    margin-left: 0.82rem;
    margin-right: 0.75rem;
    font-size: 0.17rem;
    margin-bottom: 0.2rem;
  }
  .main .pingt {
    margin: 0.39rem auto 0;
  }
  .main .pingt img:nth-child(1) {
    width: 1.75rem;
    padding-left: 0.24rem;
  }
  .main .pingt img:nth-child(2) {
    width: 1.75rem;
    padding-right: 0.24rem;
    margin-top: -1.2rem;
  }
  .main .pingt img:nth-child(3) {
    width: 4.37rem;
    margin-top: -0.7rem;
    /* margin-bottom: 0.86rem; */
  }
  .main .intoset .intoimg {
    display: none;
  }
  .faq h1 {
    padding: 0.38rem 0 0.24rem;
    font-size: 0.24rem;
  }
  .faq ul {
    width: auto;
    margin-left: 0.53rem;
    margin-right: 0.44rem;
  }
  .faq ul li {
    padding-bottom: 0.3rem;
  }
  .faq ul li p {
    font-size: 0.22rem;
  }
  .faq ul li p img {
    width: 0.17rem;
    margin-right: 0.1rem;
  }
  .faq ul li div {
    margin-left: 0.3rem;
    margin-top: 0.02rem;
    font-size: 0.22rem;
  }
}
</style>