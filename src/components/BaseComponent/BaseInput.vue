<template>
   <div class="relative w-full">
      <input class="p-4 pl-6 rounded-4xl  outline-[#F8921C]" :type="types" />
      <img class="absolute top-[14px]  w-[40px] left-[6px] bg-[#F8921C] rounded-full p-2" :src="`@/assets/Logos/${icon}.svg`" onerror="this.style.display='none'" alt="">
      <div class="absolute top-[14px] w-[40px] right-[6px]  p-2">{{ value }}</div>
   </div>
</template>

<script>
export default {
   name: 'BaseInput',
   props: {
      /**
       * The name for the button
       */
      types: {
         type: String,
         default: 'text',
      },
      icon: {
         type: String,
         default: 'Logo1.svg'
      }
   },
   data: () => ({
      value: '0.0'
   }),
}
</script>
