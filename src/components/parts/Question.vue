<template>
	<div class="one_q transition_up" @click="active = !active" :class="{active: active}">
		<div class="q_icon"></div>
		<div class="q_content_wrap">
			<div class="q_title">{{title}}</div>
			<div class="q_title_content">
				<slide-up-down v-model="active" :duration="300">{{content}}</slide-up-down>
			</div>
		</div>
	</div>
</template>
<script>
	import SlideUpDown from 'vue3-slide-up-down'
	export default{
		props: ['title', 'content'],
		components: {
			SlideUpDown
		},
		data(){
			return{
				active: false
			}
		}
	}
</script>