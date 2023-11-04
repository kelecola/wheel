<template>
  <div class="info_wrapper">
    <!-- <van-loading v-model:show="loading" text="加载中..." :fullscreen="true" /> -->
    <div class="info_wrapper_header">
      <div class="info_wrapper_header_left">
        <img class="image" src="../../assets/hel4.jpg" />
      </div>
      <div class="info_wrapper_header_right">
        <img class="image" src="../../assets/hel3.jpg" />
      </div>
    </div>
    <div class="info_wrapper_body">
      <div v-if="detail.scanNumber === 0 || detail.scanNumber === 1" class="info_wrapper_body_boxs_new">
        <div class="info_wrapper_body_boxs_code"></div>
        <div class="v_top_title1">{{curIds}}</div>
        <div class="info_line_wrapper">
          <div class="info_line1_green">
            <span>药品追溯码验证通过</span>
          </div>
          <div class="info_line2">
            <span>总扫码人数</span>
            <span class="info_line2_number_green">{{detail.scanNumber === 0 ? 1 : detail.scanNumber}}</span>
            <span>人，且在有效期内</span>
          </div>
          <div class="info_line3">
            <div class="info_button" @click="toVerify">验证详情 ></div>
          </div>
        </div>
      </div>
      <div v-else class="info_wrapper_body_boxs">
        <div class="v_top_title1">{{curIds}}</div>
        <div class="info_line_wrapper">
          <div class="info_line1">
            <span>药品被多人验证</span>
          </div>
          <div class="info_line2">
            <span>药品已被</span>
            <span class="info_line2_number">{{detail.scanNumber === 0 ? 1 : detail.scanNumber}}</span>
            <span>人扫码查询</span>
          </div>
          <div class="info_line3">
            <div class="info_button" @click="toVerify">验证详情 ></div>
          </div>
        </div>
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
        <button @click="toDetail" class="info_wrapper_drug_button">药品追溯信息</button>
        <button @click="toDetail" class="info_wrapper_drug_button">添加到用药助理</button>
      </div>
    </div>
    
    <div class="info_wrapper_nav1_wrapper">
      <div class="info_wrapper_nav1">
        <div class="info_wrapper_nav1_item">
          <div class="item_pic1">
          </div>
        </div>
        <div class="info_wrapper_nav1_item">
          <div class="item_pic2">
          </div>
        </div>
      </div>
    </div>
    
    <div class="info_wrapper_nav2">
      <img style="height: 100%;" src="../../assets/hel2.jpg" />
    </div>
    <div class="info_wrapper_footer">
      <div class="info_wrapper_footer_item">
        本功能由 阿阿健康，
        <div style='height: 22px;width: 80px;background-image: url("data:image/jpeg;base64,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"); background-position: 0% 0%; background-size: 100% 100%; background-repeat: no-repeat;'  />
        追溯平台提供
      </div>
      <div class="info_wrapper_footer_item">"医生科普" 与 "患者问答"板块内容由第三方提供</div>
      <div class="info_wrapper_footer_item">如有问题可联系平台客服 010-95000011</div>
    </div>
    <div class="info_wrapper_empty"></div>
    <div class="info_wrapper_fix" >
      <div class="info_wrapper_fix_item">
        <div class="info_wrapper_fix_item_forClick" @click="toScan"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, ref, reactive, onMounted } from 'vue'
import NumberItem from './NumberItem.vue'
// import Qrcode from './QrcodeReader.vue'
import { useRouter } from "vue-router";
import { Toast } from 'vant';
import { getDetailById, apiScan } from './request'
import { Html5Qrcode } from 'html5-qrcode';

export default defineComponent({
  name: 'Info',
  props: {},
  components: {
    NumberItem,
  },
  
  setup() {
    const detail = reactive<any>({
      scanNumber: 0
    });
    
    const loading = ref(false); // 控制Loading组件的显示与隐藏

    // let cameraId = ref('');
    // let devicesInfo = ref<any>('');
    let html5QrCode = ref<any>(null);

    const router = useRouter();

    let curIds = ''
    if (router.currentRoute.value.query.code) {
      curIds = `${router.currentRoute.value.query.code.slice(0, 5)}\u00A0\u00A0\u00A0${router.currentRoute.value.query.code.slice(5, 10)}\u00A0\u00A0\u00A0${router.currentRoute.value.query.code.slice(10, 15)}\u00A0\u00A0\u00A0${router.currentRoute.value.query.code.slice(15, 20)}`
    }

    console.log('curIds', curIds);

    const curApiScan  = async () => {
      const id = router.currentRoute.value.query.code;
      const { data, code } = await apiScan({genCode: id})
    }
    

    const curGetDetailById = async () => {    
      // loading.value = true;
      const id = router.currentRoute.value.query.code;
      // 12345169829022128471
      // try {
      const { data } = await getDetailById({ genCode: id })
      const { scanNumber } = data || {};
      detail.scanNumber = scanNumber;
      // }  finally {
      //   loading.value = false;
      // }
    }
    
    const toScan = () => {
      const id = router.currentRoute.value.query.code;
      console.log('toScan !!!');
      router.push(`/s?code=${id}`)
    }
  
    const toDetail = () => {
      const id = router.currentRoute.value.query.code;
      router.push(`/d?code=${id}`)
    }

    const toVerify = () => {
      const id = router.currentRoute.value.query.code;
      router.push(`/v?code=${id}`)
    }


    onMounted(() => {
      curGetDetailById()
      curApiScan();
    });


    return {
      detail,
      toDetail,
      toVerify,
      toScan,
      curIds,
      curApiScan,
      curGetDetailById,
      loading
    };
  },
  
})
</script>

<style lang="scss" scoped>
.v_top_title1 {
  font-size: 14px;
  position: absolute;
  top: 64px;
  left: 18px;
  color: rgba(0, 0, 0, 0.6)
}
.info_line_wrapper {
  position: absolute;
  bottom: 20px;
  left: 16px;
}
.info_line1_green{
  font-size: 20px;
  color: #5CC576;
  font-family: '苹方-简';
}
.info_line2_number_green {
  color: #5CC576
}
.info_line1 {
  font-size: 20px;
  color: rgb(235, 182, 47);
  font-family: '苹方-简';
}
.info_line2 {
  color: rgb(148, 142, 151);
  margin-top: 6px;
  font-size: 16px;
  .info_line2_number {
    color: rgb(235, 182, 47);
  }
}
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
      position: relative;
    }
    .info_wrapper_body_boxs_new {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      background: url('../../assets/hel12.jpg') no-repeat;
      background-size: 100%;
      position: relative;
    }
    .info_wrapper_body_boxs_code {
      height: 54px;
      width: 224px;
      top: 4px;
      left: 4px;
      position: absolute;
      background: url('../../assets/code.jpg') no-repeat;
      background-size: cover;
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
      height: 88px;
      width: 175px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 15px 0 0 0;
    }
    .item_pic1 {
      height: 100%;
      width: 100%;
      background: url('../../assets/icon/left.jpg') no-repeat;
      background-size: contain;
    }
    .item_pic2 {
      height: 100%;
      width: 100%;
      background: url('../../assets/icon/right.jpg') no-repeat;
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
  .info_wrapper_empty {
    height: 76px;
  }
  .info_wrapper_fix {
    height: 76px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    .info_wrapper_fix_item {
      background: url('../../assets/icon/footer.jpg') no-repeat;
      background-size: 100%;
      height: 100%;
      .info_wrapper_fix_item_forClick {
        position: fixed;
        height: 78px;
        width: 80px;
        z-index: 99999;
        left: calc(50% - 40px);
      }
    }
  }
  .info_button {
    border-radius: 20px;
    margin-top: 12px;
    margin-left: 0px;
    padding: 0px 8px;
    display: inline-block;
    line-height: 2.3;
    font-size: 13px;
    color: #fff;
    background-color: #007aff;
  }
}
#reader {
  transform: translateY(-50%);
}

</style>
