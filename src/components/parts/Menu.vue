<template>
	<div class="menu">
		<div class="menu_item" @click="handleClick('about')"><span>About Us</span></div>
		<div class="menu_item" @click="handleClick('parts')"><span>How it works</span></div>
		<div class="menu_item" @click="handleClick('attrs')"><span>Web3 NFT’s</span></div>
		<div class="menu_item" @click="handleClick('roadmap')"><span>Roadmap</span></div>
		<div class="menu_item" @click="handleClick('faq')"><span>Questions</span></div>
	</div>
</template>
<script>
	export default{
		emits: ['closeMenu'],
		methods:{
			handleClick(id){
				this.$root.scrollToId(id)
				this.$emit("closeMenu");
			}
		}
	}
</script>