<template>
  <div class="row">
    <div class="col-auto">
      <input type="text" class="form-control" v-model="productName" />
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-3" @click="addProduct">
        Ekle
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productName: null,
    };
  },
  methods: {
    addProduct() {
      this.$store.commit("addProduct", {
        id: new Date().getTime(),
        title: this.productName,
      });
    },
  },
};
</script>