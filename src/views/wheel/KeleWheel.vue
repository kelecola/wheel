<template lang="">
  <div class="lucky-wheel-inter">
    <LuckyWheel
      ref="myLucky"
      width="350px"
      height="350px"
      :prizes="prizes"
      :blocks="blocks"
      :buttons="buttons"
      @start="startCallback"
      @end="endCallback"
    />
    <van-cell-group v-if="step === 3 || winText" inset>
      <van-cell title="中奖记录 （仅限绍兴移动、电信手机号，其他地区用户参加不予充值奖励）
      " :label="$route.params.phone + winText" />
    </van-cell-group>
  </div>
</template>
<script lang="ts">
import { Toast } from 'vant';
import { getWinIndex, updateUser, checkAnsed } from './request'

export default {
  data() {
    const colorA = '#FEF3FC';
    const colorB = '#F8DEF8';
    const blocks= [{ padding: '40px', imgs:[{ width: '350px', height: '350px' ,src: require('../../assets/zp3_bg.png')}], }]
    const prizes= [
        { fonts: [{ text: '三等奖', top: '10%', winText: '恭喜获得三等奖', winFlag: true }], background: colorB }, // 8
        { fonts: [{ text: '四等奖', top: '10%', winText: '恭喜获得四等奖', winFlag: true }], background: colorA }, // 1 0.5 - 1
        { fonts: [{ text: '四等奖', top: '10%', winText: '恭喜获得四等奖',  winFlag: true }], background: colorB }, // 2 0.5 - 1
        { fonts: [{ text: '谢谢参与', top: '10%', winText: '谢谢参与，明天再来', winFlag: false }], background: colorA }, // 3 0.5 - 1
        { fonts: [{ text: '一等奖', top: '10%', winText: '恭喜获得一等奖', winFlag: true }], background: colorB }, // 4  => 0.0127
        { fonts: [{ text: '谢谢参与', top: '10%', winText: '谢谢参与，明天再来', winFlag: false }], background: colorA }, // 5 0.5 - 1
        { fonts: [{ text: '二等奖', top: '10%', winText: '恭喜获得二等奖', winFlag: true }], background: colorB }, // 6 => 0.021185
        { fonts: [{ text: '谢谢参与', top: '10%', winText: '谢谢参与，明天再来', winFlag: false  }], background: colorA }, // 7 => 0.38125
      ]
    const buttons=[{
        width:'92',
        radius: '35%',
        // background: 'red',
        // fonts: [{ text: '开始\n抽奖', fontColor: '#fff',  top: '-40%', fontSize: '18px' }],
        imgs: [{
          src: require('../../assets/zp3_btn1.png'),
          width: '150%',
          height: '150%',
          top: '-150%'
        },
        {
          src: require('../../assets/zp3_btn2.png'),
          width: '50%',
          top: '-340%'
        }],
      }]
    let step = 2;
    let winText = ''
    return {
      blocks,
      prizes,
      buttons,
      step,
      winText
    }
  },
  methods: {
    async curCheckAnsed(params: any, needToast: boolean) {
      const self = this as any
      const { data: { step, winText } } = await checkAnsed(params)
      self.step = step;
      self.winText = winText;
      if (step === 3 || winText) {
        needToast && Toast.success('您已经参与过抽奖！')
        return false
      }
      if (step === 2) {
        return true;
      }
      needToast && Toast.fail('请先完成问卷！')
      return false;
    },

    async curUpdate (sKey: any, updateData: any, str: string)  {
      const { code } = await updateUser(sKey, updateData)
      const self = this as any
      const params =  self.$route.params
      if (code === 200) {
        self.curCheckAnsed(params, false)
        Toast.success(str)
      }
    },
    async curGetWinIndex () {
      const { data } = await getWinIndex();
      return data || 1;
    },

    async startCallback () {
      const self = this as any
      const luckyRef = self.$refs.myLucky as any
      const params =  self.$route.params
      const isPass = await self.curCheckAnsed(params, true)


      if (isPass) {
        luckyRef.play();
        // 模拟调用接口异步抽奖
        let index: any = await this.curGetWinIndex() || 1;
        luckyRef.stop(index)
      }
    },
    endCallback(prize: any)  {
      const self = this as any
      const { winText, winFlag } = prize.fonts[0];
      const params =  self.$route.params
      if (winFlag) {
        this.curUpdate(params.phone, { step: 3, winText }, winText)
      } else {
        Toast.success(winText)
      }
    },
  },
  created() {
    const self = this as any
    const params =  self.$route.params
    self.curCheckAnsed(params, true)
  }
}
</script>
<style lang="scss" scoped>
.lucky-wheel-inter {
  padding: 1rem 0 0 0;
}
</style>