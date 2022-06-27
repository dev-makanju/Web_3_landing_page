<template>
  <AppLayout>
      <!--overlay banner-->
      <OverlayBanner/>
      <!--overlay banner-->
      <div>

      </div>
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

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    OverlayBanner,
    AppLayout,
  },
};
</script>
