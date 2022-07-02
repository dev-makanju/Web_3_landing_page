<template>
   <div class="bg-[#100F0F] h-[300px]">
      <div class=" text-center flex justify-center items-center gap-5">
         <div class="w-[400px]">
            <div class="flex items-center justify-center">
                <BaseLogo/>
               <h1 class="text-white text-3xl">Exhnge</h1>
            </div>
            <nav>
               <ul class="flex gap-4 items-center justify-center p-3">
                  <li>
                     <router-link class="text-white text-xl" to="#">Home</router-link>
                  </li>
                  <li>
                     <router-link class="text-white text-xl" to="#">Exchange</router-link>
                  </li>
                  <li>
                     <router-link class="text-white text-xl" to="#">About</router-link>
                  </li>
                  <li>
                     <router-link class="text-white text-xl" to="#">Faq</router-link>
                  </li>
               </ul>
            </nav>
         <span>
            <h3 class="text-white">
               The easiest way to exhnge cryptocurrency, Trade, earn, and win crypto on the most popular and decentralised platform  on the galaxy. 
            </h3>
         </span>
         <div>
            <ul class="flex gap-4 items-center justify-center p-4">
               <li class="bg-white h-[10px] w-[10px] rounded-2xl p-1">
                  <font-awesome-icon icon="fa fa-apple"/>
               </li>
               <li class="bg-white h-[10px] w-[10px] rounded-2xl p-1">
                  <font-awesome-icon icon="fa fa-apple"/>
               </li>
               <li class="bg-white h-[10px] w-[10px] rounded-2xl p-1">
                  <font-awesome-icon icon="fa fa-apple"/>
               </li>
               <li class="bg-white h-[10px] w-[10px] rounded-2xl p-1">
                  <font-awesome-icon icon="fa fa-apple"/>
               </li>
               <li class="bg-white h-[10px] w-[10px] rounded-2xl p-1">
                  <font-awesome-icon icon="fa fa-apple"/>
               </li>
            </ul>
         </div>
         </div>
         <div>
            <button class="bg-[white] rounded-full text- p-2 shadow-shad-main">Back to Top</button>
         </div>
      </div>
   </div>
</template>
<script>

import BaseLogo from '@/components/BaseComponent/BaseLogo.vue'

export default {
  name: 'Footer',  
  components: {
     BaseLogo
  },
}

</script>
