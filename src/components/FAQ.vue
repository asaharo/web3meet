<template>
	<section id="faq" ref="target" :class="{'visible' : visible}" @mousemove="mouseMove" :style="{ '--x': pos_left, '--y': pos_top}">
		<div class="content">
			<h2 class="title">Questions</h2>
			<div id="faq_wrap">
				<Question 
					title="What benefits will I get with Web3Meet DNA NFT?"
					content="With our NFT DNA you will be able to use advanced settings with an improved algorithm and vast filter system in finding right people and groups for your interests. Join closed communities, change geolocation and remain anonymous."
				/>
				<Question 
					title="Will I be able to use Web3Meet app without minting NFT DNA?"
					content="Absolutely! You can also find events around the world and meet people in your area."
				/>
				<Question 
					title="What filter system will be provided for NFT DNA holders?"
					content="It will be possible to filter people and events by NFT DNA image, location, field of activity in web3, interests, language and more. You will need to match your search requirements as well as the people and events you are looking for."
				/>
				<Question 
					title="What networks will Web3Meet support?"
					content="Web3Meet will support all EVM compatible networks used in Metamask wallet. This includes Ethereum, Optimism, Arbitrum, Binance Smart Chain, Avalanche, Fantom, Moonbeam, Polygon, ZkSync and etc."
				/>
			</div>
		</div>
		<Bubble shift="-3" left="-70px" top="40%" size="100px" background="blue"/>
		<Bubble shift="13" left="calc(100% - 65px)" top="calc(100% - 45px)" size="80px" background="blue"/>
	</section>
</template>
<script>
	import Question from '@/components/parts/Question.vue'
	import Bubble from '@/components/parts/Bubble.vue'
	import { useElementVisibility } from '@vueuse/core'
	import { ref } from 'vue'
	export default{
		components: {
			Question,
			Bubble
		},
		setup() {
			const target = ref(null)
			const targetIsVisible = useElementVisibility(target)

			return {
				target,
				targetIsVisible,
			}
		},
		data() {
			return{
				pos_left: 0,
				pos_top: 0,
				visible: false
			}
		},
		methods: {
			mouseMove(event){
				this.pos_left = event.clientX
				this.pos_top = event.clientY
			}
		},
		watch:{
			targetIsVisible: function () {
				if(this.targetIsVisible == true) this.visible = true
			},
		}
	}
</script>