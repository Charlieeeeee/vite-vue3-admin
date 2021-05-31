<template>
  <div class="life-cycle">
    {{msg}}
    <router-link to="/">Home</router-link>
    <el-button type="primary" @click="toggleUser">toggle user</el-button>
    <br>name: {{$store.state.userInfo.name}}
    <br>age: {{$store.state.userInfo.age}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'LifeCycle'
      }
    },
    methods: {
      toggleUser () {
        this.$store.commit('toggleUser');
      }
    },
    beforeCreate () {
      console.log('beforeCreate');
    },
    created () {
      console.log('created');
    },
    beforeMount () {
      console.log('beforeMount');
    },
    mounted () {
      console.log('mounted');
    },
    beforeUpdate () {
      console.log('beforeUpdate');
    },
    updated () {
      console.log('updated');
    },
    // deprecated
    // beforeDestroy () {
    //   console.log('beforeDestroy');
    // },
    // destroyed () {
    //   console.log('destroyed');
    // },
  }
</script>

<style lang="scss" scoped>
.life-cycle {
  color: blue;
  font-size: 40px;
}
</style>