import { createStore } from 'vuex'

export default createStore({
  state: {
    mainData: [
      {
        name: 'Kim Hyun',
        userImage: 'https://placeimg.com/100/100/arch',
        postImage: 'https://placeimg.com/640/480/arch',
        likes: 36,
        date: 'May 15',
        liked: false,
        content: '오늘 무엇을 했냐면요 아무것도 안했어요 ?',
        filter: 'perpetua'
      },
      {
        name: 'John Doe',
        userImage: 'https://placeimg.com/200/200/people',
        postImage: 'https://placeimg.com/640/480/people',
        likes: 20,
        date: 'Apr 20',
        liked: false,
        content: '흔한 자랑스타그램',
        filter: 'clarendon'
      },
      {
        name: 'Minny',
        userImage: 'https://placeimg.com/100/100/animals',
        postImage: 'https://placeimg.com/640/480/animals',
        likes: 49,
        date: 'Apr 4',
        liked: false,
        content: '우리집 개는 화장실 물도 내림',
        filter: 'lofi'
      }
    ],
    filterData: ['aden', '_1977', 'brannan', 'brooklyn', 'clarendon', 'earlybird', 'gingham', 'hudson',
      'inkwell', 'kelvin', 'lark', 'lofi', 'maven', 'mayfair', 'moon', 'nashville', 'perpetua',
      'reyes', 'rise', 'slumber', 'stinson', 'toaster', 'valencia', 'walden', 'willow', 'xpro2'
    ]
  },
  getters: {
  },
  mutations: {
    plusLikes (state, item) {
      const mainDataIndex = state.mainData.indexOf(item)
      if (state.mainData[mainDataIndex].liked === false) {
        state.mainData[mainDataIndex].likes++
      } else if (state.mainData[mainDataIndex].liked === true) {
        state.mainData[mainDataIndex].likes--
      }
      console.log(state.mainData.indexOf(item))
      state.mainData[mainDataIndex].liked = !state.mainData[mainDataIndex].liked
    }
  },
  actions: {
  },
  modules: {
  }
})
