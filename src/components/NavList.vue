<template>
  <nav :class="{'nor': $route.name!='home'}" class="navbar navbar-expand-lg navbar-light fixed-top">
    <button v-if="$route.name!='home'" @click.stop="$router.go(-1)">back</button>
    <a class="navbar-brand text-white" href="#">
      May's Bagel Shop <img src="@/assets/tb.png" width="30" height="30" alt="">
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

        <li class="nav-item" v-for="r in $router.options.routes">
          <router-link :to="r.path" v-text="r.name">Home</router-link>
        </li>

        <!-- <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products">Products</router-link>
        </li> -->
      </ul>
    </div>

  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- @import "@/assets/style/common.sass" -->
<style scoped lang="sass">
@import '@/assets/style/common.sass';
h3
  margin: 40px 0 0
ul
  list-style-type: none
  padding: 0
  li
    display: inline-block
    margin: 0 10px
    a
      color: white
      font-weight: bold
a
  text-shadow: 0 0 5px #000

nav
  display: flex
  justify-content: space-between
  button
    display: none
  @include breakpoint(mobile)
    button
      display: block
    .navbar-brand
      font-size: .8rem
  &.nor
    @include breakpoint(mobile)
      background-color: rgba( 255, 255, 255, .8)


</style>
