<template>
	<section id="roadmap" class="content" ref="target" :class="{'visible' : visible}">
		<h2 class="title">Roadmap</h2>
		<div id="roadmap_wrap">
			<div class="one_road transition_left">
				<div class="road_title">Q1</div>
				<div class="road_year">2023</div>
				<div class="road_desc">Q1 2023 - Early adopter NFT pass, MVP with web3 events</div>
			</div>
			<div class="road_arrow transition_left"></div>
			<div class="one_road transition_left">
				<div class="road_title">Q3</div>
				<div class="road_year">2023</div>
				<div class="road_desc">Q3 2023 - Full desktop version</div>
			</div>
			<div class="road_arrow transition_left"></div>
			<div class="one_road transition_left">
				<div class="road_title">Q1</div>
				<div class="road_year">2023</div>
				<div class="road_desc">Q1 2023 - iOS and Android apps</div>
			</div>
		</div>
	</section>
</template>
<script>
	import { useElementVisibility } from '@vueuse/core'
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
		data() {
			return{
				pos_left: 0,
				pos_top: 0,
				visible: false
			}
		},
		watch:{
			targetIsVisible: function () {
				if(this.targetIsVisible == true) this.visible = true
			},
		}
	}
</script>