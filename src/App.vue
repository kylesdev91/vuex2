<template>
  <div id="app">
    <h1>Products</h1>
    <product-list />
    <product-form />
  </div>
</template>

<script>
import ProductForm from "./components/ProductForm.vue";
import ProductList from "./components/ProductList.vue";
export default {
  name: "app",
  components: {
    ProductList,
    ProductForm,
  },
};
</script>

<style>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
