import { createApp } from 'vue'
import App from './App.vue'
import 'vue-universal-modal/dist/index.css';
import VueUniversalModal from 'vue-universal-modal';
// import VueLazyload from 'vue-lazyload'


createApp(App)
    .use(VueUniversalModal, {
        teleportTarget: '#modals'
    })
    // .use(VueLazyload)
    .mount('#app')
