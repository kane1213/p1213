<template>
  <div class="swiper">
    <mt-swipe v-if="imgs" :auto="5000">
      <mt-swipe-item v-for="img in imgs" :key="img">
        <div class="imground w-100 h-100" :style="{backgroundImage: `url(${img})`}"></div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// @Component({
//   components: {
//     ImageSwiper
//   }
// })
@Component
export default class ImageSwiper extends Vue {
  @Prop() imgs: [string]
}
</script>
<style lang="sass">
.imground
  background: transparent no-repeat center center / cover;

</style>