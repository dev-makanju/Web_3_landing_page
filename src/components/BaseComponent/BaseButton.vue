<template>
   <button
      :class="['btn-large' , size ? 'btn-small' : '']"
      @click="clickHandler">
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
         type: Boolean,
         default: false,
      },
      /**
       * get called when the user clicked the button
       */
      clickHandler: {
         type: Function,
         default: e => {
            console.log('Button Clicked' , e.target)
         }
      }
   },
}
</script>
