<template>
  <div>
    <Toolbar msg="News" />
    <br />
    <br />
    <br />
    <br />
    <md-content>
      <Event />
      <br />
      <Content />
    </md-content>
    <BarRouter />
  </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from '@/components/Toolbar.vue'
import BarRouter from '@/components/BarRouter.vue'
import Event from '@/components/Event.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'news',
  components: {
    Toolbar,
    BarRouter,
    Event,
    Content,
  },
}
</script>

<style scoped></style>
