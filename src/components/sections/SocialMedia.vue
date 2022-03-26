<template>
  <section id="social-media">
    <div class="section-container">
      <h1 class="title">{{$t('SocialMedia')}}</h1>
      <ul class="list-social-network">
        <li
          @click="jumpclick('https://twitter.com/Lucky_Metaverse')"
          class="social-network"
        >
          <img class="color" src="@/assets/images/twitter-1.png" />
        </li>
        <li
          @click="jumpclick('https://www.instagram.com/luckymeta_official')"
          class="social-network"
        >
          <img class="color" src="@/assets/images/instagram-1.png" />
        </li>
        <li
          @click="
            jumpclick('https://www.facebook.com/LuckyMeta-102656795685121')
          "
          class="social-network"
        >
          <img class="color" src="@/assets/images/facebook-1.png" />
        </li>
        <li
          @click="jumpclick('https://discord.gg/UqH7GwwV89')"
          class="social-network"
        >
          <img class="color" src="@/assets/images/discord-1.png" />
        </li>
        <li
          @click="
            jumpclick(
              'https://www.youtube.com/channel/UCl66czQcUxBU-iZ9yYjBclA'
            )
          "
          class="social-network"
        >
          <img class="color" src="@/assets/images/youtube-1.png" />
        </li>
        <li
          @click="jumpclick('https://t.me/luckymetaverse')"
          class="social-network"
        >
          <img class="color" src="@/assets/images/telegram-1.png" />
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    jumpclick(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
<style scoped>
.section-container {
  padding-top: 200px;
  padding-bottom: 245px;
  background: url("../../assets/images/social-media-background.png");
  background-size: cover;
  background-position: center;
  /* background: #0B0D32; */
}

.title {
  margin-bottom: 65px;
  font-size: 40px;
}

.description {
  margin-bottom: 40px;
  padding: 0 121px;
}

@media only screen and (max-width: 1080px) {
  .description {
    padding: 0 0.7rem;
  }
}

.list-social-network {
  display: flex;
  width: 66%;
  margin: auto;
}

.social-network {
  text-align: center;
  margin-right: 28px;
}

.social-network:last-child {
  margin-right: 0;
}

.social-network img {
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 900px) {
  .section-container {
    padding-top: 120px;
    padding-bottom: 120px;
  }

}

@media only screen and (max-width: 670px) {
  .title {
    font-size: 30px;
  }
  
  .section-container {
    padding-top: 130px;
    padding-bottom: 100px;
    background: url("../../assets/images/social-media-background-mobile.png");
    background-size: 100% 100%;
    background-position: center;
  }

  .list-social-network {
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .social-network  {
    width: calc(100% / 2);
    margin-right: 0;
  }

  .social-network img {
    width: 70%;
  }

}
</style>
