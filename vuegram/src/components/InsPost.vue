<template>
  <div>
    <div class="post">
      <div class="post-header">
        <div class="profile"></div>
        <span class="profile-name">{{item.name}}</span>
      </div>
      <div class="post-body" :class='item.filter' :style="{ backgroundImage : `url(${item.postImage})` }" @dblclick="$store.commit('plusLikes', item)"></div>
      <div class="post-content">
        <h1 v-if="item.liked==false">♡</h1>
        <h1 class="liked-imot" v-if="item.liked==true">♡</h1>
        <p>{{item.likes}} Likes</p>
        <p><strong>{{item.name}}</strong> {{item.content}}</p>
        <button type="button" class="btn btn-light">Light</button>
        <p class="date">{{item.date}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      sampleData: ''
    }
  },
  setup () {},
  created () {},
  mounted () {
  },
  unmounted () {},
  methods: {},
  props: {
    item: Object
  }
}
</script>
<style scoped>
.liked-imot {
  background-color: red;
}
.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
