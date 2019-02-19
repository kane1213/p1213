<template>
  <div class="product pt-5">
    <!-- <div v-for="(prd,idx) in productable.content" v-text="prd"></div> -->
    <el-table stripe border
      :data="tableData"
      height="250"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

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
  tableData:[object] = [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]

  created() {
    var _this = this;
    console.log(this.productable);
    this.$http.get("http://kane1213.synology.me/maysbagel/api/?products&page=1").then((res)=>{
      this.updateProductAble(res.data.Data);
    });
  }

  updateProductAble ($data: any) {
    
    this.productable = $data;
  }
}
</script>
