<template>
  <section class="score">
    score
    <Item-container fromComponent='score' ref="content" />
  </section>
</template>

<script>
import ItemContainer from '@/components/ItemContainer'

export default {
  name: 'score',
  components: {
    ItemContainer
  },
  mounted () {
    this.$refs.content.calcScore()
  }
}
</script>

<style scoped>

</style>

