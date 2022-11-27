<template>
  <div>
    <product
      v-for="(product, index) in $store.state.products"
      :key="index"
      :product="product"
    />
  </div>
</template>

<script>
import Product from "./Product.vue";
export default {
  components: {
    Product,
  },
  computed: {
    products() {
      // C READ U D
      return this.$store.state.products;
    },
  },
};
</script>

<style></style>
