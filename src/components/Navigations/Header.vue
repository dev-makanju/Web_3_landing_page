<template>
   <header class="relative p-2">
      <div class="md:w-[80%] m-auto flex  md:flex-row justify-between items-center">
         <BaseLogo/>
         <nav class="hidden md:block">
            <ul class="flex flex-row">
               <li class="p-4 cursor-pointer text-white">
                 <a href="/">Home</a>
               </li>
               <li class="p-4 cursor-pointer text-white">
                  <a href="/">Exchange</a>
               </li>
               <li class="p-4 cursor-pointer text-white">
                  <a href="#about">About</a>
               </li>
               <li class="p-4 cursor-pointer text-white">
                  <a href="#faq">Faq</a>
               </li>
            </ul>
         </nav>
         <div>
            <BaseButton
               class="hidden sm:block"
               :name="'Connect Wallet'"
               :color="'#580355'"
               @cliked="setStylehandler"
            />
            <span @click="toggleNavHandler" class="text-white text-3xl p-4 md:hidden">
               <font-awesome-icon icon="bars"/>
            </span>
         </div>
      </div>
      <!-- mobile header -->
      <div :class="['off md:hidden backdrop-blur-md absolute w-full h-screen bg-background top-0 right-0 z-10 flex justify-start items-center font-bold text-3xl duration-500', isNavActive ? 'translate-x-0':'translate-x-[-768px]']">
         <div @click="closeHandler" class="absolute right-0 top-0 p-4 cursor-pointer text-white">X</div>
         <nav>
            <ul class="flex flex-col">
               <li class="p-4 font-bold cursor-pointer text-white">Home</li>
               <li class="p-4 font-bold cursor-pointer text-white">Exchange</li>
               <li @click="scrollHandler" class="p-4 font-bold cursor-pointer text-white">
                   <a href="#about">About</a>
               </li>
               <li @click="scrollHandler" class="p-4 font-bold cursor-pointer text-white">
                   <a href="#faq">Faq</a>
               </li>
            </ul>
         </nav>
      </div>
      <Overlay
         :showModal="stylehandler"
         :slideModal="slideInModal"
         @close="closeModal"
      />
   </header>
</template>

<script>
import BaseLogo from '@/components/BaseComponent/BaseLogo.vue'
import BaseButton from '@/components/BaseComponent/BaseButton.vue'
import Overlay from '@/components/Modals/Overlay.vue'

export default {
   name:'Header',
   components:{
      BaseLogo,
      BaseButton,
      Overlay,
   },
   data: () => ({
      isNavActive: null,
      stylehandler: null,
      slideInModal: null
   }),
   methods: {
      closeHandler() {
         this.isNavActive = false
         document.querySelector("body").style.overflow = 'auto'
      },
      toggleNavHandler() {
         this.isNavActive = true
         document.querySelector("body").style.overflow = 'hidden'
      },
      scrollHandler() {
         this.closeHandler()
      },
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

