<!-- Rem -->
<template>
  <div class="verify_wrapper">
    <div v-if="detail?.data?.record?.[1]?.value !== 0" class="v_top">
      <div class="v_top_title1">{{curIds}}</div>
      <div class="v_top_title2">{{title}}</div>
    </div>
    <div v-else class="v_top_new">
      <div class="v_top_title1">{{curIds}}</div>
      <div class="v_top_icon"></div>
      <div class="v_top_title2">追溯码验证通过</div>
    </div>
    <div class="v_body">
      <div class="row1">
        <div v-if="detail?.data?.record?.[1]?.value === 0" class="row1_left_green"></div>
        <div v-else class="row1_left"></div>
        <div class="row1_right">
          <span>总扫码人数</span>
          <span class="row1_number">{{detail?.data?.record?.[1]?.value !== undefined ? detail?.data?.record?.[1]?.value + 1 : ''}}</span>
          <span>人</span>
        </div>
      </div>
      <div class="row2">{{detail?.data?.record?.[1]?.value !== 0 ? '药品被多人验证' : `首次扫码时间${detail?.data?.product?.manufacturerTime || '未知'}，扫码明细见下方`}}</div>
      <div class="row3">
        <div v-if="detail?.data?.record?.[1]?.value === 0" class="row3_left_green"></div>
        <div v-else class="row3_left"></div>
        <div class="row3_right">{{row3}}</div>
      </div>
      <div class="row4">{{`有效期至：${detail?.data?.product?.periodValidityTime || ''}`}}</div>
    </div>
    <div class="v_info">
      <div class="v_title">验证明细</div>
      <van-steps direction="vertical" active="-1">
        <van-step>
          <template #inactive-icon>
            <div class="relative">
              <img src="../../assets/hel9.jpg" />
            </div>
          </template>
          <div class="v_sub_title">生产信息</div>
          <div class="v_sub_info">
            <div>生产厂家</div>
            <div>漳州片仔癀药业股份有限公司</div>
          </div>
          <div class="v_sub_info">
            <div>生产日期</div>
            <div>2023-05-28</div>
          </div>
          <div class="v_sub_info">
            <div>药品批号</div>
            <div>05281000</div>
          </div>
        </van-step>
        <van-step>
          <template #inactive-icon>
            <div class="relative">
              <img src="../../assets/hel9.jpg" />
            </div>
          </template>
          <div class="v_sub_title">使用信息</div>
          <div v-for="(item, index) in detail.data.record" :key="index" class="v_sub_info_wrapper">
            <div v-if="!!item?.value">
              <div class="v_sub_info">
                <div>{{item?.key === 'my' ? '本人扫码' : '有人扫码'}}</div>
                <div>{{`总计扫码${item?.value || '未知'}次`}}</div>
              </div>
            </div>
            <div v-if="!!(item && item.scanAt)">
              <div v-for="(it, i) in item.scanAt" :key="i" class="v_sub_info_items">
                <div class="v_sub_info_items_left">{{ it.addtess }}</div>
                <div class="v_sub_info_items_right">{{ it.time }}</div>
              </div>
            </div>
          </div>
        </van-step>
        <van-step>
          <template #inactive-icon>
            <div class="relative">
              <img src="../../assets/hel9.jpg" />
            </div>
          </template>
          <div class="v_sub_title">药品效期</div>
          <div class="v_sub_info">
            <div>药品效期</div>
            <div>2024-06-14</div>
          </div>
        </van-step>
      </van-steps>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router';
import { verifyArr } from './mock'
import { getVerDetailById } from './request'


export default defineComponent({
  name: 'Question',
  props: {},
  setup() {
    // const record: any[] = ref([]);
    const isFirst = ref(false)
    const title = '药品被多人验证'
    // let scanNum  = 0
    // let validTime = '2024-06-14'
    const row3 = '在有效期内'
    const router = useRouter();
    const detail = reactive<any>({
      data: {
        record: [],
        product: {}
      }
    });

    let curIds = ''
    if (router.currentRoute.value.query.code) {
      curIds = `${router.currentRoute.value.query.code.slice(0, 5)} ${router.currentRoute.value.query.code.slice(5, 10)} ${router.currentRoute.value.query.code.slice(10, 15)} ${router.currentRoute.value.query.code.slice(15, 20)}`
    }

    const curGetDetailById = async () => {    
      const id = router.currentRoute.value.query.code;
      // 12345169829022128471
      const { data } = await getVerDetailById({ genCode: id })
      detail.data = data
      // {
      //   ...data,
      //   record: JSON.parse(JSON.stringify(data?.record)) 
      // }

      // console.log('123123', {
      //   ...data,
      //   record: JSON.parse(JSON.stringify(data?.record)) 
      // });

      
      
      /* eslint-disable */
      // detail.data.record = JSON.parse(JSON.stringify(
      //   Array.from(detail?.data?.record || []).map((item: any) => {
      //   const obj = {
      //     key: item.key,
      //     value: item.value,
      //     scanAt: item.scanAt,
      //   }
      //   return obj;
      // })
      // )) 
      
      
    }
    
    onMounted(() => {
      curGetDetailById()
    });

    return {
      title,
      isFirst,
      verifyArr,
      row3,
      detail,
      curGetDetailById,
      curIds,
    };
  },
})
</script>
<style lang="scss" scoped>
.verify_wrapper {
  ::v-deep([class*='van-hairline']:after) {
    border: 0 dashed var(--van-border-color);
  }

  .relative {
    img {
      height: 24px;
      width: 24px;
    }
  }
  position: relative;
  .v_top_new {
    width: 100%;
    height: 190px;
    background: url('../../assets/hel13.jpg') no-repeat;
    background-size: 100%;
    position: relative;
    color: #fff;
    .v_top_icon {
      position: absolute;
      top: 28px;
      width: 24px;
      height: 18px;
      background: url('../../assets/hel14.png') no-repeat;
      background-size: contain;
      left: 16px;
    }
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
      line-height: 24px;
    }
  }
  .v_info {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    margin-top: 128px;
    .v_title {
      font-size: 20px;
      font-weight: bold;
      color: rgba(0,0,0,0.9);
      margin-bottom: 12px;
    }
  }
  .v_sub_title {
    color: #41485d;
    font-size: 20px;
    line-height: 28px;
    margin-top: -7px;
  }
  .v_sub_info {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    line-height: 32px;
  }
  .v_sub_info_items {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
}

</style>
