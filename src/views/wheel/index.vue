<!-- Rem -->
<template>
  <div class="wheel_wrapper">
    <van-nav-bar
      title="抽奖页面"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="kele_wheel_wrapper">
      <kele-wheel></kele-wheel>
    </div>
  </div>
</template>

<script lang="ts">
import KeleWheel from './KeleWheel.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Wheel',
  components: { KeleWheel },
  props: {},
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft
    }
  }
})
</script>
<style lang="scss" scoped>
.wheel_wrapper {
  .kele_wheel_wrapper {
    display: flex;
    justify-content: center;
    height: calc(100vh - 1.22667rem);
    background-color: oldlace;
  }
}
</style>
