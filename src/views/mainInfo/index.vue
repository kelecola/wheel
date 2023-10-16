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
      <div class="info_wrapper_drug_item"></div>
    </div>
    <div class="info_wrapper_footer"></div>
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
    margin: 0 12px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 6px;
    z-index: 9999;
    margin-top: -12px;
  }
}

</style>
