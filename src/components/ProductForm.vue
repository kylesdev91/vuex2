<template>
  <div>
    <input type="text" v-model="newProductName" />
    <input type="text" v-model="newProductPrice" />
    <button @click="addNewProductItem">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newProductItem: {},
      newProductPrice: "",
      newProductName: "",
    };
  },
  methods: {
    addNewProductItem() {
      this.newProductItem = {
        name: this.newProductName,
        price: this.newProductPrice,
      };
      // CREATE R U D
      // 1) to call a vuex action, we use a dispatch or map actions
      this.$store.dispatch("addNewProduct", this.newProductItem);
      this.newProductItem = {};
      this.newProductName = "";
      this.newProductPrice = "";
    },
  },
};
</script>

<style></style>
