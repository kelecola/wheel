<template>
  <div class="sys_wrapper">
    <van-nav-bar title="页面配置"></van-nav-bar>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="vCode"
          type="password"
          name="vCode"
          label="约定码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="detail.drugBatchNumber"
          name="drugBatchNumber"
          label="批号"
          placeholder="2211189"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="detail.drugSpecifications"
          name="drugSpecifications"
          label="药品规格"
          placeholder="1粒/盒"
          :rules="[{ required: true, message: '请填写生产厂家' }]"
        />
        <van-field
          v-model="detail.manufacturer"
          name="manufacturer"
          label="生产厂家"
          placeholder="漳州片仔癀药业股份有限公司"
          :rules="[{ required: true, message: '请填写生产厂家' }]"
        />
        <van-field
          v-model="detail.manufacturerTime"
          name="manufacturerTime"
          label="生产日期"
          placeholder="2023-01-03"
          :rules="[{ required: true, message: '请填写生产日期' }]"
        />
        <van-field
          v-model="detail.periodValidityTime"
          name="periodValidityTime"
          label="药品效期"
          placeholder="2028-01-02"
          :rules="[{ required: true, message: '请填写药品效期' }]"
        />
        <van-field name="sDetail" label="详情配置">
          <template #input>
            <van-switch v-model="sDetail" />
          </template>
        </van-field>

        <van-field name="sAdd" label="是否新增">
          <template #input>
            <van-switch v-model="sAdd" />
          </template>
        </van-field>

        <van-field
          v-if="sAdd"
          v-model="fiveNumber"
          name="fiveNumber"
          label="前五位编号"
          placeholder="81006"
          :rules="[{ required: true, message: '请填写' }]"
        />

        <van-field
          v-if="sAdd"
          v-model="addNumber"
          name="addNumber"
          label="新增数量"
          placeholder="10000"
          :rules="[{ required: true, message: '请填写' }]"
        />
      </van-cell-group>

      <van-cell-group v-if="sDetail" title="基本信息">
        <van-field
          v-model="detail.uName"
          name="uName"
          label="药品通用名称(中文)"
          placeholder="片仔癀"
          :rules="[{ required: true, message: '请填写' }]"
        />
        <van-field
          v-model="detail.nName"
          name="nName"
          label="药品商品名称 (中文)"
          placeholder="片仔癀"
          :rules="[{ required: true, message: '请填写' }]"
        />
        <van-field
          v-model="detail.gcode"
          name="gcode"
          label="国家药品标识码"
          placeholder="04879001203"
          :rules="[{ required: true, message: '请填写' }]"
        />
        <van-field
          v-model="detail.ycode"
          name="ycode"
          label="药品本位码"
          placeholder="86904879000126"
          :rules="[{ required: true, message: '请填写' }]"
        />
        <van-field
          v-model="detail.type"
          name="type"
          label="剂型"
          placeholder="锭剂"
          :rules="[{ required: true, message: '请填写' }]"
        />
        <van-field
          v-model="detail.zsize"
          name="zsize"
          label="制剂规格"
          placeholder="每粒重3g"
          :rules="[{ required: true, message: '请填写' }]"
        />
        <van-field
          v-model="detail.psize"
          name="psize"
          label="包装规格"
          placeholder="1粒/盒"
          :rules="[{ required: true, message: '请填写' }]"
        />
        <van-field
          v-model="detail.rate"
          name="rate"
          label="包装转换比"
          placeholder="1"
          :rules="[{ required: true, message: '请填写' }]"
        />
        <van-field
          v-model="detail.dvalidate"
          name="dvalidate"
          label="药品有效期"
          placeholder="60月"
          :rules="[{ required: true, message: '请填写' }]"
        />
        <van-field
          v-model="detail.dnumber"
          name="dnumber"
          label="药品批准文号"
          placeholder="国药准字Z35020243"
          :rules="[{ required: true, message: '请填写' }]"
        />
        <van-field
          v-model="detail.dnumberValidate"
          name="dnumberValidate"
          label="药品批准文号有效期"
          placeholder="2025-03-15 00:00:00"
          :rules="[{ required: true, message: '请填写' }]"
        />
      </van-cell-group>

      <van-cell-group v-if="sDetail" title="生产信息">
        <van-field
          v-model="detail.manufacturerTime"
          name="manufacturerTime"
          label="药品生产日期"
          placeholder="2023-05-28 00:00:00"
          :rules="[{ required: true, message: '请填写' }]"
        />
        <van-field
          v-model="detail.periodValidityTime"
          name="periodValidityTime"
          label="药品有效期截至日期"
          placeholder="2024-06-14 00:00:00"
          :rules="[{ required: true, message: '请填写' }]"
        />
        <van-field
          v-model="detail.drugBatchNumber"
          name="drugBatchNumber"
          label="药品生产批号"
          placeholder="05281000"
          :rules="[{ required: true, message: '请填写' }]"
        />
      </van-cell-group>

      <van-cell-group v-if="sDetail" title="类别属性">
        <van-field
          v-model="detail.rType"
          name="rType"
          label="药品注册分类"
          placeholder="中药"
          :rules="[{ required: true, message: '请填写' }]"
        />
        <van-field
          v-model="detail.basicCode"
          name="basicCode"
          label="国家基本药物标识"
          placeholder="否"
          :rules="[{ required: true, message: '请填写' }]"
        />
        <van-field
          v-model="detail.dealCodeIcon"
          name="dealCodeIcon"
          label="处方药标识"
          placeholder="否"
          :rules="[{ required: true, message: '请填写' }]"
        />
      </van-cell-group>

      <van-cell-group v-if="sDetail" title="厂商信息">
        <van-field
          v-model="detail.ownCompany"
          name="ownCompany"
          label="上市许可持有人名称"
          placeholder="漳州片仔癀药业股份有限公司"
          :rules="[{ required: true, message: '请填写' }]"
        />
        <van-field
          v-model="detail.nCode"
          name="nCode"
          label="统一社会信用代码 (上市许可持有人)"
          placeholder="705210294"
          :rules="[{ required: true, message: '请填写' }]"
        />
        <van-field
          v-model="detail.companyName"
          name="companyName"
          label="生产企业/生产厂名称"
          placeholder="漳州片仔癀药业股份有限公司"
          :rules="[{ required: true, message: '请填写' }]"
        />
        <van-field
          v-model="detail.dealCode"
          name="dealCode"
          label="统一社会信用代码 (药品生产企业/生产厂)"
          placeholder="705210294"
          :rules="[{ required: true, message: '请填写' }]"
        />
      </van-cell-group>

      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"
          >{{ sAdd ? "创建并导出" : "更新" }}
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, ref, reactive, onMounted, onUnmounted } from "vue";
// import Qrcode from './QrcodeReader.vue'
import axios from "axios";
import { useRouter } from "vue-router";
import { genDetailByBatchNum, genBatchUpdateAndAdd } from "./request";
import { debounce } from "lodash";
import { Toast } from "vant";

const defaultVal = {
  drugBatchNumber: "2211189",
  drugSpecifications: "1粒/盒",
  manufacturer: "漳州片仔癀药业股份有限公司",
  manufacturerTime: "2023-01-03",
  periodValidityTime: "2028-01-02",
  uName: "片仔癀",
  nName: "片仔癀",
  gcode: "04879001203",
  ycode: "86904879000126",
  type: "锭剂",
  zsize: "每粒重3g",
  psize: "1粒/盒",
  rate: "1",
  dvalidate: "60月",
  dnumber: "国药准字Z35020243",
  dnumberValidate: "2025-03-15 00:00:00",
  rType: "中药",
  basicCode: "否",
  dealCodeIcon: "否",
  ownCompany: "漳州片仔癀药业股份有限公司",
  nCode: "705210294",
  companyName: "漳州片仔癀药业股份有限公司",
  dealCode: "705210294",
};

export default defineComponent({
  name: "Info",
  props: {},

  setup() {
    const detail = reactive<any>(defaultVal);
    const vCode = ref("");
    const fiveNumber = ref("");
    const addNumber = ref("");
    const sDetail = ref(false);
    const sAdd = ref(false);
    let devicesInfo = ref<any>("");

    const router = useRouter();

    const getDetail = async () => {
      const {} = await genDetailByBatchNum({
        batchNum: "1111111",
      });
    };

    const onSubmit = async (values: any) => {
      // const {} = await
      console.log("onSubmit !!!", values);
      const {
        vCode,
        drugBatchNumber,
        drugSpecifications,
        manufacturer,
        manufacturerTime,
        periodValidityTime,
        sDetail,
        sAdd,
        fiveNumber,
        addNumber,
        uName,
        nName,
        gcode,
        ycode,
        type,
        zsize,
        psize,
        rate,
        dvalidate,
        dnumber,
        dnumberValidate,
        rType,
        basicCode,
        dealCodeIcon,
        ownCompany,
        nCode,
        companyName,
        dealCode,
      } = values;
      const params = {
        vCode,
        isAdd: sAdd,
        fiveNumber,
        addNumber: Number(addNumber),
        product: {
          genCode: "",
          drugSpecifications,
          manufacturer,
          manufacturerTime,
          periodValidityTime,
          drugBatchNumber,
          h1: "",
          h2: "",
          productImagesUrl: "",
        },
        productAttrs: [
          {
            key: "baiscInfo",
            value: JSON.stringify({
              uName,
              nName,
              gcode,
              ycode,
              type,
              zsize,
              psize,
              rate,
              dvalidate,
              dnumber,
              dnumberValidate,
            }),
            type: "基本信息",
          },
          {
            key: "typeInfo",
            value: JSON.stringify({
              rType,
              basicCode,
              dealCode,
            }),
            type: "类别属性",
          },
          {
            key: "mInfo",
            value: JSON.stringify({
              ownCompany,
              nCode,
              companyName,
              dealCode,
            }),
            type: "厂商信息",
          },
        ],
      };
      const { data, code, msg } = await genBatchUpdateAndAdd(params);

      if (code === "0000") {
        axios
          .post(
            `/api/hel/idToCodeExcel`,
            {
              batchNum: drugBatchNumber,
            },
            {
              responseType: "blob",
            }
          )
          .then(({ data, headers }: any) => {
            const contentDisposition = headers["content-disposition"];
            const fileName = window.decodeURI(contentDisposition.split("=")[1]);
            const blob = new Blob([data]);
            const downloadBlob = (blob: any, fileName: string) => {
              if (blob) {
                // 创建一个URL对象，指向Blob对象
                const url = window.URL.createObjectURL(blob);

                // 创建一个<a>元素，用于触发下载
                const link = document.createElement("a");
                link.setAttribute("href", url);
                link.setAttribute("download", fileName);
                link.style.display = "none";

                // 将<a>元素添加到DOM中，并触发下载
                document.body.appendChild(link);
                link.click();

                // 释放URL对象
                window.URL.revokeObjectURL(url);
              } else {
                message.error("下载失败！");
              }
            };
            downloadBlob(blob, fileName.replace(new RegExp('"', "g"), ""));
          });

        Toast("导出成功！");
      } else {
        Toast("创建成功, 导出失败！");
      }
    };

    onMounted(() => {
      getDetail();
    });

    onUnmounted(() => {});

    return {
      onSubmit,
      sDetail,
      detail,
      sAdd,
      vCode,
      fiveNumber,
      addNumber,
    };
  },
});
</script>

<style lang="scss" scoped>
.sys_wrapper {
}
</style>
