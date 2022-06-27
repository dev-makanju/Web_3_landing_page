<template>
  <div>
    <!-- dynamic layout entry -->
    <component :is="layout">
      <router-view v-model:layout.sync="layout"/>
    </component>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
      layout: 'div'
  })
}

</script>

