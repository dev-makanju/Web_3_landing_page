<template>
   <div class="bg-[#100F0F] h-[300px]">
      <div class=" text-center flex justify-center items-center gap-5 relative">
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
            <button class="block md:hidden bg-[white] rounded-full text- p-2 shadow-shad-main absolute top-[-10%] right-4">
               <a href="#top">
                  <font-awesome-icon icon="arrow-up"/>
               </a>
            </button>
         <span>
            <h3 class="text-white">
               The easiest way to exhnge cryptocurrency, Trade, earn, and win crypto on the most popular and decentralised platform  on the galaxy. 
            </h3>
         </span>
         <div>
            <ul class="flex gap-4 items-center justify-center p-4">
               <li class="h-[10px] w-[20px]">
                  <img class="w-[120px]" src="@/assets/Images/discord.svg" onerror="this.style.display='none'">
               </li>
               <li class="h-[10px] w-[20px]">
                  <img class="w-[120px]" src="@/assets/Images/linkedin.svg" onerror="this.style.display='none'">
               </li>
               <li class="h-[10px] w-[20px]">
                  <img class="w-[120px]" src="@/assets/Images/twitter.svg" onerror="this.style.display='none'">
               </li>
               <li class="h-[10px] w-[10px]">
                  <img class="w-[120px]" src="@/assets/Images/facebook.svg" onerror="this.style.display='none'">
               </li>
               <li class="h-[10px] w-[20px]">
                  <img class="w-[200px]" src="@/assets/Images/Reddit.svg" onerror="this.style.display='none'">
               </li>
            </ul>
         </div>
         </div>
         <div class="hidden md:block">
            <button class="bg-[white] rounded-full text- p-2 shadow-shad-main">
               <a href="#top">
                  Back to Top
               </a>
            </button>
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
