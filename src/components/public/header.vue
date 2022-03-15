<template>
  <div class="header">
    <ul class="list-social-network">
      <li @click="jumpclick('https://twitter.com/LuckyMetaverse')" class="social-network">
        <img src="@/assets/images/twitter.png" />
      </li>
      <li @click="jumpclick('https://www.facebook.com/LuckyMeta-102656795685121')" class="social-network">
        <img src="@/assets/images/facebook.png" />
      </li>
      <li class="social-network">
        <img src="@/assets/images/instagram.png" />
      </li>
      <li @click="jumpclick('https://discord.gg/UqH7GwwV89')" class="social-network">
        <img src="@/assets/images/Descord.png" />
      </li>
      <li @click="jumpclick('https://www.youtube.com/channel/UCl66czQcUxBU-iZ9yYjBclA')" class="social-network">
        <img src="@/assets/images/youtube.png" />
      </li>
    </ul>

    <div class="frame">
      <router-link to="/"
        ><img class="logo" src="../../../static/images/Logp.png"
      /></router-link>
      <ul>
        <li :class="$route.path == '/' ? 'active' : ''">
          <router-link to="/">LuckyMeta</router-link>
        </li>
        <li :class="$route.path == '/roadmap' ? 'active' : ''">
          <router-link to="/roadmap">Roadmap</router-link>
        </li>
        <li :class="$route.path == '/games' ? 'active' : ''">
          <router-link to="/games">Games</router-link>
        </li>
        <li>
          <a href="https://luckymeta.gitbook.io/lucky-meta-white-paper/"
            >Lucky Meta Wiki</a
          >
        </li>
      </ul>
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
.header {
  background-image: url(../../../static/images/Headerbackground.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.list-social-network {
  display: inline-flex;
  margin-left: 44%;
  margin-top: 12px;
}

/* @media only screen and (max-width: 768px) {
  .list-social-network {
      margin-left: 0%;
  }
} */

.social-network img {
  width: 60%;
  height: auto;
  margin: 0 20%;
}

.header .frame {
  display: flex;
  /* padding-top: 78.5px; */
  width: 65%;
  margin: 0 auto;
}

.header .frame .logo {
  width: 85px;
  margin-bottom: 4.5px;
  display: block;
}

.header .frame ul {
  color: #ffffff;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  margin-top: 33px;
  /*margin-left: 44px;
    	margin-right: 24px;*/
  margin-left: 64px;
  margin-right: 64px;
}

.header .frame ul li,
.header .frame ul li a {
  font-family: Magistral-Medium;
  font-size: 16.58px;
  text-transform: uppercase;
  color: #ffffff;
}

.header .frame ul .active a {
  color: #b400d5;
}

.header .frame .lan {
  width: 149.5px;
  position: relative;
}

.header .frame .lan div {
  width: 126.5px;
  border-radius: 5px;
  padding: 38px 11.5px 0;
  margin: 13.5px 0 0;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.header .frame ol {
  position: absolute;
  top: 0;
  left: 0;
  width: 149.5px;
  border-radius: 5px;
  margin-top: 38px;
  padding-bottom: 13.5px;
  background: #26004a;
  border: 1px solid #d500fb;
  /*display: none;*/
}

.header .frame ol li {
  display: flex;
  align-items: center;
  margin: 13.5px 11.5px 0;
  cursor: pointer;
}

.header .frame ol li > img,
.header .frame .lan div > img {
  width: 19px;
}

.header .frame ol li p,
.header .frame .lan div p {
  color: #ffffff;
  font-family: Magistral-Book;
  font-size: 12.5px;
  margin-left: 21.5px;
  flex: 1;
  text-transform: uppercase;
}

.header .frame ol li span img,
.header .frame .lan div span img {
  width: 7px;
  display: block;
}

@media only screen and (max-width: 767px) {
  .header {
    background: #110020;
    border-bottom: 2px solid #d800ff;
  }
  .header .frame {
    padding-top: 0.26rem;
    margin: 0 0.3rem;
    width: auto;
    padding-bottom: 0.17rem;
    align-items: center;
  }
  .header .frame .logo {
    width: 0.62rem;
    margin-bottom: 0;
  }
  .header .frame ul {
    margin-top: 0;
    height: 0.62rem;
    /*margin-left: .5rem;
			margin-right: .3rem;*/
    margin-left: 0.8rem;
    margin-right: 0.8rem;
  }
  .header .frame ul li,
  .header .frame ul li a {
    font-size: 0.14rem;
  }
  .header .frame .lan {
    width: auto;
  }
  .header .frame .lan div {
    padding: 0;
    margin: 0;
    width: auto;
  }
  .header .frame .lan div > img {
    width: 0.28rem;
  }
  .header .frame .lan div p {
    margin-left: 0.1rem;
    font-size: 0.14rem;
  }
}
</style>