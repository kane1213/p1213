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


    <el-row class="mt-5" :gutter="10">
      <el-col :sm="6" :lg="4" hidden-xs-only><div class="grid-content bg-dark text-white">1</div></el-col>
      <el-col :sm="6" :lg="4"><div class="grid-content bg-primary">2</div></el-col>
      <el-col :sm="6" :lg="4"><div class="grid-content bg-primary">2</div></el-col>
      <el-col :sm="6" :lg="4"><div class="grid-content bg-primary">2</div></el-col>
      <el-col :sm="6" :lg="4"><div class="grid-content bg-primary">2</div></el-col>
      <el-col :sm="6" :lg="4"><div class="grid-content bg-primary">2</div></el-col>
    </el-row>

    <div class="mt-5">
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <i class="el-icon-loading"></i>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>

    <div class="mt-5">
      <el-row>
        <el-col :span="12">
          <el-button type="primary" icon="el-icon-search" round disabled>Search</el-button>
        </el-col>
        <el-col :span="12">
          <el-button-group>
            <el-button size="medium" type="primary" icon="el-icon-arrow-left" round> next page</el-button>
            <el-button size="medium" type="primary" round>previous page<i class="el-icon-arrow-right el-icon--right"></i></el-button>

          </el-button-group>
        </el-col>
      </el-row>
    </div>
    
    <div class="mt-5">
      <el-row>
        <el-col :span="8">
          <el-radio v-model="radio" label="1">备选项</el-radio>
          <el-radio v-model="radio" label="2">备选项</el-radio>
        </el-col>
        <el-col :span="8">
          <el-radio-group v-model="radio2">
            <el-radio label="1">One</el-radio>
            <el-radio label="3">Three</el-radio>
            <el-radio label="5">Five</el-radio>
          </el-radio-group>
        </el-col>
        <el-col :span="8">
          <el-radio-group v-model="radio3">
            <el-radio-button label="1">台北</el-radio-button>
            <el-radio-button label="2">台中</el-radio-button>
            <el-radio-button label="3">台南</el-radio-button>
            <el-radio-button label="4">高雄</el-radio-button>
          </el-radio-group>
        </el-col>
      </el-row>
      
    </div>

    <div class="mt-3">
      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    </div>
    <el-dialog center title="提示" :visible.sync="dialogVisible" width="30%"
    :before-close="handleClose">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>

  <div class="mt-2">

    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="一致性 Consistency" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
      <el-collapse-item title="可控 Controllability" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>

  </div>
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
  radio: string = "2"
  radio2: string = "3"
  radio3: string = "3"
  activeName: string = '2'
  dialogVisible: boolean = false
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
