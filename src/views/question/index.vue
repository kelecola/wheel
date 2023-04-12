<!-- Rem -->
<template>
  <van-nav-bar
    title="问卷调查"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  <van-form @submit="onSubmit">
    <div class="question_wrapper">
      <div class="title">满意度调查</div>
      <div class="sub_title">
        感谢您能抽出几分钟时间来参加本次答题，现在我们答题开始吧！
      </div>
    </div>
    <van-cell-group inset class="subject" v-for="(item, i) in questionArr" :key="i">

      <van-field :label="item.question" required="true" :rules="[{ required: true, message: '请选择' }]" class="subject_title">
        <template #input>
          <van-radio-group  v-if="item.type === 'radio'" v-model="result[i]">
            <van-radio name="A">{{ `A.${item.A}` }}</van-radio>
            <van-radio name="B">{{ `B.${item.B}` }}</van-radio>
            <van-radio name="C">{{ `C.${item.C}` }}</van-radio>
            <van-radio name="D">{{ `D.${item.D}` }}</van-radio>
          </van-radio-group>
        </template>
      
      </van-field>
    </van-cell-group>
    <van-button class="button" type="primary" text="提交" size="large" native-type="submit"></van-button>
  </van-form>
  
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { useRouter } from 'vue-router';
import { questionArrInit } from './constant';
import { Toast } from 'vant';

export default defineComponent({
  name: 'Question',
  props: {},
  setup() {
    const router = useRouter()
    const questionArr: any = ref(questionArrInit);
    const result: any = reactive(Array.from({length: 10}, () => ''));
    const onClickLeft = () => history.back();
    const onSubmit = (val: any) => {
      console.log('val', val, result.value);
      console.log('onSubmit', onSubmit);
      Toast.success('全部答对')
      router.push('/wheel')
    }
    return {
      onClickLeft,
      questionArr,
      result,
      onSubmit
    };
  },
})
</script>
<style lang="scss">
.question_wrapper {
  margin: 0.5rem;
  .title {
    font-size: 18px;
    color: #333;
    margin-bottom: 0.3rem;
  }
  .sub_title {
    line-height: 16px;
    color: #666;
    font-size: 12px;
  }
  
}
.subject {
  .van-radio__label {
    color: #333;
  }
  .subject_title {
    .van-field__label {
      color: #333;
      width: 100%;
      margin-bottom: 0.2rem;
    }
    .van-radio {
      height: 36px;
    }
    font-size: 16px;
    display: flex;
    flex-direction: column;
  }
}

</style>
