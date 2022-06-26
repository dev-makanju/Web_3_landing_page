<template>
   <button
      :style=[] 
      class=""
      @click="onClick">
      {{ name }}
   </button>
</template>

<script>
/**
 *The only true button
 * @displayName Best button
 */

export default {
   name: 'Button',
   props: {
      /**
       * The name for the button
       */
      name: {
         type: String,
         default: 'Submit',
      },
      /**
       * The color for the button
       */
      color: {
         type: String,
         default: '#eee'
      },
      /**
       * @values small, normal , large
       */
      size: {
         type: String,
         default: 'normal',
      },
      /**
       * get called when the user clicked the button
       */
      onClick: {
         type: Function,
         default: e => {
            console.log('Button Clicked' , e.target)
         }
      }
   }

}
</script>

<style>

</style>