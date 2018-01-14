<template>
  <section class="item">
    {{ uTime | timeFilter}}
    <Item-container fromComponent='item' @initTime="initTime" :uTime="uTime"/>
  </section>
</template>

<script>
import ItemContainer from '@/components/ItemContainer'
import { mapActions } from 'vuex'
import calcTime from '@/components/mixins/calcTime'

export default {
  name: 'item',
  mixins: [calcTime],
  components: {
    ItemContainer
  },
  methods: {
    ...mapActions(['initSate']),
    initTime () {
      this.uTime = 0
    }
  },
  mounted () {
    this.initSate()
  },
  filters: {
    timeFilter (val) {
      if (val < 10) {
        return '0' + val
      } else {
        return val
      }
    }
  }
}
</script>

<style scoped>

</style>

