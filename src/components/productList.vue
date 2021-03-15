<template>
  <h3>Ürün Listesi</h3>

  <ul class="list-group">
    <product-list-item />
  </ul>
</template>
<script>
import productListItem from "@/components/productListItem";
export default {
  components: {
    productListItem,
  },
};
</script>