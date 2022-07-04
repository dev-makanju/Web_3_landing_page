<template>
  <div class="flex item-center w-full justify-center relative">
      <img class="absolute mt-0 right-0 rotate-y-180 h-[80vh] bg-gradient" src="../assets/Images/Waves2.svg" onerror="this.style.display='none'">
      <ExhWrapper>
         <div class="flex flex-col items-center justify-center">
            <img class="p-4 w-[120px]"  src="@/assets/Images/plogo.svg" alt="">
            <form @submit.prevent="walletConnectionHandler">
               <Input 
                  :types="type"
                  :icon="'Vector-2'"
               />
               <div class="mt-[1rem] mb-[1rem] flex justify-center">
                  <img class="p-1 w-[30px] bg-s-purple rounded-full"  src="@/assets/Images/Vector-arrow.svg" onerror="this.style.display='none'">
               </div>
               <Input 
                  :types="type"
                  :icon="'Vector-3'"
               />
               <BaseButton />
            </form>
         </div>
     </ExhWrapper>
  </div>
</template>
<script>

import  ExhWrapper from './ExhWrapper.vue'
import Input from '@/components/BaseComponent/BaseInput.vue'
import BaseButton from '@/components/BaseComponent/BaseButton.vue'

export default {
   name:"Exchange",
   components: {
      ExhWrapper,
      Input,
      BaseButton,
   },
   data: () => ({
      data: {
         type:'number',
      }
   }),
   methods:{
      walletConnectionHandler(){

      }
   }
}
</script>
