<template>
  <div>
<!--    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <router-view/>
    -->
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <div v-if="uplodeType==1">
        <ul class="header-button-right">
          <li @click="uplodeType=2">Next</li>
        </ul>
      </div>
      <div v-if="uplodeType==2">
        <ul class="header-button-right">
        <li @click="publish">올리기</li>
        </ul>
      </div>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <PostList @write="newPostContent = $event" :demoData='$store.state.mainData' :uplodeType='uplodeType' :newFileUrl='newFileUrl'/>
    <div v-if="uplodeType == 0">
      <button @click="more">더보기</button>
    </div>
    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus" @click="uplodeType=1">+</label>
      </ul>
    </div>
  </div>
</template>
<script>
import PostList from './components/PostList.vue'
import axios from 'axios'
export default {
  components: {
    PostList
  },
  data () {
    return {
      sampleData: '',
      number: 0,
      step: 0,
      uplodeType: 0,
      newFileUrl: '',
      btnType: 'file',
      newPostContent: '',
      newFileFilter: ''
    }
  },
  setup () {
  },
  created () {},
  mounted () {
    this.emitter.on('onClickFilter', (a) => {
      this.newFileFilter = a
    })
  },
  unmounted () {},
  methods: {
    // axios를 사용한 get, post 요청
    more () {
      axios.get(`https://codingapple1.github.io/vue/more${this.number}.json`)
        .then((결과) => {
          console.log(결과)
          this.$store.state.mainData.push(결과.data)
          this.number += 1
        })
    },
    // file업로드하는 방식
    upload (e) {
      const imageFile = e.target.files
      // 받아온 파일을 임시 url을 만들어 저장한다.
      const url = URL.createObjectURL(imageFile[0])
      console.log(url)
      this.number += 1
      this.newFileUrl = url
    },
    onClickFileUploadBtn () {
      if (this.uplodeType === 0) {
        this.uplodeType = 1
      } else if (this.uplodeType === 1) {
        this.btnType = 'text'
        this.uplodeType = 2
      }
    },
    publish () {
      const imData = {
        name: '두혁',
        userImage: 'https://placeimg.com/100/100/animals',
        postImage: this.newFileUrl,
        likes: 0,
        date: '오늘',
        liked: false,
        content: this.newPostContent,
        filter: this.newFileFilter
      }
      this.$store.state.mainData.unshift(imData)
      this.uplodeType = 0
    }
  }
}
</script>
<style>

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
