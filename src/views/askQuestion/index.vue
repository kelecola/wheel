<!-- Rem -->
<template>
  <van-nav-bar
    title="全民营养周"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  <van-form @submit="onSubmit">
    <div class="question_wrapper">
      <div class="title">答题</div>
      <div class="sub_title">
        感谢您能抽出几分钟时间来参加全民营养周答题，现在我们答题开始吧！
      </div>
    </div>
    <van-cell-group inset class="subject" v-for="(item, i) in questionArr" :key="i">
      <van-field :label="item.question" required="true" :rules="[{ required: true, message: '请选择' }]" class="subject_title">
        <template #input>
          <van-radio-group  v-if="item.type === 'single'" v-model="result[i]">
            <template v-for="it in item.ansList" :key="it.key">
              <van-radio :name="it.key">{{ `${it.key}.${it.text}` }}</van-radio>
            </template>
          </van-radio-group>
        </template>
      
      </van-field>
    </van-cell-group>

    <van-cell-group inset class="subject" v-for="(item, i) in mulQuestionArr" :key="i">

      <van-field :label="item.question" required="true" :rules="[{ required: true, message: '请选择' }]" class="subject_title">
        <template #input>
          <van-checkbox-group  v-if="item.type === 'mul'" v-model="mulResult[i]">
            <template v-for="it in item.ansList" :key="it.key">
              <van-checkbox shape="square" :name="it.key">{{ `${it.key}.${it.text}` }}</van-checkbox>
            </template>
          </van-checkbox-group>
        </template>
      
      </van-field>
    </van-cell-group>
    <van-button class="button" type="primary" text="提交" size="large" native-type="submit"></van-button>
  </van-form>
  
</template>
<script lang="ts">
import { Toast } from 'vant';
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router';
import { getQuestions, getMulQuestions, updateUser } from './request'

export default defineComponent({
  name: 'AskQuestion',
  props: {},
  setup() {
    const resData: any = reactive({
      questionArr: [],
      mulQuestionArr: [],
      result: [],
      mulResult: [],
      params: {}
    });

    const router = useRouter()

    const curGetQuestions = async () => {
      
      const { data } = await getQuestions();

      resData.questionArr = data;
    }

    const curGetMulQuestions = async () => {
      
      const { data } = await getMulQuestions();

      resData.mulQuestionArr = data;
    }

    const curUpdate = async (sKey: any, obj: any) => {
      await updateUser(sKey, obj)
    }
    
    
    const onClickLeft = () => history.back();
    const onSubmit = (val: any) => {

      let passNum = 0;

      const covertMap = {
        A: 0,
        B: 1,
        C: 2,
        D: 3
      }


      const ask_ans = resData.questionArr.map((item: any, index: number) => {
        if (item.ans === resData.result[index]) {
          passNum++;
        }
        return {
          question : item.question,
          ans: item.ansList[covertMap[resData.result?.[index]]].text
        }
      })

      // console.log('resData', resData.mulResult, resData.mulQuestionArr);
      

      const mul_ask_ans = resData.mulQuestionArr.map((item: any, index: number) => {
        if (item.ans === resData.mulResult[index].join('')) {
          passNum++;
        }
        return {
          question : item.question,
          ans: resData.mulResult[index]
        }
      })
      
      if (passNum >= 7) {
        curUpdate(resData.params.phone, {
          ask_ans: [...ask_ans, ...mul_ask_ans],
          step: 2
        })

        // console.log('resData.params', resData.params.id, resData.params.phone, resData.params.name);
        
        router.push(`/wheel/${resData.params.phone}/${resData.params.name}`)
      } else {
        Toast.fail(`已答对${passNum}道，答对7道题以上，即可参与抽奖`)
      }
    }

    onMounted(() => {
      curGetQuestions();
      curGetMulQuestions();
      resData.params = router.currentRoute.value.params
    });

    return {
      onClickLeft,
      ...toRefs(resData),
      onSubmit
    };
  },
})
</script>

<style lang="scss">
.van-cell-group:nth-child(even) {
  .van-cell {
    background-color: #EAF2F8; /* 淡蓝色 */
  }
}

.van-cell-group:nth-child(odd) {
  .van-cell {
    background-color: #FFFBE6; /* 淡蓝色 */
  }
}



.question_wrapper {
  padding: 0.5rem;
  background-color: #FFFBE6; /* 淡蓝色 */
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
  .van-radio__label, .van-checkbox__label {
    color: #333;
  }
  .subject_title {
    .van-field__label, .van-checkbox__label {
      color: #333;
      width: 100%;
      margin-bottom: 0.2rem;
    }
    .van-radio, .van-checkbox {
      height: 1rem;
      align-items: flex-start;
    }
    font-size: 16px;
    display: flex;
    flex-direction: column;
  }
}

</style>
