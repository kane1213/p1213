<template>
  <div class="product">
    <mt-index-list>
      <mt-index-section v-for="(prds, k) in products" :key="k" :index="keyName[k].name">
        <img class="section-icon position-absolute" :src="keyName[k].img" />
        <mt-cell v-for="p in prds" :title="p.name" :key="p.id" :to="'/detail/' + p.id" :is-link="true">
          
        </mt-cell>
      </mt-index-section>
    </mt-index-list>
    <div ></div>
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
  productable: object = {}
  keyName:Object = {
    1: {name: "麵包", img: require("@/assets/images/icon1.png")},
    2: {name: "蛋糕", img: require("@/assets/images/icon2.png")},
    3: {name: "飲品", img: require("@/assets/images/icon3.png")},
  };
  products:[object] = [
    {
      id: '0001',
      name: '原味貝果',
      kind: 1,
      create_date: '2019-01-01 12:30:01',
    },
    {
      id: '0002',
      name: '藍莓貝果',
      kind: 1,
      create_date: '2019-01-01 12:30:02',
    },
    {
      id: '0003',
      name: '巧克力貝果',
      kind: 1,
      create_date: '2019-01-01 12:30:03',
    },
    {
      id: '0004',
      name: '蔥花乳酪貝果',
      kind: 1,
      create_date: '2019-01-01 12:30:04',
    },
    {
      id: '0005',
      name: '雙色貝果',
      kind: 1,
      create_date: '2019-01-01 12:30:05',
    },
    {
      id: '0006',
      name: '巧克力蛋糕',
      kind: 2,
      create_date: '2019-01-01 12:30:06',
    },
    {
      id: '0007',
      name: '千層蛋糕',
      kind: 2,
      create_date: '2019-01-01 12:30:07',
    },
    {
      id: '0008',
      name: '起司蛋糕',
      kind: 2,
      create_date: '2019-01-01 12:30:08',
    },
    {
      id: '0009',
      name: '美式咖啡',
      kind: 3,
      create_date: '2019-01-01 12:30:09',
    },
    {
      id: '0010',
      name: '拿鐵咖啡',
      kind: 3,
      create_date: '2019-01-01 12:30:10',
    },
    {
      id: '0011',
      name: '卡布奇諾',
      kind: 3,
      create_date: '2019-01-01 12:30:11',
    },
    {
      id: '0012',
      name: '火腿貝果',
      kind: 1,
      create_date: '2019-01-01 12:30:12',
    },
    {
      id: '0013',
      name: '鮪魚貝果',
      kind: 1,
      create_date: '2019-01-01 12:30:13',
    },
    {
      id: '0014',
      name: '起士貝果',
      kind: 1,
      create_date: '2019-01-01 12:30:14',
    }
  ];


  created() {
    // var _this = this;
    // this.$http.get("http://kane1213.synology.me/maysbagel/api/?products&page=1").then((res)=>{
    //   this.updateProductAble(res.data.Data);
    // });
    this.products = _.groupBy(this.products, "kind");
    console.log(this.products);
  }

  updateProductAble ($data: any) {
    
    this.productable = $data;
  }
}
</script>

<style lang="sass">
  .product
    padding-top: 55px
  .mint-indexsection
    position: relative
    .section-icon
      width: 32px
      height: 32px
      left: 5px
      top: 5px
    p.mint-indexsection-index
      padding-left: 42px
</style>
