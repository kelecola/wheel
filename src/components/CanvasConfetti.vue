<template>
  <h1 class="office-banner"></h1>
</template>

<script lang="ts">
import confetti from "canvas-confetti";
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'about',
  props: {},
  setup() {
    const colors = ["#8b5642", "#6a696b"];

    let start: any = void 0;

    const frame = (timestamp:  any) => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (start === void(0)) {
        start = timestamp
      }

      const elapsed = timestamp - start

      console.log('elapsed', elapsed, timestamp, start);
      


      if (elapsed < 2500) { // 一坤秒
        requestAnimationFrame(frame)
      }
    }

    const startFrame = () => {
      requestAnimationFrame(frame)
    }

    return {
      startFrame,
      colors: ["#8b5642", "#6a696b"],
    }
  },
  
})
</script>


<style lang="scss" scoped>
.office-banner {
  font-family: "Arial";
  padding: 0.125em;
  font-size: 4em;
  text-align: center;
  white-space: nowrap;
  transform: rotate(-10deg);
  position: fixed;
  top: 40%;
  left: -5%;
  right: -5%;
  z-index: 100;
  margin-top: 0;
}
</style>

