<script>

// TODO: Add PWA to main.js and add manifest.json
// TODO: Customize the theme
// TODO: Add another page for the coffee lovers


import { watch, watchEffect, onMounted } from "vue";
import getData from "./composables/getCoffee";
import Default from "./layouts/default.vue";
export default {
  setup() {
    const { coffees, loading, errorMessage, getCoffees } = getData();
    watch(coffees, () => console.log("coffees changed"));
    onMounted(() => {
      getCoffees();
    });
    return {
      coffees,
    };
  },
  components: { Default },
};
</script>

<template>
  <div>
    <Default>
      <h1>Coffee Lovers</h1>
      <div v-for="koffee in coffees" :key="koffee.id">
        <h2>{{ koffee.name }}</h2>
        <p>{{ koffee.cost }}</p>
        <p>{{ koffee.available }}</p>
      </div>
    </Default>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
