<template>
  <section id="social-media">
    <div class="section-container">
      <h1 class="title">Social Media</h1>
      <ul class="list-social-network">
        <li
          @click="jumpclick('https://twitter.com/LuckyMetaverse')"
          class="social-network"
        >
          <img class="color" src="@/assets/images/twitter-1.png" />
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
          @click="jumpclick('https://www.instagram.com/luckymeta_office/')"
          class="social-network"
        >
          <img class="color" src="@/assets/images/instagram-1.png" />
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
  padding-top: 255px;
  padding-bottom: 245px;
  background: url("../../assets/images/social-media-background.png");
  background-size: cover;
  background-position: center;
  /* background: #0B0D32; */
}

.title {
  margin-bottom: 20px;
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
  width: 52%;
  margin: auto;
}

.social-network {
  text-align: center;
}

.social-network img {
  width: 80%;
  height: auto;
}

@media only screen and (max-width: 1080px) {
  .title {
    font-size: 0.4rem
  }
  .section-container {
    padding-top: 1.55rem;
    padding-bottom: 1.45rem;
  }
}
</style>
