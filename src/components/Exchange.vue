<template>
  <div class="flex item-center w-full justify-center relative">
      <img class="absolute mt-0 right-0 rotate-y-180 h-[80vh] bg-gradient" src="../assets/Images/Waves2.svg" onerror="this.style.display='none'">
      <ExhWrapper>
         <div class="flex flex-col items-center justify-center">
            <img class="p-4 w-[120px]"  src="@/assets/Images/plogo.svg" alt="">
            <form @submit.prevent="walletConnectionHandler">
               <div class="relative w-full">
                  <input class="p-4 pl-6 rounded-4xl  outline-[#F8921C]" type="text"/>
                  <span class="absolute top-[14px]  w-[40px] left-[6px] bg-[#F8921C] rounded-full p-2">
                     <img src="@/assets/logos/btc.svg" onerror="this.style.display='none'" alt="">
                  </span>
                  <div class="absolute top-[14px] w-[40px] right-[6px]  p-2">{{ value }}</div>
               </div>
               <div class="mt-[1rem] mb-[1rem] flex justify-center">
                  <img class="p-1 w-[30px] bg-s-purple rounded-full"  src="@/assets/Images/Vector-arrow.svg" onerror="this.style.display='none'">
               </div>
               <div class="relative w-full">
                  <input class="p-4 pl-6 rounded-4xl  outline-[#F8921C]" type="text"/>
                  <span class="absolute top-[14px]  w-[40px] left-[6px] bg-[#580355] rounded-full p-2">
                     <img src="@/assets/logos/Logo4.svg" onerror="this.style.display='none'" alt="">
                  </span>
                  <div class="absolute top-[14px] w-[40px] right-[6px]  p-2">{{ value }}</div>
               </div>
               <div class="pt-4 flex justify-end w-full">
                    <BaseButton />
               </div>
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
      value: '0.0',
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
