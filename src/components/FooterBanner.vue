<template>
	<section id="footer_banner" class="banner_wrap" @mousemove="mouseMove" :style="{ '--x': pos_left, '--y': pos_top}">
		<div class="content">
			<div class="banner_title">We bring <span>web3</span> to the real life. </div>
			<div class="banner_subtitle">Follow any wallet address, ENS handle or NFT collection to stay on top of the latest trends and tokens</div>
		</div>
		<Bubble shift="-3" left="50px" top="-50px" size="100px" background="blue"/>
		<Bubble shift="13" left="calc(90% - 40px)" top="calc(100% - 45px)" size="80px" background="purple"/>
	</section>
</template>
<script>
	import Bubble from '@/components/parts/Bubble.vue'
	export default{
		components: {
			Bubble
		},
		data() {
			return{
				pos_left: 0,
				pos_top: 0,
			}
		},
		methods: {
			mouseMove(event){
				this.pos_left = event.clientX
				this.pos_top = event.clientY
			}
		},
	}
</script>