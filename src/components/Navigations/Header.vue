<template>
   <header class="bg-s-purple p-4">
      <div class="w-[80%] m-auto flex flex-row justify-between">
         <BaseLogo/>
         <ul class="flex flex-row">
            <li class="p-4 text-white">Home</li>
            <li class="p-4 text-white">Exchange</li>
            <li class="p-4 text-white">About</li>
            <li class="p-4 text-white">Faq</li>
         </ul>
         <div>
            <BaseButton/>
         </div>
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

</style>