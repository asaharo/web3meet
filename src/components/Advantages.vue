<template>
	<div class="content">
		<h2 class="title">Advantages</h2>
	</div>
	<div class="adv_wrap" ref="target" :class="{'visible' : visible}">
		<div class="one_adv transition_left">
			<div class="adv_number">
				<span>1</span>
				<i>one</i>
			</div>
			<div class="adv_content">Most accurate algorithm for finding the right people according to your interests in web3</div>
		</div>
		<div class="one_adv transition_left">
			<div class="adv_number">
				<span>2</span>
				<i>two</i>
			</div>
			<div class="adv_content">Create your own meet ups using our vast filter system</div>
		</div>
		<div class="one_adv transition_left">
			<div class="adv_number">
				<span>3</span>
				<i>three</i>
			</div>
			<div class="adv_content">Change your location and find people all over the world</div>
		</div>
		<div class="one_adv transition_left">
			<div class="adv_number">
				<span>4</span>
				<i>four</i>
			</div>
			<div class="adv_content">Using our NFT DNA you can take part in private events and stay anonymous</div>
		</div>
		<div class="one_adv transition_left">
			<div class="adv_number">
				<span>5</span>
				<i>five</i>
			</div>
			<div class="adv_content">We don’t track user data and we don’t  store your private keys or seed phrase</div>
		</div>
	</div>
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