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
/*position: relative;*/ 
}
/*html,body,#app{
	height: 100%;
}*/
</style>
