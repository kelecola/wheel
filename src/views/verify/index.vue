<!-- Rem -->
<template>
  <div class="verify_wrapper">
    <div class="v_top">
      <div class="v_top_title1">{{numberStr}}</div>
      <div class="v_top_title2">{{title}}</div>
    </div>
    <div class="v_body">
      <div class="row1">
        <div class="row1_left"></div>
        <div class="row1_right">
          <span>总扫码人数</span>
          <span class="row1_number">{{scanNum}}</span>
          <span>人</span>
        </div>
      </div>
      <div class="row2">药品被多人验证</div>
      <div class="row3">
        <div class="row3_left"></div>
        <div class="row3_right">{{row3}}</div>
      </div>
      <div class="row4">{{`有效期至：${validTime}`}}</div>
    </div>
    <div class="v_info">
      <div class="v_title">验证明细</div>
      <div class="v_pro"></div>
      <div class="v_use"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router';
import { verifyArr } from './mock'

export default defineComponent({
  name: 'Question',
  props: {},
  setup() {
    const isFirst = ref(false)
    const numberStr = ref('81006  10750  90274  01875');
    const title = '药品被多人验证'
    const scanNum  = 58
    const validTime = '2024-06-14'
    const row3 = '在有效期内'
    onMounted(() => {
      
    });

    return {
      numberStr,
      title,
      scanNum,
      validTime,
      isFirst,
      verifyArr,
      row3
    };
  },
})
</script>
<style lang="scss">
.verify_wrapper {
  position: relative;
  .v_top {
    width: 100%;
    height: 190px;
    background: url('../../assets/hel8.png') no-repeat;
    background-size: 100%;
    position: relative;
    color: #fff;
    &_title1 {
      position: absolute;
      top: 28px;
      left: 42px;
      color: #fff;
      font-size: 16px;
    }
    &_title2 {
      position: absolute;
      top: 60px;
      left: 16px;
      color: #fff;
      font-size: 25px;
      letter-spacing: 1px;
    }
  }
  .v_body {
    position: absolute;
    top: 130px;
    left: 0;
    right: 0;
    margin: auto;
    width: calc(100% - 40px);
    height: 170px;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 8px;
    .row1 {
      display: flex;
      align-items: center;
      
      .row1_left {
        height: 40px;
        width: 40px;
        background: url('../../assets/hel10.jpg') no-repeat;
        background-size: contain;
      }
      .row1_right {
        span {
          line-height: 24px;
          font-size: 16px;
          font-weight: bold;
          letter-spacing: 2px;
          color: rgba(0,0,0,0.9)
        }
        .row1_number {
          line-height: 24px;
          color: rgb(229, 180, 80);
          font-weight: 400;
        }
      }
      
    }
    
    .row2 {
      font-size: 14px;
      color: #909090;
      margin-left: 40px;
      line-height: 24px;
    }
    .row3 {
      display: flex;
      align-items: center;
      .row3_left {
        height: 38px;
        width: 38px;
        background: url('../../assets/hel11.jpg') no-repeat;
        background-size: contain;
      }
      .row3_right {
        line-height: 24px;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 2px;
        margin-left: 2px;
        color: rgba(0,0,0,0.9)
      }
    }
    
    .row4 {
      font-size: 14px;
      color: #909090;
      margin-left: 40px;
      line-height: 24px;
    }
  }
  .v_info {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    margin-top: 128px;
    .v-title {
      font-size: 20px;
      font-weight: bold;
      color: rgba(0,0,0,0.9);
    }
  }
}

</style>
