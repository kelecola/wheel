<template lang="">
  <div class="lucky-wheel-inter">
    <LuckyGrid
      ref="myLucky"
      width="350px"
      height="350px"
      :prizes="prizes"
      :blocks="blocks"
      :buttons="buttons"
      :activeStyle="{ background: '#FDA5CF' }"
      @start="startCallback"
      @end="endCallback"
    />
    <van-cell-group v-if="step === 3 || winText" inset>
      <van-cell title="中奖记录 （仅限绍兴移动、电信手机号，其他地区用户参加不予充值奖励）
      " :label="$route.params.phone + winText" />
    </van-cell-group>
  </div>
  <canvas-confetti ref="confetti" />
</template>
<script lang="ts">
import { Toast } from 'vant';
import { getWinIndex, updateUser, checkAnsed, getRestTime } from './request'
import CanvasConfetti from '@/components/CanvasConfetti.vue'

export default {
  components: {
    CanvasConfetti
  },
  data() {
    const colorA = '#FEF3FC';
    const colorB = '#F8DEF8';
    const blocks= [{ padding: '25px 40px 40px 40px', imgs:[{ width: '350px', height: '350px' ,src: require('../../assets/bg.png')}], }]
    const prizes= [
        { x: 0, y: 0, fonts: [{ text: '', top: '10%', winText: '谢谢参与', winFlag: false }], 
          imgs: [{
            src: require('../../assets/1.png'),
            activeSrc: require('../../assets/10.png'),
            width: '125%',
          }], 
        }, // 8
        {  x: 1, y: 0, fonts: [{ text: '', top: '10%', winText: '恭喜获得一等奖', winFlag: true }], imgs: [{
          src: require('../../assets/2.png'),
          activeSrc: require('../../assets/20.png'),
         width: '125%',
        }],}, // 1 0.5 - 1
        { x: 2, y: 0, fonts: [{ text: '', top: '10%', winText: '谢谢参与',  winFlag: false }], imgs: [{
          src: require('../../assets/3.png'),
          activeSrc: require('../../assets/30.png'),
          width: '125%',
        }],}, // 2 0.5 - 1
        {  x: 2, y: 1, fonts: [{ text: '', top: '10%', winText: '恭喜获得二等奖', winFlag: true }], imgs: [{
          src: require('../../assets/4.png'),
          activeSrc: require('../../assets/40.png'),
          width: '125%',
        }],}, // 3 0.5 - 1
        { x: 2, y: 2, fonts: [{ text: '', top: '10%', winText: '谢谢参与', winFlag: false }], imgs: [{
          src: require('../../assets/5.png'),
          activeSrc: require('../../assets/50.png'),
          width: '125%',
        }], }, // 4  => 0.0127
        {  x: 1, y: 2, fonts: [{ text: '', top: '10%', winText: '恭喜获得三等奖', winFlag: true }], imgs: [{
          src: require('../../assets/6.png'),
          activeSrc: require('../../assets/60.png'),
         width: '125%',
        }], }, // 5 0.5 - 1
        { x: 0, y: 2, fonts: [{ text: '', top: '10%', winText: '恭喜获得四等奖', winFlag: true }], imgs: [{
          src: require('../../assets/7.png'),
          activeSrc: require('../../assets/70.png'),
          width: '125%',
        }], }, // 6 => 0.021185
        {  x: 0, y: 1, fonts: [{ text: '', top: '10%', winText: '恭喜获得四等奖', winFlag: true  }], imgs: [{
          src: require('../../assets/8.png'),
          activeSrc: require('../../assets/80.png'),
         width: '125%',
        }], }, // 7 => 0.38125
      ]
    const buttons=[{
        x: 1, y: 1,
        imgs: [{
          src: require('../../assets/start.png'),
          width: '125%',
        }],
      }]
    let step = 2;
    let winText = '';
    let visible = false;
    return {
      blocks,
      prizes,
      buttons,
      step,
      winText,
      visible
    }
  },
  methods: {
    startFrame () {
      const self = this as any
      self.$refs.confetti.startFrame()
    },
    async curGetRestTime(parmas:any) {
      const { data } = await getRestTime( parmas)
      return data;
    },
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
      return false;
    },

    async curUpdate (sKey: any, updateData: any, str: string)  {
      const { code } = await updateUser(sKey, updateData)
      const self = this as any
      const params =  self.$route.params
      if (code === 200) {
        self.startFrame();
        self.curCheckAnsed(params, false)
        Toast.success(str)
      }
    },
    async curGetWinIndex (params: any) {
      const { data, restTimeToday } = await getWinIndex(params);
      return { data, restTimeToday };
    },

    async startCallback () {
      const self = this as any
      const luckyRef = self.$refs.myLucky as any
      const params =  self.$route.params
      const isPass = await self.curCheckAnsed(params, true)

      if (isPass) {
        // 模拟调用接口异步抽奖
        let { data, restTimeToday }: any = await this.curGetWinIndex(params);

        if (restTimeToday) {
          luckyRef.play();
          luckyRef.stop(data)
        } else {
          Toast.fail('今天的抽奖次数用完，请明天再来！')
        }
      }
    },
    async endCallback(prize: any)  {
      const self = this as any
      const { winText, winFlag } = prize.fonts[0];
      const params =  self.$route.params
      if (winFlag) {
        this.curUpdate(params.phone, { step: 3, winText }, winText)
      } else {
        const times = await this.curGetRestTime(params) || 0;
        Toast.success(`${winText}，剩余抽奖次数${times}次！`)
      }
    },
  },
  mounted() {
    // const self = this as any
    // self.startFrame()
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
.van-cell-group {
  margin-top: 48px;
}
</style>