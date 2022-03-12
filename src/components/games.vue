<template>
	<div>
		<div class="setting">
			<Publicheader ref="header"></Publicheader>
			<div class="more">Coming soon</div>
			<Publicfooter></Publicfooter>
		</div>
	</div>
</template>

<script>
	import Publicfooter from './public/footer'
	import Publicheader from './public/header'
	export default {
		components: {
			Publicfooter,
			Publicheader
		},
		data() {
			return {}
		},
		mounted() {},
		created() {},
		methods: {

		},
	}
</script>

<style scoped="scoped">
	.setting{
		background-size: 100%;
		background-position: top center;
	}
	.more {
		height: 80vh;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #ffffff;
		font-size: 60px;
		text-transform: uppercase;
		font-family: Magistral-Medium;
	}
	@media only screen and (max-width: 767px) {
		.more {
			height: 65vh;
			font-size: .6rem;
		}
	}
</style>