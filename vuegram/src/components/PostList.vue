<template>
  <div>
    <div v-if="uplodeType == 0">
      <div v-for="item in demoData" :key="item.id">
        <InsPost :item='item'/>
      </div>
    </div>
    <div v-if="uplodeType == 1">
      <div class="upload-image" :style="{backgroundImage : `url(${newFileUrl})`}" ></div>
      <div class="filters">
        <FilterBox :item="item" :newFileUrl='newFileUrl' v-for="item in filterData" :key="item" ></FilterBox>
      </div>
    </div>
    <div v-if="uplodeType == 2">
      <!-- 글작성페이지 -->
      <div class="upload-image" :style="{ backgroundImage : `url(${newFileUrl})` }"></div>
      <div class="write">
        <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
      </div>
    </div>
  </div>
</template>
<script>
import InsPost from './InsPost.vue'
import FilterBox from './FilterBox.vue'
import filterData from '../assets/filterData'

export default {
  components: {
    InsPost,
    FilterBox
  },
  data () {
    return {
      sampleData: '',
      filterData
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {},
  props: {
    demoData: Array,
    uplodeType: Number,
    newFileUrl: String
  }
}
</script>
<style scoped>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
background: #888;
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555;
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>
