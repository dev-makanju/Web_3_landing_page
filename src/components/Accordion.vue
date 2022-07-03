<template>
  <div class="flex justify-center items-center p-4 flex-col">
      <h1 class="text-white text-xl text-center pt-6 pb-6">Frequently Asked Questions</h1>
      <div class="accordion rounded-2xl md:w-[700px] shadow-smoke p-4">
        <div class="border-b-2 border-b-[#fff] overflow-hidden">
          <div class="flex justify-between p-3">
              <h2 class="text-white text-[20px]">What is Echnge</h2>
              <div @click.prevent="accordionHandler" class="text-white text-[20px] cursor-pointer">D</div>
          </div>
          <div :class="['h-0 duration-500',isCliked ? 'p-3 h-[auto]' : '']" id="content">
             <!-- content -->
              <p class="text-white text-[14px] tracking-wide">If you want to buy or sell cryptocurrencies, opening an account with a crypto-currency exchange is a great way to start. Crypto exchan-ges function similarly to online brokerage platforms, providing you with the tools you need to buy and sell digital currencies and tokens like Bitcoin, Ethereum, and Dogecoin. 
                It’s important to look at factors such as supported as-sets, fees, payment methods, and security.
              </p>
          </div>
        </div>
        
        <div class="border-b-2 border-b-[#fff] overflow-hidden">
          <div class="flex justify-between p-3">
              <h2 class="text-white text-[20px]">What is Exhnge Protocol?</h2>
              <span @click.prevent="accordionHandler" 
                    class="text-white text-[20px] cursor-pointer"
              >D</span>
          </div>
          <div :class="['h-0 duration-500',isCliked ? 'p-3 h-[auto]' : '']" id="content">
             <!-- content -->
              <p class="text-white text-[14px] tracking-wide">If you want to buy or sell cryptocurrencies, opening an account with a crypto-currency exchange is a great way to start. Crypto exchan-ges function similarly to online brokerage platforms, providing you with the tools you need to buy and sell digital currencies and tokens like Bitcoin, Ethereum, and Dogecoin. 
                It’s important to look at factors such as supported as-sets, fees, payment methods, and security.
              </p>
          </div>
        </div>

        <div class="border-b-2 border-b-[#fff] overflow-hidden">
          <div class="flex justify-between p-2">
              <h2 class="text-white text-[20px]">What is gas fee?</h2>
              <span @click.prevent="accordionHandler" class="text-white text-[20px]">D</span>
          </div>
          <div :class="['h-0 duration-500',isCliked ? 'p-3 h-[auto]' : '']" id="content">
             <!-- content -->
              <p class="text-white text-[14px] tracking-wide">If you want to buy or sell cryptocurrencies, opening an account with a crypto-currency exchange is a great way to start. Crypto exchan-ges function similarly to online brokerage platforms, providing you with the tools you need to buy and sell digital currencies and tokens like Bitcoin, Ethereum, and Dogecoin. 
                It’s important to look at factors such as supported as-sets, fees, payment methods, and security.
              </p>
          </div>
        </div>

        <div class="border-b-2 border-b-[#fff] overflow-hidden">
          <div class="flex justify-between p-2">
              <h2 class="text-white text-[20px]">What is Exhnge Token?</h2>
              <span @click.prevent="accordionHandler" class="text-white text-[20px]">D</span>
          </div>
          <div :class="['h-0 duration-500',isCliked ? 'p-3 h-[auto]' : '']" id="content">
             <!-- content -->
              <p class="text-white text-[14px] tracking-wide">If you want to buy or sell cryptocurrencies, opening an account with a crypto-currency exchange is a great way to start. Crypto exchan-ges function similarly to online brokerage platforms, providing you with the tools you need to buy and sell digital currencies and tokens like Bitcoin, Ethereum, and Dogecoin. 
                It’s important to look at factors such as supported as-sets, fees, payment methods, and security.
              </p>
          </div>
        </div>
      </div>
      <div class="p-5">
          <h1 class="text-white text-xl text-center">Our Patners</h1>
          <ul class="flex flex-wrap gap-4 items-center justify-center p-4">
               <li class="bg-white h-[12px] w-[12px] rounded-2xl p-2">
                  <font-awesome-icon icon="fa fa-apple"/>
               </li>
               <li class="bg-white h-[12px] w-[12px] rounded-2xl p-2">
                  <font-awesome-icon icon="fa fa-apple"/>
               </li>
               <li class="bg-white h-[12px] w-[12px] rounded-2xl p-2">
                  <font-awesome-icon icon="fa fa-apple"/>
               </li>
               <li class="bg-white h-[12px] w-[12px] rounded-2xl p-2">
                  <font-awesome-icon icon="fa fa-apple"/>
               </li>
               <li class="bg-white h-[12px] w-[12px] rounded-2xl p-2">
                  <font-awesome-icon icon="fa fa-apple"/>
               </li>
               <li class="bg-white h-[12px] w-[12px] rounded-2xl p-2">
                  <font-awesome-icon icon="fa fa-apple"/>
               </li>
               <li class="bg-white h-[12px] w-[12px] rounded-2xl p-2">
                  <font-awesome-icon icon="fa fa-apple"/>
               </li>
               <li class="bg-white h-[12px] w-[12px] rounded-2xl p-2">
                  <font-awesome-icon icon="fa fa-apple"/>
               </li>
               <li class="bg-white h-[12px] w-[12px] rounded-2xl p-2">
                  <font-awesome-icon icon="fa fa-apple"/>
               </li>
               <li class="bg-white h-[12px] w-[12px] rounded-2xl p-2">
                  <font-awesome-icon icon="fa fa-apple"/>
               </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name:'Accordion',
  data(){
    return{
      isCliked: null,
    }
  },
  methods: {
    accordionHandler(){
     // const accLenth = document.querySelector("#content")
      console.log('hello')
    }
  }
}
</script>