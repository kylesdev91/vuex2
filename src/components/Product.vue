<template>
  <div>
    {{ product.name }}
    {{ product.price }}
    <button @click="deleteProduct">Delete</button>
  </div>
</template>

<script>
export default {
  props: ["product"],

  methods: {
    // C R U DELETE
    deleteProduct() {
      this.$store.dispatch("deleteProduct", this.product);
    },
  },
};
</script>

<style></style>
