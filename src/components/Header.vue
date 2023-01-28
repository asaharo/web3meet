<template>
	<header :class="{loaded: loaded}">
		<div class="content">
			<a @click="$root.scrollToId('app')" id="logo"><Logo /></a>
			<div class="menu_wrap" :class="{open: open}">
				<Menu @closeMenu="handleMenu"/>
				<div @click="showModalSubs = true" class="btn" id="subscribe">Launch app</div>
			</div>
			<div id="menu_toggle_wrap" :class="{open: open}" @click="handleMenu"><span></span><span></span><span></span></div>
		</div>
	</header>

	<Modal
		v-model="showModalSubs"
		:close="closeModalSubs"
	>
		<div class="modal subs" @mousemove="mouseMove" :style="{ '--x': pos_left, '--y': pos_top}">
			<h2 class="modal_title">Subscribe</h2>
			<div class="modal_desc">subscribe to our updates</div>
			<Subscription @showSuccess="closeModalSubs"/>
			<!-- <Checkmark /> -->
			<!-- <div class="form_submitted">
			<div v-html="confirmation_message"></div>
			</div> -->
			<Bubble shift="-3" left="15%" top="5%" size="40px" background="purple"/>
			<Bubble shift="5" left="90%" top="calc(50% - 40px)" size="80px" background="blue"/>
			<Bubble shift="2" left="1%" top="calc(100% - 60px)" size="100px" background="purple"/>
		</div>
		<div class="close_icon" @click="closeModalSubs">
			<div class="close-container">
				<div class="leftright"></div>
				<div class="rightleft"></div>
				<label class="close">close</label>
			</div>
		</div>
	</Modal>
</template>
<script>
	import Menu from '@/components/parts/Menu.vue'
	import Logo from '@/components/parts/Logo.vue'
	import Subscription from '@/components/parts/Subscription.vue'
	import Bubble from '@/components/parts/Bubble.vue'
	// import Checkmark from '@/components/parts/Checkmark.vue'
	export default {
		components: {
			Menu,
			Bubble,
			Logo,
			Subscription,
			// Checkmark
		},
		data(){
			return{
				showModalSubs: false,
				pos_left: 0,
				pos_top: 0,
				visible: false,
				open: false,
				loaded: false
			}
		},
		methods:{
			closeModalSubs(){
				this.showModalSubs = false
			},
			mouseMove(event){
				this.pos_left = event.clientX
				this.pos_top = event.clientY
			},
			handleMenu(){
				this.open = !this.open
			}
		},
		mounted(){
			this.loaded = true
		}
	}
</script>
