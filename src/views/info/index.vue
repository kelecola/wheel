<!-- 登录页面 填写手机号，身份证号，姓名 -->
<template>
  <div class="block">
    <word-title class="title" />
    <van-form class="form_wrapper" @submit="onSubmit" validate-trigger="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="name"
          name="name"
          label="姓名"
          placeholder="姓名"
          :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <van-field
          v-model="phone"
          type="phone"
          name="phone"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' },  
          { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！'}]"
        />
      </van-cell-group>
      <van-button class="button" type="default" text="点击这里参加答题" size="large" native-type="submit"></van-button>
    </van-form>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import WordTitle from './WordTitle.vue'
import { useRouter } from "vue-router";
import { Toast } from 'vant';
import { checkAnsed, addUser } from './request'

export default defineComponent({
  name: 'Info',
  props: {},
  components: {
    WordTitle
  },
  setup() {
    const name = ref('');
    const phone = ref('');

    const router = useRouter()

    const curAddUser = async (params: any) => {
      await addUser(params) 
    }

    const curCheckAnsed = async (params: any) => {
      const { data: { step, phone: curPhone, name: curName } } = await checkAnsed(params)

      if (step === undefined) {
        // 未创建用户
        await curAddUser(params)
        router.push(`/askQuestion/${curPhone}/${curName}`)
      } else if  (step === 1 || step === 0) {
        // 创建了但是没有回答对
        router.push(`/askQuestion/${curPhone}/${curName}`)
      } else if  (step === 2) {
        // 创建了回答对，但是还没有奖品
        router.push(`/wheel/${curPhone}/${curName}`)
      } else if (step === 3) {
        // 抽过奖了
        router.push(`/wheel/${curPhone}/${curName}`)
      }
    }
    
    const onSubmit = async (values: any) => {
      try {
        await curCheckAnsed(values);
      } catch (e) {
        Toast.fail(JSON.stringify(e))
      }
    };

    return {
      name,
      phone,
      onSubmit,
    };
  }
})
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
  height: 100%;
  font-size: 12px;
  background: url('../../assets/fy1.png');
  background-size:100% 100%;
  .title {
    padding-top: 64%;
    margin: 0 5%;
  }
  .form_wrapper {
    margin: 0 5%;
    width: 90%;
  }
  .button {
    margin-top: 1rem;
    color: #1989fa;
    border-radius: 6px;
  }
}
</style>
