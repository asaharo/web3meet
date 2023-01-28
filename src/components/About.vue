<template>
	<section id="about" ref="target" :class="{'visible' : visible}">
		<div class="content">
			<transition name="slideUp">
				<h2 v-if="visible" class="title">About Us</h2>
			</transition>
			<transition name="slideUp">
				<p v-if="visible" class="strong">Web3Meet is an app that allows people to find events and local communities, meet new friends and partners worldwide. Our platform gives users the ability to create events both online and offline.</p>
			</transition>
			<transition name="slideUp">
				<p v-if="visible">With the use of our Web3Meet SBT dynamic NFT, searches for suitable individuals in terms of skill and experience level in the web3 world will be more accurate. The DNA NFT also allows users to join private communities, maintain anonymity, and create events with various filters for NFT holders.</p>
			</transition>
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