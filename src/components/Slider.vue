<template>
	<section id="carousel" @mousemove="mouseMove" :style="{ '--x': pos_left, '--y': pos_top}">
		<div class="content">
			<h2 class="title">What does it look like</h2>
			<div id="slider_wrap">
				<swiper
					:slidesPerView="3"
					:spaceBetween="0" 
					:loop="true"
					:centeredSlides="true"
					:navigation='{ 
						"nextEl": ".custom-swiper-button-next", 
						"prevEl": ".custom-swiper-button-prev", 
					}'
					:autoplay='{
						"delay": 3000,
						"disableOnInteraction": false,
					}'
					@swiper="onSwiper"
					:breakpoints="swiperOptions.breakpoints"
				>
					<swiper-slide><img src="@/assets/img/carousel_1.png" /></swiper-slide>
					<swiper-slide><img src="@/assets/img/carousel_2.png" /></swiper-slide>
					<swiper-slide><img src="@/assets/img/carousel_3.png" /></swiper-slide>
				</swiper>
				<div class="custom-swiper-button-prev navigation_circle"><Arrow /></div>
				<div class="custom-swiper-button-next navigation_circle"><Arrow /></div> 
			</div>
		</div>
		<Bubble shift="-3" left="-50px" top="calc(0% - 60px)" size="90px" background="blue"/>
		<Bubble shift="13" left="45%" top="calc(50% - 45px)" size="120px" background="purple"/>
		<Bubble shift="-6" left="65%" top="calc(70% - 45px)" size="90px" background="blue"/>
	</section>
</template>
<script>
	import Bubble from '@/components/parts/Bubble.vue'
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import SwiperCore, {Autoplay, Navigation, EffectFade} from 'swiper';
	SwiperCore.use([Autoplay,Navigation, EffectFade]);
	import "swiper/css/effect-fade";
	import "swiper/css/navigation";
	import Arrow from "@/components/icons/arrow";
	import 'swiper/css';
	export default{
		name: 'Header',
		components: {
			Bubble,
			Swiper,
			SwiperSlide,
			Arrow,
		},
		methods: {
			onSwiper(swiper){
				swiper.autoplay.running = true
			},
			mouseMove(event){
				this.pos_left = event.clientX
				this.pos_top = event.clientY
			}
		},
		data() {
			return{
				pos_left: 0,
				pos_top: 0,
				swiperOptions:{
					breakpoints: {
						0: {
							slidesPerView: 1,
						},
						1128: {
							slidesPerView: 3,
						}
					},
				}
			}
		},
	}
</script>