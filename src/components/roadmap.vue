<template>
	<div>
		<div class="setting">
			<Publicheader ref="header"></Publicheader>
			<div class="roadmap">
				<ul>
					<li>
						<div class="frame">
							<div class="left">
								<p>20<br>22</p>
								<span>q1</span>
							</div>
							<div class="right">
								<p>{{$t('mapone1')}}</p>
								<p>{{$t('mapone2')}}</p>
								<p>{{$t('mapone3')}}</p>
								<p>{{$t('mapone4')}}</p>
								<p>{{$t('mapone5')}}</p>
								<p>{{$t('mapone6')}}</p>
							</div>
						</div>
						<img class="pc" src="../../static/images/1r.png" />
						<img class="app" src="../../static/images/appr.png" />
					</li>
					<li>
						<div class="frame">
							<div class="left">
								<p>20<br>22</p>
								<span>q2</span>
							</div>
							<div class="right">
								<p>{{$t('maptwo1')}}</p>
								<p>{{$t('maptwo2')}}</p>
								<p>{{$t('maptwo3')}}</p>
								<p>{{$t('maptwo4')}}</p>
								<p>{{$t('maptwo5')}}</p>
							</div>
						</div>
						<img class="pc" src="../../static/images/2r.png" />
						<img class="app" src="../../static/images/appr.png" />
					</li>
					<li>
						<div class="frame">
							<div class="left">
								<p>20<br>22</p>
								<span>q3</span>
							</div>
							<div class="right">
								<p>{{$t('mapthree1')}}</p>
								<p>{{$t('mapthree2')}}</p>
								<p>{{$t('mapthree3')}}</p>
								<p>{{$t('mapthree4')}}</p>
								<p>{{$t('mapthree5')}}</p>
								<p>{{$t('mapthree6')}}</p>
							</div>
						</div>
						<img class="pc" src="../../static/images/3r.png" />
						<img class="app" src="../../static/images/appr.png" />
					</li>
					<li>
						<div class="frame">
							<div class="left">
								<p>20<br>22</p>
								<span>q4</span>
							</div>
							<div class="right">
								<p>{{$t('mapfour1')}}</p>
								<p>{{$t('mapfour2')}}</p>
								<p>{{$t('mapfour3')}}</p>
								<p>{{$t('mapfour4')}}</p>
								<p>{{$t('mapfour5')}}</p>
							</div>
						</div>
						<img class="pc" src="../../static/images/4r.png" />
						<img class="app" src="../../static/images/appr.png" />
					</li>
					<li>
						<div class="frame">
							<div class="left">
								<p>20<br>23</p>
							</div>
							<div class="right">
								<p>{{$t('mapfive1')}}</p>
								<p>{{$t('mapfive2')}}</p>
								<p>{{$t('mapfive3')}}</p>
								<p>{{$t('mapfive4')}}</p>
								<p>{{$t('mapfive5')}}</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<Publicfooter></Publicfooter>
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
			return {
			}
		},
		mounted() {
		},
		created() {},
		methods: {

		},
	}
</script>

<style scoped>
	.setting {
		background-color: #000000;
		background-image: url(../../static/images/backgroundr.png);
		background-repeat: no-repeat;
		background-size: 1080px 100%;
	}
	
	.roadmap ul {
		width: 870px;
		margin: 0 auto;
		margin-top: 128px;
		padding-bottom: 156px;
	}
	
	.roadmap ul li {
		display: flex;
		align-items: flex-start;
	}
	
	.roadmap ul li:nth-child(2n) {
		flex-flow: row-reverse;
	}
	
	.roadmap ul li .frame {
		width: 460px;
		border-radius: 64px;
		background: rgba(0, 0, 0, .6);
		border: 1px solid #F24EF2;
		display: flex;
	}
	
	.roadmap ul li .frame .left {
		margin-top: 38px;
		margin-left: 22px;
		margin-bottom: 32px;
	}
	
	.roadmap ul li .frame .left p {
		font-size: 24px;
		color: #41FFFD;
		margin-bottom: 15px;
		text-align: center;
	}
	
	.roadmap ul li .frame .left span {
		font-size: 24px;
		color: #E150FC;
		text-transform: uppercase;
		text-align: center;
	}
	
	.roadmap ul li .frame .right {
		margin-top: 38px;
		margin-right: 62px;
		margin-bottom: 32px;
		margin-left: 20px;
	}
	
	.roadmap ul li .frame .right p {
		color: #FFFFFF;
		font-size: 11px;
		line-height: 18.49px;
		margin-bottom: 10px;
	}
	
	.roadmap ul li .frame .right p:last-child {
		margin-bottom: 0;
	}
	
	.roadmap ul li .app {
		display: none;
	}
	
	.roadmap ul li .pc {
		display: block;
	}
	
	.roadmap ul li:nth-child(1)>.pc {
		margin-top: 202px;
	}
	
	.roadmap ul li:nth-child(2)>.pc {
		margin-top: 131px;
	}
	
	.roadmap ul li:nth-child(3)>.pc {
		margin-top: 147px;
	}
	
	.roadmap ul li:nth-child(4)>.pc {
		margin-top: 128px;
	}
	
	@media only screen and (max-width: 767px) {
		.setting {
			background-image: url(../../static/images/backgroundm.png);
			background-size: 100%;
		}
		.roadmap ul {
			width: auto;
			margin: .6rem .6rem 0 .6rem;
			padding-bottom: .6rem;
		}
		.roadmap ul li {
			display: block;
		}
		.roadmap ul li .frame {
			width: 100%;
			border-radius: .64rem;
		}
		.roadmap ul li .frame .left {
			margin-top: .38rem;
			margin-left: .4rem;
			margin-bottom: .36rem;
		}
		.roadmap ul li .frame .left p {
			margin-bottom: .15rem;
			font-size: .24rem;
			line-height: unset;
		}
		.roadmap ul li .frame .left span {
			font-size: .24rem;
		}
		.roadmap ul li .frame .right {
			margin-top: .38rem;
			margin-left: .24rem;
			margin-bottom: .36rem;
			margin-right: .45rem;
		}
		.roadmap ul li .frame .right p {
			font-size: .14rem;
			line-height: unset;
			margin-bottom: .2rem;
		}
		.roadmap ul li .app {
			display: block;
			margin: 0 auto;
		}
		.roadmap ul li .pc {
			display: none;
		}
	}
</style>