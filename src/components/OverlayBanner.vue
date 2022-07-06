<template>
   <div class="first-line: h-[80vh] w-full">
      <Overlay
         :showModal="stylehandler"
         :slideModal="slideInModal"
         @close="closeModal"
      />
      <div class="h-[80vh] w-full absolute mt-0">
         <div class="w-[400px] h-[400px]  rounded-full"></div>
         <div></div>
      </div>
      <img class="absolute mt-0 rotate-y180 h-[80vh] bg-gradient" src="../assets/Images/Waves2.svg">
      <div class="h-[80vh] w-full absolute mt-0 flex items-center relative">
         <div class="m-auto w-[500px] text-center">
            <h1 class="text-5xl text-white font-bold mt-3">The easiest way to exhnge cryptocurrency</h1>
            <p class="text-white p-[.8rem]">Trade, earn, and win crypto on the most popular decentralised platform in the galaxy</p>
            <div class="flex gap-3 items-center justify-center pt-6">
               <Button 
                  :name="'Connect Wallet'"
                  :size="size"
                  @cliked="setStylehandler"
               />
               <Button 
                  :name="'Exchange now'"
                  :size='true'
               />
            </div>
         </div>
      </div>
  </div>
</template>

<script>

import Button from '@/components/BaseComponent/BaseButton.vue'
import Overlay from '@/components/Modals/Overlay.vue'

export default {
   name: 'OverlayBanner',
   components:{
      Button,
      Overlay
   },
   data: ()=> ({
      size:true,
      stylehandler: null,
      slideInModal: null,

   }),
   methods:{
      setStylehandler(){
         this.stylehandler = true;
         setTimeout( () => {
            this.slideInModal = true;
         }, 100)
      },
      closeModal(){
         this.slideInModal = false;
         setTimeout( () => {
            this.stylehandler = false;
         }, 200)
      },
   }
}
</script>
