<template>
  <div id="app">
  	<!--<div style="height: 600px;"></div>-->
    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
 font-family: Square;
 color: #fff;
 font-size: 0.75rem;
 font-weight: 400;
 background: #000000;
 overflow-x: hidden;
/*position: relative;*/ 
}

html {
  scroll-behavior: smooth;
}

.section-container {
  max-width: 1080px;
  margin: auto;
}

.title {
  line-height: 63px;
  letter-spacing: 0.035em;
  text-align: center;
  font-size: 42px;
  font-weight: 600;
  font-family: Magistral-Bold;
}

.description {
  font-weight: 600;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0.05em;
  text-align: center;
  font-family: Magistral-Medium;
}

@media only screen and (max-width: 1080px) {
  .title {
    font-size: 0.4rem;
  }

  .description {
    font-size: 0.15rem;
    line-height: 0.3rem;
  }
}
/*html,body,#app{
	height: 100%;
}*/
</style>
