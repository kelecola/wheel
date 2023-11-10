<!-- Rem -->
<template>
  <div></div>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router';
import { getId2code } from './request'
export default defineComponent({
  name: 'Rem',
  props: {},
  setup() {
    const curGetId2code = async () => {
      const router = useRouter();
      const { data } = await getId2code({id : router?.currentRoute?.value?.params?.id});
      router.push(`/?code=${data}`)
    }
    onBeforeMount(() => {
      curGetId2code()
    });
  }
})
</script>
<style lang="scss" scoped>
.block {
}
</style>
