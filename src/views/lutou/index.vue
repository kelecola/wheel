<template>
  <div class="info_wrapper">
    <div class="search_wrapper">
        <input :value="val" class="search_wrapper_input" placeholder="请输入完整的标识代码，如：BJ01/0801/10000..." />
        <button class="search_wrapper_button">查询</button>
    </div>
    <div class="body_wrapper">
        <div class="title">野生动物及其制品溯源信息</div>
        <div class="item_wrapper">
            <div class="title_left">制品名称：</div>
            <div class="title_right">片仔癀</div>
        </div>
         <div class="item_wrapper">
            <div class="title_left">制品英文名：</div>
            <div class="title_right">Pien Tze Huang</div>
        </div>
         <div class="item_wrapper">
            <div class="title_left">标识代码：</div>
            <div class="title_right">{{val}}</div>
        </div>
         <div class="item_wrapper">
            <div class="title_left">标识用户：</div>
            <div class="title_right">漳州片仔癀药业股份有限公司</div>
        </div>
         <div class="item_wrapper">
            <div class="title_left">制品规格：</div>
            <div class="title_right">待填</div>
        </div>
         <div class="item_wrapper">
            <div class="title_left">原材料：</div>
            <div class="title_right">麝香(Moschus)</div>
        </div>
         <div class="item_wrapper">
            <div class="title_left">批准文件：</div>
            <div class="title_right">（闽动植）林许（2020）28号</div>
        </div>
         <div class="item_wrapper">
            <div class="title_left">批准时间：</div>
            <div class="title_right">2020</div>
        </div>
         <div class="item_wrapper">
            <div class="title_left">核发单位：</div>
            <div class="title_right">国家林业和草原局全国野生动植物研究与发展中心</div>
        </div>
         <div class="item_wrapper">
            <div class="title_left">备注：</div>
            <div class="title_right">产品拉丁名后面的/B表示人工饲养；/W表示野生；/N表示来源未知；/etc表示 “等”。</div>
        </div>
        <div style="width: 100%">
        <table class="table2" style="font-size:16px;border-collapse:collapse;">
                <tr>
                    <td width="62px">标识服务</td>
                    <td>国家林业和草原局全国野生动植物研究与发展中心<br>010-62888966</td>
                </tr>
                <tr>
                    <td>真伪鉴定</td>
                    <td>国家林业和草原局野生动植物检测中心<br>0451-82190626</td>
                </tr>
                <tr>
                    <td>违法举报</td>
                    <td>010-62888606<br>邮箱savewildlife@caf.ac.cn</td>
                </tr>
    </table>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, ref, reactive, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Info',
  props: {},
  
  setup() {
    const router = useRouter();
    const val = router.currentRoute.value.query.code;
    // console.log('router.currentRoute.value.query', router.currentRoute.value.query.bjdm);
    
    return {
        val
    };
  },
  
})
</script>

<style lang="scss" scoped>
.info_wrapper {
    padding: 8px;
    color: #333;
    .search_wrapper {
        display: flex;
        line-height: 24px;
    }
    .search_wrapper_input {
        border: 1px solid #266783;
        font-size: 13px;
        flex: 16;
        margin-right: 4px;
    }
    .search_wrapper_button {
        flex: 3;
        border: 1px solid #266783;
        background: #266783;
        color: #fff;
        font-size: 13px;
    }
    .table2 {
        margin-top: 16px;
    }
    
    .table2 td {
        border: 1px solid #333;
        padding: 6px;
        line-height: 20px;
        font-size: 15px;
        vertical-align: middle;
    }

    .body_wrapper {
        background: url('../../assets/checkbg.png') no-repeat;
        background-size: cover;
        margin-left: -3px;
        margin-right: -3px;
        padding-left: 16px;
        font-size: 14px;
        line-height: 14px;
        .title {
            font-size: 18px;
            color: #34a471;
            font-weight: bold;
            padding: 24px 0 12px 0;
        }
        .title_left {
            width: 106px;
        }
        .title_right {
            width: 296px;
            line-height: 18px;
        }
        .item_wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 3px 0;
        }
    }
}
</style>
