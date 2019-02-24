<template>
  <div class="product pt-5">
    <h1 v-text="title"></h1>
    <h2 v-text="prdId"></h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";


@Component({
  components: {
    // ImageSwiper
  }
})
export default class Products extends Vue {
  title: string = "Unknow";
  prdId: string = "";
  created() {
    
    this.prdId = this.$route.params.id;

    
  }

}
</script>
