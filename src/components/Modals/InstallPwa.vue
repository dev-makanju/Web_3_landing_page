<template>
  <div :class="['bg-white p-2 rounded-2xl fixed bottom-3 flex flex-col translate-x-[-400px] duration-500', shown ? 'translate-x-2':'' ]">
    <!--  -->
   <h1 class="text-black font-bold pt-2 pb-2 text-center">Add app to home screen ?</h1>
   <div class="flex flex-row justify-between items-center gap-2">
      <button class="p-3 rounded-2xl bg-s-purple border-none font-light text-white" @click="installPWA">
         Install!
      </button>
      <button class="p-3 rounded-2xl bg-s-purple border-none text-white font-light" @click="dismissPrompt">
         No, thanks
      </button>
   </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    shown: false,
  }),

  beforeMount() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      this.installEvent = e
      this.shown = true
    })
  },

  methods: {
    dismissPrompt() {
      this.shown = false
    },

    installPWA() {
      this.installEvent.prompt()
      this.installEvent.userChoice.then((choice) => {
        this.dismissPrompt() // Hide the prompt once the user's clicked
        if (choice.outcome === 'accepted') {
          // Do something additional if the user chose to install
        } else {
          // Do something additional if the user declined
        }
      })
    },
  }
}
</script>