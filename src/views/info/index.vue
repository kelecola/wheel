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
          :rules="[{ required: true, message: '请填写身份证' }]"
        />
        <van-field
          v-model="phone"
          type="phone"
          name="phone"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
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
    
    const onSubmit = (values: any) => {
      console.log('submit', values);
      router.push('/question')
    };

    
    

    return {
      name,
      identity,
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
  background: url('../../assets/tp2.jpeg');
  background-size: cover;
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
