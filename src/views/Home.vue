<template>
  <div class="home d-flex">
    <image-swiper :imgs="deskImgs" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ImageSwiper from "@/components/ImageSwiper.vue"; // @ is an alias to /src


@Component({
  components: {
    ImageSwiper
  }
})
export default class Home extends Vue {
  deskImgs: any[] = []

  created() {
    this.deskImgs = Array.from(Array(5).keys()).map( (img)=> require(`@/assets/home/hp${img+1}.jpg`));
  }
}
</script>

<style lang="sass">
.home, .swiper
  flex: 1
.swiper
  .imground
    box-shadow: 0 0 10vh #000 inset
</style>
