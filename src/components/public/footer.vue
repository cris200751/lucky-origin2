<template>
  <div class="footer">
    <div class="payment">
      <h1>payment gateways</h1>
      <div class="footerimg">
        <div class="left">
          <b>
            <img
              class="nohover"
              src="../../../static/images/2560px-MasterCard_Logo.svg.png"
            />
            <img
              class="hover"
              src="../../../static/images/2560px-MasterCard_Logo.svgyes.png"
            />
          </b>
          <b>
            <img
              class="nohover"
              src="../../../static/images/Visa_Inc._logo.svg.png"
            />
            <img
              class="hover"
              src="../../../static/images/Visa_Inc._logo.svgyes.png"
            />
          </b>
          <b>
            <img class="nohover" src="../../../static/images/pngwing.com.png" />
            <img
              class="hover"
              src="../../../static/images/pngwing.comyes.png"
            />
          </b>
        </div>
        <span></span>
        <div class="right">
          <b>
            <img class="nohover" src="../../../static/images/opengraph.png" />
            <img class="hover" src="../../../static/images/opengraphyes.png" />
          </b>
          <b>
            <img class="nohover" src="../../../static/images/ETH.png" />
            <img class="hover" src="../../../static/images/ETHyes.png" />
          </b>
          <b>
            <img class="nohover" src="../../../static/images/tether.png" />
            <img class="hover" src="../../../static/images/tetheryes.png" />
          </b>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <img src="../../../static/images/Logofooter.png" />
        <p>Copyright © luckymeta 2022</p>
      </div>
      <div class="center">
        <h1>&nbsp;</h1>
        <p>&nbsp; <br />&nbsp; <br />&nbsp;</p>
        <div>
          <span
            ><a
              href="../../../static/images/LuckyMeta.pdf"
              download="LuckyMeta WhitePaper"
              >White Paper</a
            ></span
          >
          <span>terms to use</span>
          <span>privacy policy</span>
        </div>
      </div>
      <div class="right">
        <ul>
          <li
            @click="jumpclick('https://twitter.com/LuckyMetaverse')"
            class="social-network"
          >
            <img class="no-color" src="@/assets/images/twitter-no-color.png" />
            <img class="color" src="@/assets/images/twitter.png" />
          </li>
          <li
            @click="
              jumpclick('https://www.facebook.com/LuckyMeta-102656795685121')
            "
            class="social-network"
          >
            <img class="no-color" src="@/assets/images/facebook-no-color.png" />
            <img class="color" src="@/assets/images/facebook.png" />
          </li>
          <li class="social-network">
            <img
              class="no-color"
              src="@/assets/images/instagram-no-color.png"
            />
            <img class="color" src="@/assets/images/instagram.png" />
          </li>
        </ul>
        <ul>
          <li
            @click="jumpclick('https://discord.gg/UqH7GwwV89')"
            class="social-network"
          >
            <img class="no-color" src="@/assets/images/discord-no-color.png" />
            <img class="color" src="@/assets/images/discord.png" />
          </li>
          <li
            @click="
              jumpclick(
                'https://www.youtube.com/channel/UCl66czQcUxBU-iZ9yYjBclA'
              )
            "
            class="social-network"
          >
            <img class="no-color" src="@/assets/images/youtube-no-color.png" />
            <img class="color" src="@/assets/images/youtube.png" />
          </li>
          <li
            @click="jumpclick('https://t.me/luckymetaverse')"
            class="social-network"
          >
            <img class="no-color" src="@/assets/images/telegram-no-color.png" />
            <img class="color" src="@/assets/images/telegram.png" />
          </li>
        </ul>
        <p>All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    jumpclick(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.footer {
  background: #000000;
  width: 1080px;
  margin: 0 auto;
}

.footer .payment h1 {
  padding: 38px 0 20.5px;
  text-align: center;
  font-size: 19.57px;
  color: #ffffff;
  font-family: Magistral-Bold;
  text-transform: uppercase;
}

.footer .payment .footerimg {
  width: 468px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.footer .payment .footerimg .left {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}

.footer .payment .footerimg .left b:nth-child(1) img:nth-child(1) {
  width: 69.5px;
}

.footer .payment .footerimg .left b:nth-child(1) img:nth-child(2) {
  width: 69.5px;
}

.footer .payment .footerimg .left b:nth-child(2) img:nth-child(1) {
  width: 75.5px;
}

.footer .payment .footerimg .left b:nth-child(2) img:nth-child(2) {
  width: 75.5px;
}

.footer .payment .footerimg .left b:nth-child(3) img:nth-child(1) {
  width: 42px;
}

.footer .payment .footerimg .left b:nth-child(3) img:nth-child(2) {
  width: 42px;
}

.footer .payment .footerimg span {
  width: 2px;
  height: 73px;
  display: block;
  background: #ffffff;
  margin-left: 47.5px;
  margin-right: 45px;
}

.footer .payment .footerimg .right b:nth-child(1) img:nth-child(1) {
  width: 28.5px;
}

.footer .payment .footerimg .right b:nth-child(1) img:nth-child(2) {
  width: 28.5px;
}

.footer .payment .footerimg .right b:nth-child(2) img:nth-child(1) {
  width: 18.5px;
  margin: 0 7px;
}

.footer .payment .footerimg .right b:nth-child(2) img:nth-child(2) {
  width: 18.5px;
  margin: 0 7px;
}

.footer .payment .footerimg .right b:nth-child(3) img:nth-child(1) {
  width: 32.5px;
}

.footer .payment .footerimg .right b:nth-child(3) img:nth-child(2) {
  width: 32.5px;
}

.footer .payment .footerimg b:hover .nohover {
  display: none;
}

.footer .payment .footerimg b:hover .hover {
  display: inline;
}

.footer .bottom {
  margin-top: 50.5px;
  display: flex;
  justify-content: space-around;
  padding-bottom: 115.5px;
}

.footer .bottom .left img {
  width: 118.5px;
  display: block;
  margin: 0 auto;
}

.footer .bottom .left p {
  color: #ffffff;
  margin-top: 38px;
  font-family: Magistral-Book;
  font-size: 10px;
  text-transform: uppercase;
}

.footer .bottom .center h1 {
  color: #ffffff;
  margin-top: 60px;
  font-family: Magistral-Bold;
  font-size: 15.37px;
  text-align: center;
  margin-bottom: 11px;
  text-transform: uppercase;
}

.footer .bottom .center p {
  color: #ffffff;
  text-align: center;
  font-family: Magistral-Book;
  font-size: 10px;
  margin-bottom: 36px;
  text-transform: uppercase;
}

.footer .bottom .center div {
  display: flex;
  font-family: Magistral-Book;
  color: #ffffff;
  font-size: 10px;
  width: 357px;
  justify-content: space-between;
  text-transform: uppercase;
}

.footer .bottom .center a {
  font-family: Magistral-Book;
  color: #ffffff;
  font-size: 10px;
  width: 357px;
  text-transform: uppercase;
}

.footer .bottom .center div span {
  text-decoration: underline;
}

.footer .bottom .right ul {
  width: 114px;
  display: flex;
  justify-content: space-between;
}

.footer .bottom .right ul:nth-child(1) {
  margin-bottom: 10px;
  margin-top: 55px;
}

.footer .bottom .right ul li {
  width: 27.5px;
  height: 27.5px;
}

.footer .bottom .right ul li img {
  width: 100%;
}

.footer .bottom .right ul .color {
	display: none;
}

.footer .bottom .right ul li:hover .no-color {
  display: none;
}

.footer .bottom .right ul li:hover .color {
  display: inline;
}

.footer .bottom .right p {
  color: #ffffff;
  margin-top: 37.5px;
  font-family: Magistral-Book;
  font-size: 10px;
  text-align: center;
  text-transform: uppercase;
}

.footer .hover {
  display: none;
}

@media only screen and (max-width: 767px) {
  .footer {
    margin-top: -1px;
    width: auto;
  }
  .footer .payment h1 {
    padding: 0.2rem 0 0.34rem;
    font-size: 0.18rem;
  }
  .footer .payment .footerimg {
    width: 3.62rem;
  }
  .footer .payment .footerimg .left b:nth-child(1) img:nth-child(1) {
    width: 0.54rem;
  }
  .footer .payment .footerimg .left b:nth-child(1) img:nth-child(2) {
    width: 0.54rem;
  }
  .footer .payment .footerimg .left b:nth-child(2) img:nth-child(1) {
    width: 0.59rem;
  }
  .footer .payment .footerimg .left b:nth-child(2) img:nth-child(2) {
    width: 0.59rem;
  }
  .footer .payment .footerimg .left b:nth-child(3) img:nth-child(1) {
    width: 0.32rem;
  }
  .footer .payment .footerimg .left b:nth-child(3) img:nth-child(2) {
    width: 0.32rem;
  }
  .footer .payment .footerimg span {
    margin-left: 0.37rem;
    margin-right: 0.34rem;
    width: 1.5px;
    height: 0.565rem;
  }
  .footer .payment .footerimg .right b:nth-child(1) img:nth-child(1) {
    width: 0.22rem;
  }
  .footer .payment .footerimg .right b:nth-child(1) img:nth-child(2) {
    width: 0.22rem;
  }
  .footer .payment .footerimg .right b:nth-child(2) img:nth-child(1) {
    width: 0.14rem;
    margin: 0 0.06rem;
  }
  .footer .payment .footerimg .right b:nth-child(2) img:nth-child(2) {
    width: 0.14rem;
    margin: 0 0.06rem;
  }
  .footer .payment .footerimg .right b:nth-child(3) img:nth-child(1) {
    width: 0.25rem;
  }
  .footer .payment .footerimg .right b:nth-child(3) img:nth-child(2) {
    width: 0.25rem;
  }
  .footer .bottom {
    margin-top: 0.93rem;
    padding-bottom: 0.68rem;
  }
  .footer .bottom .left img {
    width: 0.91rem;
  }
  .footer .bottom .left p {
    /*display: none;*/
  }
  .footer .bottom .center h1 {
    font-size: 0.12rem;
    margin-top: 0.08rem;
    margin-bottom: 0.06rem;
  }
  .footer .bottom .center p {
    font-size: 0.12rem;
    margin-bottom: 0.25rem;
    display: none;
  }
  .footer .bottom .center div {
    /*width: 3.17rem;*/
    font-size: 0.12rem;
  }
  .footer .bottom .right ul {
    width: 0.88rem;
  }
  .footer .bottom .right ul:nth-child(1) {
    margin-top: 0;
    margin-bottom: 0.1rem;
  }
  .footer .bottom .right ul li {
    width: 0.21rem;
    height: 0.21rem;
  }
  .footer .bottom .right p {
    margin-top: 0.33rem;
    font-size: 0.12rem;
  }
  .footer .bottom {
    display: block;
  }
  .footer .bottom .left p {
    margin-top: 0.2rem;
    text-align: center;
    font-size: 0.12rem;
  }
  .footer .bottom .center div {
    width: 80%;
    margin: 0 auto;
  }
  .footer .bottom .right {
    margin-top: 0.3rem;
  }
  .footer .bottom .right ul {
    margin: 0 auto;
    margin-bottom: 0.1rem;
  }
}
</style>