<template>
    <div :class="item" class="filter-item" :style="{backgroundImage : `url(${newFileUrl})`}"></div>
</template>
<script>
import filterData from '../assets/filterData'
export default {
  components: {},
  data () {
    return {
      filterData
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {},
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
