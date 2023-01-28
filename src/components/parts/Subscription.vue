<template>
	<div class="subs_form">
		<form @submit.prevent="sendSubsForm">
			<input type="text" required placeholder="Your email" v-model="subsFormData.MERGE0"/>
			<button type="submit" :disabled='sending'>
				<span v-if="!sending">Subscribe</span>
				<Spinner v-else/>
			</button>
		</form>
		<div class="message" v-if="valid == false && message !== ''" v-html="message"></div>
	</div>

	<Modal
		v-model="showModalSuccess"
		:close="closeModalSuccess"
	>
	<div class="modal success">
		<div class="form_submitted">
			<Checkmark />
			<div class="message_success" v-html="message"></div>
		</div>
	</div>
	<div class="close_icon" @click="closeModalSuccess">
		<div class="close-container">
			<div class="leftright"></div>
			<div class="rightleft"></div>
			<label class="close">close</label>
		</div>
	</div>
	</Modal>
</template>
<script>
	import jsonp from 'jsonp';
	import queryString from 'query-string';
	import Spinner from '@/components/parts/Spinner'
	import Checkmark from '@/components/parts/Checkmark'
	export default{
		emits : ['showSuccess'],
		data() {
			return {
				subsFormData: {
					MERGE0: '',
					status: 'subscribed',
					u: '3a8727b16578c15b071fadf5f',
					id: '613c1576b4'
				},
				valid: false,
				sending: false,
				message: '',
				showModalSuccess: false
			}
		},
		components: {
			Spinner,
			Checkmark
		},
		methods: {
			closeModalSuccess(){
				this.showModalSuccess = false
			},
			sendSubsForm() {
				this.sending = true
				jsonp(`https://gmail.us11.list-manage.com/subscribe/post-json?u=3a8727b16578c15b071fadf5f&${queryString.stringify(this.subsFormData)}`, { param: 'c' }, (err, data) => {
					this.sending = false
					if (err) {
						this.valid = false
					} else if (data.result !== "success") {
						this.valid = false
					} else {
						this.valid = true
						this.showModalSuccess = true
						setTimeout(() => {
							this.closeModalSuccess()
							this.$emit("showSuccess");
						}, 3000)
						this.subsFormData.MERGE0 = ''
					}
					this.message = data.msg
				});
			},
		},
	}
</script>