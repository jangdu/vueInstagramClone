<template>
    <div @click="onClickFilter" :class="item" class="filter-item" :style="{backgroundImage : `url(${newFileUrl})`}"></div>

</template>
<script>
export default {
  components: {},
  data () {
    return {
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {
    onClickFilter () {
      this.emitter.emit('onClickFilter', this.item)
    }
  },
  props: {
    newFileUrl: String,
    item: String
  }
}
</script>
<style scoped>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>
