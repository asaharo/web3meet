<template>
	<section id="attrs">
		<div class="content">
			<h2 class="title">Our NFT DNA is a dynamic NFT, which will <span>change the shape</span> depending on your assets, NFT collections and history of your crypto wallet</h2>
		</div>
		<div id="attrs_wrap">
			<div id="attr_preview">
				<div class="attr_content">
					<div id="attr_bg">
						<v-lazy-image 
							v-for="i in 6" 
							:class="{'active' : i == activeBG + 1}" 
							:key="i" 
							:src="'/img/attrs/pics/background_'+i+'.png'" 
							:src-placeholder="'/img/attrs/pics/background_'+i+'.webp'"
						/>
					</div>
					<transition name="fade" mode="out-in">
						<div id="attr_image" v-if="tabs[activeTab] !== 'Background'">
							<transition name="fadeLoad" mode="out-in">
								<div :key="activeLevel">
									<v-lazy-image 
										:src="'/img/attrs/pics/'+tabs[activeTab].toLowerCase()+'_'+(activeLevel+1)+'.png'" 
										:src-placeholder="'/img/attrs/pics/'+tabs[activeTab].toLowerCase()+'_'+(activeLevel+1)+'.webp'" 
									/>
								</div>
							</transition>
						</div>
						<div id="attr_image" v-else>
							<transition name="fade" mode="out-in">
								<v-lazy-image 
									src="/img/attrs/pics/background.png" 
									src-placeholder="/img/attrs/pics/background.webp" 
								/>
							</transition>
						</div>
					</transition>
<!-- 					<div id="attr_logo" v-if="tabs[activeTab] == 'Color'">
							<v-lazy-image 
								:key="activeLevel"
								:src="'img/attrs/logo_'+(activeLevel+1)+'.svg'" 
							/>
					</div> -->
				</div>
			</div>
			<div id="attr_filters" :class="{updating : updating}">
				<div class="attr_content">
					<h3 class="title">Attributes</h3>
					<div class="attr_buttons">
						<div class="one_btn" 
							v-for="(tab, index) in tabs" 
							:key="index" 
							:class="{active: index === activeTab}"
							@click="setActive(index)"
						>{{tab}}</div>
					</div>
					<div id="attr_desc">
						<transition name="fade" mode="out-in">
							<!-- The number of transaction in your wallet defines complexity of your headwear. -->
							{{sentence[tabs[activeTab]]}}
						</transition>
					</div>
					<div id="attr_levels" :class="tabs[activeTab].toLowerCase()">
						<div id="level_line">
							<div id="line_dots">
								<div class="one_dot" 
									v-for="(level, index) in levels[tabs[activeTabUpdated]]" 
									:key="index" 
									:class="{active: index === activeLevel}"
									@click="setActiveLevel(index)"
								></div>
							</div>
						</div>
						<div id="level_n">
							<div class="one_level_n" 
								v-for="(level, index) in levels[tabs[activeTabUpdated]]" 
								:key="index" 
								:class="{active: index === activeLevel}"
								@click="setActiveLevel(index)"
							>Level {{index+1}}
							</div>
						</div>
						<div id="level_descs">
							<div class="one_level_desc" 
								v-for="(level, index) in levels[tabs[activeTabUpdated]]" 
								:key="index" 
								:class="{active: index === activeLevel}"
								@click="setActiveLevel(index)"
							><span>{{level}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	import VLazyImage from "v-lazy-image"
	export default{
		components:{
			VLazyImage
		},
		data(){
			return{
				tabs: ['Head', 'Clothing', 'Background', 'Body', 'Color'],
				levels: {
					'Head': [
						'0 - 20 transactions', 
						'20 - 100 transactions', 
						'100 - 250 transactions', 
						'250 - 500 transactions', 
						'500 - 1000 transactions',
						'1000+ transactions'
					],
					'Clothing': [
						'$0 - $100',
						'$100 - $1K',
						'$1K - $10K',
						'$10K - $100K',
						'$100K - $1M',
						'> $1M'
					],
					'Background': [
						'0 - 5 NFTs of any type',
						'5 - 20 NFTs of any type',
						'20 - 100 NFTs of any type',
						'1 TOP TIERS NFT',
						'2 - 5 TOP TIERS NFTs',
						'5 TOP TIERS NFTs'
					],
					'Body': [
						'up to 4 weeks',
						'4 - 13 weeks',
						'13 -26 weeks',
						'26 - 39 weeks',
						'39 - 52 weeks',
						'> 52 weeks'
					],
					'Color': [
						'0-5 tokens',
						'5-10 tokens',
						'10-20 tokens',
						'20-50 tokens',
						'50-100 tokens',
						'>100 tokens'
					]
				},
				sentence: {
					'Head': 'The number of transaction in your wallet defines complexity of your headwear. ',
					'Clothing': 'The value of your assets determines the style of your DNA’s the larger the balance, the more elaborate the clothes.',
					'Background': 'The background of your DNA depends on NFT collections you holding. ',
					'Body': 'The DNA’s body is defined by the amount of time you hold Web3Meet NFT. ',
					'Color': 'Your DNA’s color will be influenced by the number of tokens you hold in your wallet.'
				},
				activeTab: 0,
				activeTabUpdated: 0,
				activeLevel: 0,
				activeBG: 0,
				updating: false
			}
		},
		methods:{
			setActive(index){
				this.activeLevel = 0
				this.activeBG = 0
				this.updating = true
				this.activeTab = index
				setTimeout(()=>{
					this.activeTabUpdated = index
					this.updating = false
				}, 300)
			},
			setActiveLevel(index){
				this.activeLevel = index
				if(this.tabs[this.activeTab] == 'Background'){
					this.activeBG = this.activeLevel
				}
			}
		}
	}
</script>