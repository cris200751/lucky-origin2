<template>
  <div class="header">
    <router-link class="launch-app" to="/games">{{ $t("launch") }}</router-link>
    <div class="changeTranslate" @mouseenter="enter" @mouseleave="leave">
      <div><img src="../../../static/images/subway_world-1.png" /></div>
      <div class="change" v-show="translateShow">
        <ul>
          <li v-for="(item,index) in language" @click="translate(item.type,index)" :class="[active == index ? 'active' : '']" :key="index">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="frame">
      <router-link to="/"
        ><img class="logo" src="../../../static/images/Logp.png"
      /></router-link>
      <ul>
        <li :class="$route.path == '/' ? 'active' : ''">
          <router-link to="/">Lucky Meta</router-link>
        </li>
        <li :class="$route.path == '/roadmap' ? 'active' : ''">
          <router-link to="/roadmap">{{ $t("Roadmap") }}</router-link>
        </li>
        <!-- <li :class="$route.path == '/games' ? 'active' : ''">
          <router-link to="/games">Games</router-link>
        </li> -->
        <li>
          <a href="https://luckymeta.gitbook.io/lucky-meta-white-paper/">{{
            $t("wiki")
          }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      translateShow: false,
      language: [
        {
          name: "English",
          type: "en",
        },
        {
          name: "繁體中文",
          type: "tw",
        },
      ],
      active: "",
    };
  },
  created() {
    let lang = localStorage.getItem("language");
    if (lang) {
      for (var i in this.language) {
        if (this.language[i].type == lang) {
          this.active = i;
        }
      }
    } else {
      this.active = 0;
    }
    this.$i18n.locale = lang || "en";
  },
  mounted() {},
  methods: {
    jumpclick(url) {
      window.open(url, "_blank");
    },
    translate(type,index) {
      this.active = index;
      this.translateShow = false

      localStorage.setItem("language", type);
      this.$i18n.locale = type;
    },
    enter() {
      this.translateShow = true;
    },
    leave() {
      this.translateShow = false;
    },
  },
};
</script>

<style scoped>
.header {
  background-image: url(../../../static/images/Headerbackground.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  padding: 10px;
  z-index: 500;
}

/* .list-social-network {
  display: flex;
  margin-left: 33%;
  margin-top: 12px;
  width: fit-content;
  margin: auto;
} */

/* @media only screen and (max-width: 1080px) {
  .list-social-network {
    margin-left: 22%;
  }
} */

/* @media only screen and (max-width: 767px) {
  .list-social-network {
    margin-left: 0;
    width: 100%;
  }
}

.social-network {
  width: calc(100% / 6);
}

.social-network img {
  width: 40px;
  height: 40px;
  margin: 0 20px;
}

img.color {
  display: none;
}

.social-network:hover .no-color {
  display: none;
}

.social-network:hover .color {
  display: block;
} */
.header .launch-app {
  position: absolute;
  font-family: Magistral-Medium;
  font-size: 16.58px;
  text-transform: uppercase;
  color: #00ff22;
  right: 2%;
  bottom: 35%;
}

.header .frame {
  display: flex;
  padding-top: 78.5px;
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

.header .changeTranslate {
  position: absolute;
  font-family: Magistral-Medium;
  font-size: 16.58px;
  text-transform: uppercase;
  color: #00ff22;
  right: 2%;
  bottom: 5%;
}
.header .changeTranslate img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.header .change {
  position: absolute;
  background: gray;
  line-height: 2;
  width: 120px;
  right: calc(100% - 30px);
  text-align: center;
}
.header .change li {
  font-size: 18px;
  cursor: pointer;
  text-transform: initial;
  color: #fff;
}
.header .change li.active {
  color: #c882ff;
}
</style>