<template>
   <header class="relative p-2">
      <div class="md:w-[80%] m-auto flex  md:flex-row justify-between items-center">
         <BaseLogo/>
         <nav class="hidden md:block">
            <ul class="flex flex-row">
               <li class="p-4 cursor-pointer text-white">Home</li>
               <li class="p-4 cursor-pointer text-white">Exchange</li>
               <li class="p-4 cursor-pointer text-white">About</li>
               <li class="p-4 cursor-pointer text-white">Faq</li>
            </ul>
         </nav>
         <div>
            <BaseButton
               :name="'Connect Wallet'"
               :color="'#580355'"
            />
         </div>
      </div>
      <!-- mobile header -->
      <div class="md:hidden absolute w-full h-screen bg-background top-0 right-0 z-10  flex justify-center items-center text-center font-bold text-3xl">
         <div class=""></div>
         <nav>
            <ul class="flex flex-col">
               <li class="p-4 cursor-pointer text-white">Home</li>
               <li class="p-4 cursor-pointer text-white">Exchange</li>
               <li class="p-4 cursor-pointer text-white">About</li>
               <li class="p-4 cursor-pointer text-white">Faq</li>
            </ul>
         </nav>
      </div>
   </header>
</template>

<script>
import BaseLogo from '@/components/BaseComponent/BaseLogo.vue'
import BaseButton from '@/components/BaseComponent/BaseButton.vue'
export default {
   name:'Header',
   components:{
      BaseLogo,
      BaseButton,
   },
}
</script>

<style>

body{
   background: rgba(0, 0, 0, 0.572);
}

</style>