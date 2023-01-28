<template>
    <Preload />
    <Header />
    <Banner />
    <About />
    <Mission />
    <Advantages />
    <MidBanner />
    <Slider />
    <Parts />
    <Attr />
    <RoadMap />
    <FooterBanner />
    <FAQ />
    <Footer />
</template>

<script>
import Preload from '@/components/parts/Preload.vue'
import '@/assets/css/style.scss'
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import About from '@/components/About.vue'
import Mission from '@/components/Mission.vue'
import Advantages from '@/components/Advantages.vue'
import MidBanner from '@/components/MidBanner.vue'
import Slider from '@/components/Slider.vue'
import Parts from '@/components/Parts.vue'
import Attr from '@/components/Attr.vue'
import RoadMap from '@/components/RoadMap.vue'
import FooterBanner from '@/components/FooterBanner.vue'
import FAQ from '@/components/FAQ.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'App',
    components: {
       Preload,
       Header,
       Banner,
       About,
       Mission,
       Advantages,
       MidBanner,
       Slider,
       Parts,
       Attr,
       RoadMap,
       FooterBanner,
       FAQ,
       Footer
    },
    methods: {
        scrollToId(id){
            const el = document.getElementById(id);
            window.scrollTo({
                behavior: 'smooth',
                top:
                  el.getBoundingClientRect().top -
                  document.body.getBoundingClientRect().top -
                  50,
            })
        },
    },
}
</script>
