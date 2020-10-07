<template>
  <div>
    <ToolbarBack />
    <BarRouter />
  </div>
</template>

<script>
import ToolbarBack from '@/components/ToolbarBack.vue'
import BarRouter from '@/components/BarRouter.vue'

export default {
  name: 'createTask',
  components: {
    ToolbarBack,
    BarRouter,
  },
}
</script>

<style></style>
