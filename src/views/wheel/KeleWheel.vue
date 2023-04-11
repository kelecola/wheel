<template lang="">
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
</template>
<script lang="ts">
export default {
  data() {
    const colorA = '#FEF3FC';
    const colorB = '#F8DEF8';
    const blocks= [{ padding: '40px', imgs:[{ width: '350px', height: '350px' ,src: require('../../assets/zp3_bg.png')}], }]
    const prizes= [
        { fonts: [{ text: '三等奖', top: '15%' }], background: colorB },
        { fonts: [{ text: '二等奖', top: '10%' }], background: colorA },
        { fonts: [{ text: '三等奖', top: '10%' }], background: colorB },
        { fonts: [{ text: '二等奖', top: '10%' }], background: colorA },
        { fonts: [{ text: '一等奖', top: '10%' }], background: colorB },
        { fonts: [{ text: '三等奖', top: '10%' }], background: colorA },
        { fonts: [{ text: '二等奖', top: '10%' }], background: colorB },
        { fonts: [{ text: '谢谢参与', top: '10%' }], background: colorA },
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
    return {
      blocks,
      prizes,
      buttons
    }
  },
  methods: {
    startCallback () {
      this.$refs.myLucky.play();
       // 模拟调用接口异步抽奖
      setTimeout(() => {
        // 假设后端返回的中奖索引是0
        const index = 0
        // 调用stop停止旋转并传递中奖索引
        this.$refs.myLucky.stop(index)
      }, 3000)
    },
    endCallback(prize: any)  {
      console.log(prize)
    },
  }
}
</script>
<style lang="">
  
</style>