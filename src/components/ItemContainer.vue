<template>
  <section class="container">
    <section v-if="fromComponent === 'item'">
      <span>答题</span>
      <section>
        当前第:{{itemNum}}题
        <header>
          题目：{{itemDetail[itemNum-1].tit}}
          <ul>
            <li v-for="(item,index) in itemDetail[itemNum-1].list" :key="index" @click="makeChoice(index, item)">
              <span :class="{'hasChoosed': index === choosedNum}">{{ getIndex(index) }}</span>{{item}}
            </li>
          </ul>
        </header>
      </section>
      <aside>
        <button @click.stop="nextItem">下一题</button>
      </aside>
    </section>
    <section v-else-if="fromComponent === 'score'">
      <span>得分:</span>
      {{getScore}}
    </section>
    <section v-else>
      <span>首页</span>
      <router-link to="/item">开始</router-link>
      </span>
    </section>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ItemContainer',
  data () {
    return {
      choosedNum: null, // 选择索引
      getScore: 0
    }
  },
  computed: {
    ...mapGetters(['itemNum', 'itemDetail', 'answerList'])
  },
  methods: {
    ...mapActions(['nextQuestion', 'setList']),
    nextItem () {
      if (this.choosedNum !== null) {
        // 选择数组
        this.setList({
          'uTime': this.uTime,
          'uAnswer': this.choosedNum
        })
        // 下一题
        this.$emit('initTime')
        this.choosedNum = null
        if (this.itemNum < this.itemDetail.length) {
          this.nextQuestion()
        } else {
          this.$router.push({
            path: '/score'
          })
        }
      } else {
        alert('请选择')
      }
    },
    makeChoice (index) {
      this.choosedNum = index
    },
    calcScore () {
      if (this.answerList.length === 0) {
        this.$router.push({
          path: '/'
        })
      } else {
        this.itemDetail.forEach((item, index) => {
          if (this.answerList[index].uAnswer === (item.right - 1)) {
            this.getScore += item.score
          }
        })
      }
    },
    getIndex (val) {
      switch (val) {
        case 0 : return 'A:'
        case 1 : return 'B:'
        case 2 : return 'C:'
        case 3 : return 'D:'
      }
    }
  },
  props: ['fromComponent', 'uTime']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hasChoosed {
  background: aqua;
}
</style>
