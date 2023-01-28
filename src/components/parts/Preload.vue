<template>
	<transition name="fadeLoad" mode="out-in">
		<div id="loading_spinner" v-if="!loaded">
			<svg class="loading_wrap" viewBox="0 0 100 100">
				<circle cx="50" cy="50" r="45"></circle>
			</svg>
		</div>
    </transition>
</template>
<style lang="scss">
	#loading_spinner{
    display: flex;
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 160px);
    align-items: center;
    justify-content: center;
    position: fixed;
    background: #fff;
    top: 0;
    z-index: 1000;
    & .loading_wrap{
    animation: 2s linear infinite svg-animation;
    max-width: 100px;
    width: 55px;
        & circle {
            animation: 1.4s ease-in-out infinite both circle-animation, delay-animation 1.4s; 
            display: block;
            fill: transparent;
            stroke: #563FDF;
            stroke-linecap: round;
            stroke-dasharray: 283;
            stroke-dashoffset: 75;
            stroke-width: 5px;
            transform-origin: 50% 50%;
        }
    }
}
@keyframes delay-animation {
  0%,75% {
    stroke-dashoffset: 75;
    transform: rotate(0);
  }
  100%{
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
}
@keyframes svg-animation {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
}
@keyframes circle-animation {
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }
  
  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }
  
  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
}
</style>
<script>
	export default{
		data(){
			return{
				loaded: false
			}
		},
		mounted(){
			setTimeout(() => {
				this.loaded = true
				window.scroll(0,0)
			}, 500)
		}
	}
</script>