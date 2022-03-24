<template>
  <section id="introduce">
    <div class="section-container">
      <h1 class="title">{{$t('Introducing')}} Lucky Meta</h1>
      <div class="video-mask">
        <a ref="video-link" href="#" @click.prevent="handleVideo">
          <div class="video-mask-inner-wrapper">
            <img
              width="110"
              height="110"
              src="@/assets/images/Play-button.png"
            />
          </div>
        </a>
      </div>
      <video ref="video" class="video" controls>
        <!-- <source src="@/assets/videos/Keynote.mp4" type="video/mp4" /> -->
        Your browser does not support the video tag.
      </video>
      <!-- <iframe
        ref="video"
        class="video"
        width="1120"
        height="630"
        src="https://www.youtube.com/embed/bK--CfU5yfo?autoplay=1&mute=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> -->
      <p class="description">
        <!-- LUCKY METAS ARE FIERCE CREATURES THAT LOVE TO BATTLE, BUILD, AND HUNT
        FOR TREASURE! BUILD UP A COLLECTION AND USE THEM ACROSS AN EVER
        EXPANDING UNIVERSE OF GAMES! -->
        {{$t('info1') + $t('info2')}}
      </p>
    </div>
    <!-- <div class="pink-frame"></div>
    <div class="cyan-frame"></div> -->
  </section>
</template>
<script>
export default {
  methods: {
    handleVideo() {
      this.$refs["video-link"].style.display = "none";
      this.$refs.video.style.display = "block";
      this.$refs.video.play();
    },
  },
};
</script>
<style scoped>
section {
  position: relative;
}

.section-container {
  padding-top: 33px;
  padding-bottom: 77px;
  background: url("../../assets/images/background-1.jpg");
  background-size: cover;
  /* background: #0b0d32; */
}

.title {
  margin-bottom: 30px;
}

.description {
  padding: 0 144px;
  margin-top: 30px;
  text-transform: uppercase;
}

@media only screen and (max-width: 1080px) {
  .description {
    padding: 0 0.7rem;
  }
}

.video-mask {
  padding: 0 160px;
}

.video-mask-inner-wrapper {
  background: #51515180 url("../../assets/images/man.png");
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 20px;
  height: 346px;
  padding: 10px;
  display: flex;
  position: relative;
  z-index: 0;
  align-items: center;
  justify-content: center;
}
.video-mask-inner-wrapper:before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  padding: 5px;
  border-radius: 15px;
  background: linear-gradient(
    140.24deg,
    #fe53bb 15.06%,
    rgba(158, 149, 196, 0) 45.93%,
    rgba(106, 185, 202, 0) 60.84%,
    #09fbd3 86.66%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.video {
  width: 760px;
  height: 366px;
  display: none;
  margin: auto;
}

@media only screen and (max-width: 1080px) {
  .video-mask {
    padding: 0 0.8rem;
  }

  .video-mask-inner-wrapper {
    height: 46vw;
  }

  .video-mask-inner-wrapper img {
    width: 10vw;
    height: 10vw;
  }

  .video {
    width: 90vw;
    height: 45vw;
  }
}

.pink-frame {
  position: absolute;
  width: 342px;
  height: 742px;
  background: #fe53bb;
  filter: blur(700px);
  top: 696px;
  left: 657px;
}

.cyan-frame {
  position: absolute;
  width: 349px;
  height: 637px;
  background: #09fbd3;
  filter: blur(800px);
  top: 1041px;
  right: 661px;
}
</style>
