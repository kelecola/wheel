<template>
  <div class="info_wrapper">
    <div class="info_wrapper_header">
      <div class="info_wrapper_header_left">
        <img class="image" src="../../assets/hel4.jpg" />
      </div>
      <div class="info_wrapper_header_right">
        <img class="image" src="../../assets/hel3.jpg" />
      </div>
    </div>
    <div class="info_wrapper_body">
      <div class="info_wrapper_body_boxs">
        <number-item></number-item>
      </div>
    </div>
    <div class="info_wrapper_drug_wrapper">
      <div class="info_wrapper_drug_top">
        <div class="info_wrapper_drug_left">
          <div class="title">
            片仔癀
          </div>
          <div class="box">
            <div class="item_wrapper">
              <div class="box_label">药品规格：</div>
              <div class="box_item">1粒/盒</div>
            </div>
            <div class="item_wrapper">
              <div class="box_label">生产厂家：</div>
              <div class="box_item">漳州片仔癀药业股份有限公司</div>
            </div>
          </div>
        </div>
        <div class="info_wrapper_drug_right">
          <div class="info_wrapper_drug_view">
            <div class="info_wrapper_drug_place"></div>
            <img class="info_wrapper_drug_img" />
          </div>
        </div>
      </div>
      <div class="info_wrapper_drug_bottom">
        <button class="info_wrapper_drug_button">药品追溯信息</button>
        <button class="info_wrapper_drug_button">添加到用药助理</button>
      </div>
    </div>
    <div class="info_wrapper_nav1_wrapper">
      <div class="info_wrapper_nav1">
        <div class="info_wrapper_nav1_item">
          <div class="item_pic1">
          </div>
          <div class="item_2">服用说明</div>
          <div class="item_3">专业用药指导</div>
        </div>
        <div class="info_wrapper_nav1_item">
          <div class="item_pic2">
          </div>
          <div class="item_2">咨询医生</div>
          <div class="item_3">7*24h极速接诊</div>
        </div>
        <div class="info_wrapper_nav1_item">
          <div class="item_pic3">
            <img />
          </div>
          <div class="item_2">用药助理</div>
          <div class="item_3">药品管理提醒</div>
        </div>
        <div class="info_wrapper_nav1_item">
          <div class="item_pic4">
          </div>
          <div class="item_2">就医挂号</div>
          <div class="item_3">多平台号源共享</div>
        </div>
      </div>
    </div>
    
    <div class="info_wrapper_nav2">
      <img style="height: 100%;" src="../../assets/hel2.jpg" />
    </div>
    <div class="info_wrapper_footer">
      <div class="info_wrapper_footer_item">
        本功能由 阿阿健康，
        <div style='height:22px;width:22px;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABt0lEQVR4nO2WQU4CMRiF/+EC6gnEEzg3oF0bE1y7UBPdywkc3ehObuARdOGamRsIJ1BuMO50NX6tEGPbaWxigMV8yctry+vPAwIhkzXTFegKbG6Bsixz7B4p8ZmiM6218WX2ARl3qURktMy6xAqUmJJ23hi6h5vsK9aXdiqyGvfIUBCGNlgUZtr7KVmX4KEhZWhK1iV4aEgZmpJ1CR4aUoamZF2Ch4aUoSlZl+ChgaHma7OP2phrrfsCZGtsC7UxI5vjHrEC5sIT2kUu70gxdIqbrJLvbKjEHA2XWZcMrZXNLcDbmmOPqC8+NTriba0EyDZYFLIZ5hE8NDD0BctRGzVDd3CTvcM+UJAsyz6VUrcsPWIF/vyqyBYicmX2rJVwhA7ZP+NR7IAQDGqwKDyBvU+2EL8AW12xb1iPWI9xDzsgxOJiFIba+2QLiRe41loXEsAOCLG4GIWh9j7ZIZ/zBZ/zAWslHCEeXlGByWRy0+v1TiiwW/5jgUpEBqiNuf75KT7Gztlr1ko4QuxsASX8g2Jd4x6xAjk2RgPkMkOnDJ3iv+DeNjZGlzxe41FaC6yKrkBXYO0FvgDfB9whU14czwAAAABJRU5ErkJggg=="); background-position: 0% 0%; background-size: 100% 100%; background-repeat: no-repeat;'  />
        <!-- <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABt0lEQVR4nO2WQU4CMRiF/+EC6gnEEzg3oF0bE1y7UBPdywkc3ehObuARdOGamRsIJ1BuMO50NX6tEGPbaWxigMV8yctry+vPAwIhkzXTFegKbG6Bsixz7B4p8ZmiM6218WX2ARl3qURktMy6xAqUmJJ23hi6h5vsK9aXdiqyGvfIUBCGNlgUZtr7KVmX4KEhZWhK1iV4aEgZmpJ1CR4aUoamZF2Ch4aUoSlZl+ChgaHma7OP2phrrfsCZGtsC7UxI5vjHrEC5sIT2kUu70gxdIqbrJLvbKjEHA2XWZcMrZXNLcDbmmOPqC8+NTriba0EyDZYFLIZ5hE8NDD0BctRGzVDd3CTvcM+UJAsyz6VUrcsPWIF/vyqyBYicmX2rJVwhA7ZP+NR7IAQDGqwKDyBvU+2EL8AW12xb1iPWI9xDzsgxOJiFIba+2QLiRe41loXEsAOCLG4GIWh9j7ZIZ/zBZ/zAWslHCEeXlGByWRy0+v1TiiwW/5jgUpEBqiNuf75KT7Gztlr1ko4QuxsASX8g2Jd4x6xAjk2RgPkMkOnDJ3iv+DeNjZGlzxe41FaC6yKrkBXYO0FvgDfB9whU14czwAAAABJRU5ErkJggg=="/> -->
        <span style='font-weight: bold;margin-right: 2px;'>扫码放心</span>
        追溯平台提供
      </div>
      <div class="info_wrapper_footer_item">"医生科普" 与 "患者问答"板块内容由第三方提供</div>
      <div class="info_wrapper_footer_item">如有问题可联系平台客服 010-95000011</div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NumberItem from './NumberItem.vue'
import { useRouter } from "vue-router";
import { Toast } from 'vant';
import { getProductById } from './request'

export default defineComponent({
  name: 'Info',
  props: {},
  components: {
    NumberItem
  },
  setup() {
    const detail = ref('');
    const identity = ref('');
    const phone = ref('');

    const curGetProductById = async (params: any) => {
      await getProductById(params)
    }


    return {
      detail
    };
  }
})
</script>

<style lang="scss" scoped>
.info_wrapper {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,微软雅黑,Arial,sans-serif;
  .info_wrapper_header {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 700;
    background-color: #1e6ffc;
    box-sizing: border-box;
    .image {
      height: 0.8rem;
    }
    .info_wrapper_header_left {
      display: flex;
      align-items: center;
    }
    .info_wrapper_header_right {

    }
    
  }
  .info_wrapper_body {
    width: 100%;
    height: 240px;
    background-color: #1e6ffc;
    padding: 10px;
    padding-bottom: 20px;
    box-sizing: border-box;
    margin-top: -1px;
    .info_wrapper_body_boxs {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      background: url('../../assets/hel1.png') no-repeat;
      background-size: 100%;
    }
  }
  .info_wrapper_drug_wrapper {
    width: calc(100% - 24px);
    height: 210px;
    padding: 24px 16px;
    margin: 0 10px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 6px;
    z-index: 9999;
    margin-top: -10px;
    .info_wrapper_drug_top {
      width: 100%;
      height: 76%;
      display: flex;
      .info_wrapper_drug_left {
        width: 74%;
        height: 100%;
        display: block;
        .title {
          color: rgba(0,0,0,0.9);
          margin-bottom: 16px;
          font-weight: 700;
          font-size: 22px;
        }
        .box {
          display: flex;
          flex-direction: column;
          line-height: 22px;
          font-weight: normal;
          .item_wrapper {
            font-size: 16px;
            color: rgb(148, 142, 151);
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            .box_label {
              font-size: 16px;
              width: 90px;
            }
            .box_item {
              font-size: 16px;
              flex: 1 1 0%;
            }
          }
        }
      }
      .info_wrapper_drug_right {
        width: 26%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
        .info_wrapper_drug_view {
          width: 320px;
          height: 240px;
          display: inline-block;
          overflow: hidden;
          position: relative;
          .info_wrapper_drug_place {
            height: 240px;
            width: 88px;
            background-image: url('https://cnwmm.org/prod-api/profile/upload/2023/05/22/ee352095-942b-4999-aa6f-52aa7319494b.png');
            background-position: center center;
            background-size: contain;
            background-repeat: no-repeat;
          }
          .info_wrapper_drug_img {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            /* border: 1px solid red; */
            opacity: 0;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .info_wrapper_drug_bottom {
      width: 100%;
      height: 24%;
      display: flex;
    }
  }
  .info_wrapper_drug_bottom {
    width: calc(100%);
    height: 24%;
    display: flex;
    justify-content: space-between;
    .info_wrapper_drug_button {
      width: 150px;
      font-size: 16px;
      border-radius: 20px;
      margin-top: 10px;
      letter-spacing: 1px;
      line-height: 1.8;
      padding: 0px;
      color: #007aff;
      border: 1px solid #007aff;
      background-color: rgba(0,0,0,0);
      display: inline-block;
    }
  }
  .info_wrapper_nav1_wrapper {
    width: calc(100% - 24px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
  }
  .info_wrapper_nav1 {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    flex: 1;
    background-color: #fff;
    padding: 0 12px;
    margin-top: 12px;
    .info_wrapper_nav1_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 15px 0;
    }
    .item_pic1 {
      height: 24px;
      width: 24px;
      background: url('../../assets/icon/shuoming.png') no-repeat;
      background-size: contain;
    }
    .item_pic2 {
      height: 24px;
      width: 24px;
      background: url('../../assets/icon/shuoming.png') no-repeat;
      background-size: contain;
    }
    .item_pic3 {
      height: 24px;
      width: 24px;
      background: url('../../assets/icon/shuoming.png') no-repeat;
      background-size: contain;
    }
    .item_pic4 {
      height: 24px;
      width: 24px;
      background: url('../../assets/icon/shuoming.png') no-repeat;
      background-size: contain;
    }
    .item_2 {
      font-size: 12px;
      margin-top: 0;
      line-height: 16px;
    }
    .item_3 {
      font-size: 12px;
      color: #8f8f94 /* margin-top: 5px; */;
      line-height: 16px;
    }
  }
  .info_wrapper_nav2 {
    width: 100%;
    height: 90px;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .info_wrapper_footer {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .info_wrapper_footer_item {
      color: rgb(211, 209, 210);
      font-size: 12px;
      line-height: 20px;
      display: flex;
      align-items: center;
    }
  }
  
}

</style>
