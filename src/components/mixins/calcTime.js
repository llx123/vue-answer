const calcTime = {
  data () {
    return {
      uTime: 0
    }
  },
  methods: {
    calcTimes () {
      this.uTimer = setInterval(
        () => {
          this.uTime += 1
        }, 1000
      )
    }
  },
  mounted () {
    this.calcTimes()
  },
  destroyed () {
    clearInterval(this.uTimer)
  }
}

export default calcTime
