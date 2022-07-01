<template>
  <AppLayout>
      <!--overlay banner-->
      <OverlayBanner/>
      <!--overlay banner-->
      <Exchange/>
      <!--test banner component-->
      <div>
        
      </div>
      <!--Accordion-->
      <div>

      </div>
  </AppLayout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/Accordion.vue";
import OverlayBanner from "@/components/OverlayBanner.vue"
import AppLayout from '@/layouts/AppLayout.vue'
import Exchange from '@/components/Exchange.vue'

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    OverlayBanner,
    AppLayout,
    Exchange
  },
};
</script>
