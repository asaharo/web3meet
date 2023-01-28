<template>
	<section id="parts" ref="target" :class="{'visible' : visible}" @mousemove="mouseMove" :style="{ '--x': pos_left, '--y': pos_top}">
		<div class="content">
			<div id="parts_wrap">
				<div class="part_one transition_up">
					<div class="part_title">Background</div>
					<div class="part_arrow"><verticalArrow /></div>
					<div class="part_img">
						<v-lazy-image 
							src="/img/parts/part_1.png" 
							src-placeholder="/img/parts/part_1-min2.webp"
						/>
					</div>
				</div>
				<div class="part_one transition_up">
					<div class="part_title">Body</div>
					<div class="part_arrow"><verticalArrow /></div>
					<div class="part_img">
						<v-lazy-image 
							src="/img/parts/part_2.png" 
							src-placeholder="/img/parts/part_2-min2.webp"
						/>
					</div>
				</div>
				<div class="part_one transition_up">
					<div class="part_title">Clothing</div>
					<div class="part_arrow"><verticalArrow /></div>
					<div class="part_img">
						<v-lazy-image 
							src="/img/parts/part_3.png" 
							src-placeholder="/img/parts/part_3-min2.webp"
						/>
					</div>
				</div>
				<div class="part_one transition_up">
					<div class="part_title">Head</div>
					<div class="part_arrow"><verticalArrow /></div>
					<div class="part_img">
						<v-lazy-image 
							src="/img/parts/part_4.png" 
							src-placeholder="/img/parts/part_4-min2.webp"
						/>
					</div>
				</div>
				<div class="part_one transition_up">
					<div class="part_title">Color</div>
					<div class="part_arrow"><verticalArrow /></div>
					<div class="part_img">
						<v-lazy-image 
							src="/img/parts/part_5.png" 
							src-placeholder="/img/parts/part_5-min2.webp"
						/>
					</div>
				</div>
			</div>
		</div>
		<Bubble shift="2" left="50px" top="50px" size="40px" background="purple"/>
	</section>
</template>
<script>
	import verticalArrow from '@/components/icons/verticalArrow.vue'
	import Bubble from '@/components/parts/Bubble.vue'
	import { useElementVisibility } from '@vueuse/core'
	import { ref } from 'vue'
	import VLazyImage from "v-lazy-image"
	export default{
		components:{
			verticalArrow,
			Bubble,
			VLazyImage
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