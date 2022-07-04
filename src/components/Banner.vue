<template>
   <div class="">
      <div class="flex justify-between w-[95%] flex-col items-center md:flex-row sm:w-[90%] md:w-[80%] m-auto g-5 mt-3mb-3">
         <div class="flex-1 sm:h-[400px] md:h-[350px]">
            <img class="animate sm:h-[400px] md:h-[350px]" src="../assets/Images/Spirals.svg"  onerror="this.style.display='none'">
         </div>
         <div class="flex-1 basis-80%">
            <h2 class="text-white font-bold text-3xl pt-2 pb-2">Decentralized Exchange</h2>
            <p class="text-[#eee] font-light text-md">
               Exchanges often offer tiered verification levels, with lower tiers requiring less information. Lower verification tiers, however, usually come with lower deposit and withdrawal limits. 
               After completing the verification process, you can fund your trading account using the available funding options and start to buy and sell cryptocurrencies. 
            </p>
         </div>
      </div>
      <div class="flex justify-between w-[95%] sm:w-[90%] flex-col items-center md:flex-row-reverse md:w-[80%] m-auto g-4 g-5 mt-3 mb-3">
         <div class="flex-1 md:flex md:justify-end sm:h-[400px] md:h-[350px]">
            <img class="animate sm:h-[400px] md:h-[350px]" src="../assets/Images/Circle.svg" onerror="this.style.display='none'">
         </div>
         <div class="flex-1  basis-80%">
            <h2 class="text-white font-bold text-3xl pt-2 pb-2">Homomorphic  Encryption  Blockchain</h2>
            <p class="text-[#eee] font-light text-md">
               According to analysts from on-chain analytics firm Glassnode, the ongoing cryptocurrency bear market may be the worst one on record.
               For the first time in history, the 2021-22 cycle has recorded a lower MM value (0.487) than the previous cycle’s low (0.511). Only 84 out of 4160 trading days (2%) have recorded a closing MM value below 0.5.
            </p>
         </div>
      </div>
      <div class="flex justify-between flex-col items-center md:flex-row w-[95%] sm:w-[90%] md:w-[80%] m-auto g-4 g-5 mt-3 mb-3">
         <div class="flex-1 sm:h-[400px] md:h-[350px]">
            <img class="animate-fast sm:h-[400px] md:h-[350px]" src="../assets/Images/Connection.svg" onerror="this.style.display='none'">
         </div>
         <div class="flex-1  basis-80%">
            <h2 class="text-white font-bold text-3xl pt-2 pb-2">Secure  and  Private  Smart  Contracts</h2>
            <p class="text-[#eee] font-light text-md">
               Most centralized exchanges allow you to deposit funds via your bank account, credit card, or debit card to purchase cryptocurrency. You can then exchange those funds for the cryptocurrency of your choosing. 
               While some offer only simple market orders, other exchanges will allow you to set more advanced order types, including limit and stop orders.
            </p>
         </div>
      </div>
   </div>
</template>

<script>

export default {
   name:'Banner',
}

</script>

<style lang="css" scoped>
   .animate {
      animation: rotate 20s ease-in-out infinite;
   }

   .animate-fast {
      animation: rotate-fast 30s ease-in-out infinite;
   }

   @keyframes rotate {
      from {
         transform: rotate(0deg);
      }
      to {
         transform: rotate(360deg);
      }
   }

   @keyframes rotate-fast {
      from {
         transform: rotate(0deg);
      }
      to {
         transform: rotate(360deg);
      }
   }
</style>