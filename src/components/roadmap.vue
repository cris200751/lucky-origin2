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
								<p>1、Publish the official website and whitepaper with ecosystem, LMT and LMG tokens, roadmap, games and more;</p>
								<p>2、Deploy DAPP in Polygon (or BSC), open the initial issuance of LMT and LMG tokens, and list 6 slot games;</p>
								<p>3、Open Play-to-Earn functions for users in the platform;</p>
								<p>4、Users can obtain income by staking LMT-USD for LP mining;</p>
								<p>5、Users can obtain platform dividends by minting LMV, the member right token ;</p>
								<p>6、Open the NFT Treasure Chests function, users can freely trade the NFT obtained, and obtain continuous income by holding the NFT.</p>
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
								<p>1、List about 30+ games;</p>
								<p>2、Open the invitation reward system and commission system;</p>
								<p>3、Deploy DApps in more mainnets or Layer2 expansion networks;</p>
								<p>4、More assets such as ETH, USDT, etc. will be added to the LuckyMeta platform to attract more players;</p>
								<p>5、The built-in decentralized wallet LuckyWallet will be launched.</p>
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
								<p>1、Build the LuckyMeta XR metaverse scene with a game hall in the digital three-dimensional parallel space;</p>
								<p>2、List the first game in LuckyMeta XR metaverse;</p>
								<p>3、Build LuckyMeta metaverse space in well-known metaverse virtual space (such as: Decentraland, SandBox and other platforms);</p>
								<p>4、Open interface for more games so other game providers can quickly deploy their applications to the LuckyMeta platform;</p>
								<p>5、Open the block booking system;</p>
								<p>6、List more types and numbers of games.</p>
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
								<p>1、List 100+ games;</p>
								<p>2、Open the creation of personal digital avatar of users in LuckyMeta XR metaverse to realize the display and interaction of NFT characters in 3D space;</p>
								<p>3、Complete the construction of mainstream game types in the LuckyMeta XR metaverse;</p>
								<p>4、Realize the adaptation of LuckyMeta metaverse in XR hardware devices (VR or MR glasses);</p>
								<p>5、Complete the self-built Layer2 network to achieve a better gaming experience.</p>
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
								<p>1、Realize the development of all game types in the original metaverse of LuckyMeta XR;</p>
								<p>2、Open social scenes in LuckyMeta XR metaverse, where users can interact with other characters;</p>
								<p>3、Open the game content interface of LuckyMeta XR metaverse for external content providers;</p>
								<p>4、Complete the configuration and support for mainstream native XR hardware devices;</p>
								<p>5、Jointly build the original metaverse of LuckyMeta XR with more partners.</p>
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