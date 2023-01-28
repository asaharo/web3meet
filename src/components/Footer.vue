<template>
	<footer>
		<div class="content">
			<a @click="$root.scrollToId('app')" id="flogo"><Logo /></a>
			<Menu />
			<Subscription />
			<div id="copy_wrap">
				<div id="copy">© {{currentYear}}</div>
				<div id="socials">
					<a target="_blank" href="https://twitter.com/web3meet"><twIcon /></a>
					<a target="_blank" href="https://www.instagram.com/web3meet/" class="inst"><instIcon /></a>
					<a target="_blank" href="https://t.me/web3meet" class="tel"><telIcon /></a>
					<a target="_blank" href="https://discord.gg/Ypsj74gf"><disIcon /></a>
				</div>
				<div id="site_name">Web3 Meet</div>
			</div>
		</div>
	</footer>
</template>
<script>
	import Menu from '@/components/parts/Menu.vue'
	import Logo from '@/components/parts/Logo.vue'
	import Subscription from '@/components/parts/Subscription.vue'
	import twIcon from '@/components/icons/twIcon.vue'
	import instIcon from '@/components/icons/instIcon.vue'
	import telIcon from '@/components/icons/telIcon.vue'
	import disIcon from '@/components/icons/disIcon.vue'
	export default {
		components: {
			Menu,
			Logo,
			Subscription,
			twIcon,
			instIcon,
			telIcon,
			disIcon
		},
		data() {
			return {
				currentYear: new Date().getFullYear(),
			}
		},
	}
</script>