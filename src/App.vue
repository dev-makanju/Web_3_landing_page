<template>
  <nav>
     <Header />
  </nav>
  <router-view />
  <Footer />
</template>

<script>

import Header from '@/components/Navigations/Header.vue'
import Footer from '@/components/Navigations/Footer.vue'

export default {
  name: 'App',
  components:{
    Header,
    Footer
  }     
}

</script>

