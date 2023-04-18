<!-- Rem -->
<template>
  <van-nav-bar
    title="肿瘤和职业病防治问卷"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  <van-form @submit="onSubmit">
    <div class="question_wrapper">
      <div class="title">慢性病综合防控参与度和满意度调查问卷</div>
      <div class="sub_title">
        为了解辖区开展慢性病综合防控示范区建设工作情况和你对慢性病综合防控工作的参与度和满意度，以便于更好的推进慢性病综合防控示范区建设，希望得到你的支持，本调查不涉及个人隐私，调查结果只是为了更好地推进慢性病防控工作，提高居民参与慢性病防控工作。感谢您的支持！
      </div>
    </div>
    <van-cell-group inset class="subject" v-for="(item, i) in questionArr" :key="i">
      <van-field v-if="!item.otherKey" :label="item.question" required="true" :rules="[{ required: true, message: '请选择' }]" class="subject_title">
        <template #input>
          <van-radio-group v-model="result[i]">
            <template v-for="it in item.ansList" :key="it.key">
              <van-radio :name="it.key">{{ `${it.text}` }}</van-radio>
            </template>
          </van-radio-group>
        </template>
      </van-field>
      <van-field @click="showPicker = true" placeholder="请输入" v-if="item.otherKey" :label="item.questions" required="true" :rules="[{ required: true, message: '请输入' }]" class="subject_title" v-model="result[i]"></van-field>
      <van-popup v-model:show="showPicker" position="bottom" round>
        <van-picker
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
    </van-cell-group>
    <van-button class="button" type="primary" text="提交" size="large" native-type="submit"></van-button>
  </van-form>
  
  
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router';
import { getQuestions, updateUser } from './request'

export default defineComponent({
  name: 'Question',
  props: {},
  setup() {
    const result = ref(Array.from({length: 11}, () => ''));
    const showPicker = ref(false);
    const columns = [
      '甘霖镇',
      '崇仁镇',
      '长乐镇',
      '三界镇',
      '黄泽镇',
      '三江街道',
      '鹿山街道',
      '剡湖街道',
      '浦口街道',
      '石璜镇',
      '谷来镇',
      '仙岩镇',
      '金庭镇',
      '下王镇',
      '贵门乡'];


    const resData: any = reactive({
      questionArr: [],
      result,
      ansList: [],
      params: {}
    });

    const onConfirm = (value: any) => {
      result.value[10] = value;
      showPicker.value = false;
    };

    const router = useRouter();

    const curGetQuestions = async () => {
      
      const { data } = await getQuestions();
      resData.ansList = (resData.questionArr || [].map((item: any) => item.ansList))
      
      resData.questionArr = data;
    }

    const curUpdate = async (sKey: any, obj: any) => {
      await updateUser(sKey, obj)
    }
    
    const onClickLeft = () => history.back();
    const onSubmit = () => {

      const question_ans = resData.questionArr.map((item: any, index: number) => {
        if (item.otherKey) {
          return {
            question: item.questions,
            ans: resData.result?.[index]
          }
        }
        return {
          question : item.question,
          ans: item.ansList[Number(resData.result?.[index]) - 1].text
        }
      })

      console.log('question_ans', question_ans);
      


      curUpdate(resData.params.phone, {question_ans, step: 2})
  

      // router.push({ name: 'question', params: resData.params})
      router.push(`/wheel/${resData.params.id}/${resData.params.phone}/${resData.params.name}`)

    }

    onMounted(() => {
      curGetQuestions();
      
      resData.params = router.currentRoute.value.params
    });

    return {
      onClickLeft,
      ...toRefs(resData),
      onSubmit,
      onConfirm,
      columns,
      showPicker,
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
      height: 1rem;
      align-items: flex-start;
    }
    font-size: 16px;
    display: flex;
    flex-direction: column;
  }
}

</style>
