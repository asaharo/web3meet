<template>
	<section id="mission" ref="target" :class="{'visible' : visible}" @mousemove="mouseMove" :style="{ '--x': pos_left, '--y': pos_top}">
		<div class="content">
			<div class="mission_wrap">
				<div class="mission_item transition_up">
					<div class="mission_title">Mission</div>
					<div class="mission_content">Our mission is to unite and help to find right people from web3 in the real world</div>
				</div>
				<div class="mission_item transition_up">
					<v-lazy-image 
						src="/img/mission_2.png" 
						src-placeholder="/img/mission_2.webp" 
					/>
				</div>
				<div class="mission_item transition_up">
					<div class="mission_title">Meet people</div>
					<div class="mission_content">Meet people and join crypto meet ups <b>all over the world</b></div>
				</div>
				<div class="mission_item transition_up">
					<div class="mission_title">We bring <span>web3</span> to the real life.</div>
					<div class="mission_content">Meet people and join crypto meet ups all over the world.</div>
				</div>
				<div class="mission_item long transition_up">
					<div class="mission_title"><span>NFT’s</span> DNA</div>
					<div class="mission_content">Our <b>NFT DNA</b> is a dynamic <b>NFT</b>, which will change the shape depending on your assets, <b>NFT</b> collections and history of your crypto wallet</div>
					<MIcon shift="-2" left="120px" top="40px" size="43px" background="icon_1" />
					<MIcon shift="3" left="calc(100% - 100px)" top="25px" size="43px" background="icon_2" />
					<MIcon shift="-3" left="calc(100% - 160px)" top="calc(100% - 130px)" size="65px" background="icon_3" />
					<MIcon shift="-5" left="150px" top="calc(100% - 100px)" size="42px" background="icon_4" />
					<MIcon shift="2" left="calc(100% - 220px)" top="calc(100% - 80px)" size="43px" background="icon_5" />
					<MIcon shift="-1" left="calc(100% - 90px)" top="calc(100% - 80px)" size="43px" background="icon_6" />
				</div>
			</div>
		</div>
		<Bubble shift="-6" left="3%" top="-60px" size="100px" background="purple"/>
	</section>
</template>
<script>
	import MIcon from '@/components/parts/MIcon.vue'
	import Bubble from '@/components/parts/Bubble.vue'
	import { useElementVisibility } from '@vueuse/core'
	import VLazyImage from "v-lazy-image"
	import { ref } from 'vue'
	export default{
		setup() {
			const target = ref(null)
			const targetIsVisible = useElementVisibility(target)

			return {
				target,
				targetIsVisible,
			}
		},
		components: {
			MIcon,
			Bubble,
			VLazyImage
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