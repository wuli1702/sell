<template>
  <div id="home">shouye</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },

  created() {
    console.log(this.$store.state.user.name)
  }
}
</script>

<style lang="stylus" scoped>

</style>
