<template>
  <div id="home">
    <div class="header" v-if="showHeader">header</div>
    <div class="body">body</div>
    <div class="footer">footer</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showHeader: true
    }
  },

  created() {
    console.log(this.$store.state.user.name)
  }
}
</script>

<style lang="stylus" scoped>
  #home
    // .header
    .body
      background: url('http://img.sccnn.com/bimg/338/51218.jpg') center center no-repeat
    // .footer
</style>
