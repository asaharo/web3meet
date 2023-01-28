<template>
	<span class="bubble_item" :class="background"></span>
</template>
<script>
	export default{
		props: ['background', 'shift', 'left', 'top', 'size'],	
	}
</script>
<style scoped>
	span{
		--size: v-bind(size);
		--shift: v-bind(shift);
		left: v-bind(left);
		top: v-bind(top);
	}
</style>