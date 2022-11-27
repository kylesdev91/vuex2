<template>
  <div>
    <input type="text" v-model="newProductItem" />
    <button @click="addNewProductItem">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newProductItem: "",
    };
  },
  methods: {
    addNewProductItem() {
      // CREATE R U D
      // 1) to call a vuex action, we use a dispatch or map actions
      this.$store.dispatch("addNewProduct", this.newProductItem);
      this.newProductItem = "";
    },
  },
};
</script>

<style></style>
