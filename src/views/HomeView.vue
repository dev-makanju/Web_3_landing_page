<template>
  <AppLayout>
      <!--overlay banner-->
      <OverlayBanner/>
      <!--overlay banner-->
      <Exchange/>
      <!--test banner component-->
      <Banner />
      <!-- main banner -->
      <Mainbanner />
      <!--Accordion-->
      <Accordion/>
  </AppLayout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/Accordion.vue";
import OverlayBanner from "@/components/OverlayBanner.vue"
import AppLayout from '@/layouts/AppLayout.vue'
import Exchange from '@/components/Exchange.vue'
import Accordion from '@/components/Accordion.vue'
import Banner from '@/components/Banner.vue'
import Mainbanner from '@/components/MainBanner.vue'

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    OverlayBanner,
    AppLayout,
    Exchange,
    Accordion,
    Banner,
    Mainbanner,
  },
};
</script>
