import { createStore } from 'vuex' 

const store = createStore({
  state: {
    userId: null,
    userName: null,
    userBio: null,
    userSkills: [],
    profileImage: null
  },
  getters: {
    getUserId: (state) => {
      return state.userId
    },
    getUserName: (state) => {
      return state.userName
    },
    getUserBio: (state) => {
      return state.userBio
    },
    getProfileImage: (state) => {
      return state.profileImage
    },
    getUserSkills: (state) => {
      return state.userSkills
    }
  },
  mutations: {
    setUserId(state, id) {
      state.userId = id
    },
    setUserName(state, name) {
      state.userName = name
    },
    setUserBio(state, value) {
      state.userBio = value
    },
    setUserSkills(state, skills) {
      state.userSkills = skills
    }
  },
  actions: {},
  modules: {}
})

export default store