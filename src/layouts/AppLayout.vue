<template>
   <AppWrapper>
      <Header/>
         <slot />
      <Footer />
   </AppWrapper>
</template>

<script>
import AppWrapper from './AppWrapper.vue'
import Header from '../components/Navigations/Header.vue'
import Footer from '../components/Navigations/Footer.vue'

export default {
   name:'AppLayout',
   components: {
      AppWrapper,
      Header,
      Footer,
   }
}

</script>
