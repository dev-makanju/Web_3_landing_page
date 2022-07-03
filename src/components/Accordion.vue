<template>
  <div class="flex justify-center items-center p-4 flex-col">
      <h1 class="text-white text-xl text-center pt-6 pb-6">Frequently Asked Questions</h1>
      <div class="accordion rounded-2xl md:w-[700px] shadow-smoke p-4">
        <div class="border-b-2 border-b-[#fff] overflow-hidden" v-for="(faq , index) in questions" :key="index">
          <div class="flex justify-between p-3">
              <h2 class="text-white text-[20px]">{{ faq.quest }}</h2>
              <div @click.prevent="accordionHandler(index)" :class="['duration-500 text-white text-[20px] cursor-pointer', faq.select ? 'rotate-[180deg]' : '']">D</div>
          </div>
          <div :class="['h-0 duration-500',  faq.select ? 'pb-3 h-[280px] md:h-[150px]' : '']" id="content">
              <!-- content -->
              <p class="text-white text-[14px] tracking-wide p-3">{{ faq.answ }}</p>
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
    return {
      selectId: null,
      questions:[
        {
          select: null,
          quest: 'What is Echnge',
          answ: 'If you want to buy or sell cryptocurrencies, opening an account with a crypto-currency exchange is a great way to start. Crypto exchan-ges function similarly to online brokerage platforms, providing you with the tools you need to buy and sell digital currencies and tokens like Bitcoin, Ethereum, and Dogecoin. It’s important to look at factors such as supported as-sets, fees, payment methods, and security.'
        },
        {
          select: null,
          quest: 'What is Exhnge Protocol?',
          answ: 'If you want to buy or sell cryptocurrencies, opening an account with a crypto-currency exchange is a great way to start. Crypto exchan-ges function similarly to online brokerage platforms, providing you with the tools you need to buy and sell digital currencies and tokens like Bitcoin, Ethereum, and Dogecoin. It’s important to look at factors such as supported as-sets, fees, payment methods, and security.'
        },
        {
          select: null,
          quest: 'What is gas fee?',
          answ: 'If you want to buy or sell cryptocurrencies, opening an account with a crypto-currency exchange is a great way to start. Crypto exchan-ges function similarly to online brokerage platforms, providing you with the tools you need to buy and sell digital currencies and tokens like Bitcoin, Ethereum, and Dogecoin. It’s important to look at factors such as supported as-sets, fees, payment methods, and security.'
        },
        {
          select: null,
          quest: 'What is Exhnge Token?',
          answ: 'If you want to buy or sell cryptocurrencies, opening an account with a crypto-currency exchange is a great way to start. Crypto exchan-ges function similarly to online brokerage platforms, providing you with the tools you need to buy and sell digital currencies and tokens like Bitcoin, Ethereum, and Dogecoin. It’s important to look at factors such as supported as-sets, fees, payment methods, and security.'
        }
      ],
    }
  },
  methods: {
    accordionHandler(id){
      this.selectId = id;
      for( let que in this.questions){
        if(id == que){
          this.questions[que].select = !this.questions[que].select
        }
      }
    }
  }
}
</script>