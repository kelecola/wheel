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
          v-model="identity"
          type="identity"
          name="identity"
          label="身份证"
          placeholder="身份证"
          :rules="[{ required: true, message: '请填写身份证' }, { validator: isIdentity, message: '身份证号码格式错误！' }]"
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
      <van-button class="button" type="default" text="立即前往" size="large" native-type="submit"></van-button>
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
    const identity = ref('');
    const phone = ref('');

    const router = useRouter()

    const curAddUser = async (params: any) => {
      await addUser(params) 
    }

    const curCheckAnsed = async (params: any) => {
      const { data: { step } } = await checkAnsed(params)
      console.log('step', step);
      
      const { name, identity, phone } = params;
      if (step === 0) {
        router.push(`/askQuestion/${identity}/${phone}/${name}`)
      } else if (!step) {
        await curAddUser(params)
        router.push(`/askQuestion/${identity}/${phone}/${name}`)
      } else {
        router.push(`/question/${identity}/${phone}/${name}`)
      }
    }
    
    const onSubmit = async (values: any) => {
      try {
        await curCheckAnsed(values);
      } catch (e) {
        Toast.fail(JSON.stringify(e))
      }
    };

    const isIdentity = (val: any) => {
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val);
    }

    
    return {
      name,
      identity,
      phone,
      onSubmit,
      isIdentity
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
    padding-top: 15%;
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
