<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-3">
        <h4>{{ $store.getters.userPrice }}</h4>
        <div class="form-group">
          <input type="text" name="form-control" v-model="newPrice" />
        </div>
        <button @click="setNewPrice" class="mt-3 btn btn-primary btn-sm me-2">
          Set Price
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import childA from "@/components/childA";
export default {
  components: {
    childA,
  },
  data() {
    return {
      newPrice: 0,
    };
  },
  methods: {
    setNewPrice() {
      // this.$store.state.incoming_price = this.newPrice;
      this.$store.commit("setIncomingPrice", this.newPrice);
    },
  },
  created() {},
};
</script>

