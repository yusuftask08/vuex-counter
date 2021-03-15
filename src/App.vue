*2+310n k8)=/<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-4 offset-2">
        <newProductForm />
        <product-list />
      </div>
    </div>
  </div>
</template>
<script>
import newProductForm from "@/components/newProductForm";
import productList from "@/components/productList";

export default {
  components: {
    newProductForm,
    productList,
  },
};
</script>

