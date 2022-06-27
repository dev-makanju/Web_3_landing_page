<template>
   <div class="first-line: h-[80vh] w-full">
      <div class="h-[80vh] w-full absolute mt-0">
         <div class="w-[400px] h-[400px]  rounded-full"></div>
         <div></div>
      </div>
      <img class="absolute mt-0 rotate-y180 h-[80vh] bg-gradient" src="../assets/Images/Waves2.svg">
      <div class="h-[80vh] w-full absolute mt-0 flex items-center relative">
         <div class="m-auto w-[500px] text-center">
            <h1 class="text-5xl text-white font-bold">The easiest way to exhnge cryptocurrency</h1>
            <p class="text-white p-[.8rem]">Trade, earn, and win crypto on the most popular decentralised platform in the galaxy</p>
            <div>
               <Button />
               <Button />
            </div>
         </div>
      </div>
  </div>
</template>

<script>

import Button from '@/components/BaseComponent/BaseButton.vue'

export default {
   name: 'OverlayBanner',
   components:{
      Button
   }
}
</script>