<template>
    <!-- dynamic layout entry -->
    <component :is="layout">
      <router-view v-model:layout.sync="layout"/>
    </component>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
      layout: 'div'
  })
}

</script>

