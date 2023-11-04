<!-- Rem -->
<template>
  <div class="detail_wrapper" style="padding: 16px 12px;">
    <van-collapse v-model="activeNames">
      <van-collapse-item title='基本信息' name="basic">
        <van-cell 
        :key="index"
        :title="item.k"
        :value="item.v"
        v-for="(item, index) in items1"
        ></van-cell>
      </van-collapse-item>
      <van-collapse-item title='生产信息' name="product">
        <van-cell 
        :key="index"
        :title="item.k"
        :value="item.v"
        v-for="(item, index) in items2"
        ></van-cell>
      </van-collapse-item>
      <van-collapse-item title='类别属性' name="type">
        <van-cell 
        :key="index"
        :title="item.k"
        :value="item.v"
        v-for="(item, index) in items3"
        ></van-cell>
      </van-collapse-item>
      <van-collapse-item title='厂商信息' name="info">
        <van-cell 
        :key="index"
        :title="item.k"
        :value="item.v"
        v-for="(item, index) in items4"
        ></van-cell>
      </van-collapse-item>
  </van-collapse>
</div>
  
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router';
import { getDetailById } from './request'

export default defineComponent({
  name: 'Question',
  props: {},
  setup() {
    const activeNames = ref(['']);
    const showPicker = ref(false);

    const detail = reactive<any>({
      scanNumber: 0
    });

    const items1 = reactive<any>([
      {"k":"药品通用名称(中文)","type":"基本信息","v":"片仔癀"},{"k":"药品商品名称 (中文)","type":"基本信息","v":"片仔癀"},{"k":"国家药品标识码","type":"基本信息","v":"04879001203"},{"k":"药品本位码","type":"基本信息","v":"86904879000126"},{"k":"剂型","type":"基本信息","v":"锭剂"},{"k":"制剂规格","type":"基本信息","v":"每粒重3g"},{"k":"包装规格","type":"基本信息","v":"1粒/盒"},{"k":"包装转换比","type":"基本信息","v":"1"},{"k":"药品有效期","type":"基本信息","v":"60月"},{"k":"药品批准文号","type":"基本信息","v":"国药准字Z35020243"},{"k":"药品批准文号有效期","type":"基本信息","v":"2025-03-15 00:00:00"},
    ]);

    const items2 = reactive<any>(
      [{"k":"药品生产日期","type":"生产信息","v":"2023-05-28 00:00:00"},{"k":"药品有效期截至日期","type":"生产信息","v":"2024-06-14 00:00:00"},{"k":"药品生产批号","type":"生产信息","v":"05281000"}]
    )

    const router = useRouter();

    const curGetDetailById = async () => {    
      // loading.value = true;
      const id = router.currentRoute.value.query.code;
      // 12345169829022128471
      // try {
      const { data } = await getDetailById({ genCode: id })
      const { product } = data || {};
      const { drugBatchNumber, manufacturerTime, periodValidityTime } = product;
      items2[0].v = manufacturerTime
      items2[1].v = periodValidityTime
      items2[2].v = drugBatchNumber

    }

    // todo: 改动点
    const items3 = [
      {"k":"药品注册分类","type":"类别属性","v":"中药"},{"k":"国家基本药物标识","type":"类别属性","v":"否"},{"k":"处方药标识","type":"类别属性","v":"否"},
    ];
    const items4 = [
      {"k":"上市许可持有人名称","type":"厂商信息","v":"漳州片仔癀药业股份有限公司"},{"k":"统一社会信用代码 (上市许可持有人)","type":"厂商信息","v":"705210294"},{"k":"生产企业/生产厂名称","type":"厂商信息","v":"漳州片仔癀药业股份有限公司"},{"k":"统一社会信用代码 (药品生产企业/生产厂)","type":"厂商信息","v":"705210294"},
    ];


    const resData: any = reactive({
      activeNames: ['basic'],
      info: [],
      detail,
      items1,
      items2,
      items3,
      items4
    });

    onMounted(() => {
      curGetDetailById();
    });

    return {
      ...toRefs(resData),
    };
  },
})
</script>
<style lang="scss">
.detail_wrapper {
  .van-collapse-item {
    .van-collapse-item__title {
      border-radius: 10px 10px 0 0;
    }
    .van-collapse-item__content {
      .van-cell {
        display: flex;
        font-size: 13px;
        color: #303133;
        .van-cell__title {
          flex: 1;
          margin-right: 36px;
        }
        .van-cell__value {
          flex: 2;
          text-align: left;
          display: flex;
          align-items: center;
          font-size: 13px;
          color: #303133;
        }
      }
      border-radius: 0 0 10px 10px;
    }
    .van-collapse-item__wrapper {
      border: none;
    }
    .van-cell:nth-child(2n+1) {
      background-color: #fbfbfb;
    }
  }
  .van-cell .van-cell--clickable .van-collapse-item__title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    height: 48px;
    line-height: 48px;
    font-size: 15px;
    span {
      font-weight: 500;
    }
  }
  .van-collapse-item {
    border-radius: 10px;
    margin-bottom: 16px;
  }
  .van-collapse-item__content {
    .van-cell {
      .van-cell__title {
        width: 30px;
      }
    }
  }
}

</style>
