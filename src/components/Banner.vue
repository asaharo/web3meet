<template>
	
	<section :class="{'visible' : visible}" id="banner" @mousemove="mouseMove" :style="{ '--x': pos_left, '--y': pos_top}">
		<div class="content">
			<div id="title_wrap">
				<transition name="slideUp">
					<h1 v-if="visible">We bring <span>web3</span><br>to the real life.</h1>
				</transition>
				<transition name="slideUp">
					<div v-if="visible" class="title_desc">Meet people and join crypto meet ups all over the world.</div>
				</transition>
				<transition name="slideUp">
					<a v-if="visible" @click="$root.scrollToId('about')" class="btn black">More</a>
				</transition>
			</div>
			<transition name="slideUp">
				<div id="slider" v-if="visible">
					<span id="sl_bg" style="background: url('/img/slider_bg.webp') no-repeat;"></span>
					<swiper
						:spaceBetween="0" 
						:effect="'fade'"
						:loop="true"
						:speed="200"
						:autoplay='{
							"delay": 5000,
							"disableOnInteraction": false,
						}'
						@swiper="onSwiper"
					>
						<swiper-slide><img src="/img/slider_1c.png" /></swiper-slide>
						<swiper-slide>
							<v-lazy-image 
								src="/img/slider_2b.png"
							/>
						</swiper-slide>
					</swiper>
				</div>
			</transition>
		</div>
		<Bubble shift="-3" left="-110px" top="10%" size="170px" background="purple"/>
		<Bubble shift="13" left="85%" top="calc(100% - 45px)" size="100px" background="blue"/>
		<Bubble shift="2" left="calc(100% - 90px)" top="-40px" size="115px" background="purple"/>
		<Bubble shift="-15" left="calc(50% - 25px)" top="60%" size="60px" background="purple"/>
	</section>
</template>
<script>
	import Bubble from '@/components/parts/Bubble.vue'
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import SwiperCore, {Autoplay, EffectFade} from 'swiper';
	SwiperCore.use([Autoplay,EffectFade]);
	import "swiper/css/effect-fade";
	import 'swiper/css';
	import VLazyImage from "v-lazy-image"
	export default{
		components: {
			Bubble,
			Swiper,
			SwiperSlide,
			VLazyImage
		},
		data() {
			return{
				pos_left: 0,
				pos_top: 0,
				visible: false,
				imagesToPreload: [
					'/img/slider_bg.webp',
					"/img/slider_1c.png",
					"/img/slider_2b.png"
				]
			}
		},
		methods: {
			mouseMove(event){
				this.pos_left = event.clientX
				this.pos_top = event.clientY
			},
			onSwiper(swiper){
				swiper.autoplay.running = true
			},
		},
		mounted(){
			setTimeout(() => {
				this.visible = true
			}, 500)

		},
		created() {
			const images = this.imagesToPreload.map(imageSrc => {
				return new Promise((resolve, reject) => {
					const img = new Image();
					img.src = imageSrc;
					img.onload = resolve;
					img.onerror = reject;
				});
			});

			Promise.all(images).then(() => { 
				// console.log("Images loaded!");
				// this.isLoading = false;
			}).catch(error => {
				// console.error("Some image(s) failed loading!");
				console.error(error.message)
			});
		},
		// watch:{
		// 	targetIsVisible: function () {
		// 		if(this.targetIsVisible == true) this.visible = true
		// 	},
		// }
	}
</script>