<!-- 登录页面 填写手机号，身份证号，姓名 -->
<template>
  <div id="container"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Canvas, Text } from '@antv/g';
import { Renderer as CanvasRenderer } from '@antv/g-canvas';
// import WebFont from 'webfontloader';

export default defineComponent({
  name: 'Info',
  props: {},

  mounted() {
    const canvasRenderer = new CanvasRenderer();

    // create a canvas
    const canvas = new Canvas({
      container: 'container',
      width: 375,
      height: 80,
      renderer: canvasRenderer,
    });
    const text = new Text({
      style: {
        x: 0,
        y: 40,
        fontFamily: 'Gaegu',
        text: '填写信息参与答题赢话费',
        textOverflow: 'ellipsis',
        fontSize: 24,
        fill: '#1989fa',
        stroke: '#fff',
        lineWidth: 4,
      },
    });
      canvas.appendChild(text);
    
  //   WebFont.load({
  //   google: {
  //     families: ['Gaegu'],
  //   },
  //   active: () => {
  //     const text = new Text({
  //       style: {
  //         x: 32,
  //         y: 100,
  //         fontFamily: 'Gaegu',
  //         text: '抽奖活动',
  //         textOverflow: 'ellipsis',
  //         fontSize: 30,
  //         fill: '#1890FF',
  //         stroke: '#F04864',
  //         lineWidth: 5,
  //       },
  //     });
  //     canvas.appendChild(text);
  //   },
  // });
  }
})
</script>

<style lang="scss" scoped>
</style>
