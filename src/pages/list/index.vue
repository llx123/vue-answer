<template>
  <div>
    this is list
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.axios.get('http://localhost:3000/list', {
      params: {
        name: 1
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
