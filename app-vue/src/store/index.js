import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    profile: {
      userId: '',
      displayName: '',
      pictureUrl: '',
      statusMessage: '',
    },
    members: [
      {
        id: 1,
        image: 'https://ca.slack-edge.com/T03EKL88Y-U03EKL89A-61874a193769-512',
        name: 'Cholathit Khueankaew',
        displayName: 'Cholathit',
        department: 'HR/Admin',
        position: 'Managing Director/CEO',
        skill: '',
        projects: null,
        type: 'Full-time',
      },
      {
        id: 2,
        image: 'https://ca.slack-edge.com/T03EKL88Y-U9HRS33LH-aaf90ffd0fca-512',
        name: 'Apichaya Hongsapak',
        displayName: 'pim',
        department: 'HR/Admin',
        position: 'HR/Admin',
        skill: '',
        projects: null,
        type: 'Full-time',
      },
      {
        id: 3,
        image: 'https://ca.slack-edge.com/T03EKL88Y-UJHQAR5GB-13cee788d1c2-512',
        name: 'Wisan Nakagawa',
        displayName: 'arm wisan',
        department: 'HR/Admin',
        position: 'Community Manager',
        skill: '',
        projects: null,
        type: 'Full-time',
      },

      {
        id: 4,
        image: 'https://ca.slack-edge.com/T03EKL88Y-UPX5YQEDU-3f1c55434773-512',
        name: 'Thanwimol Manopen',
        displayName: 'Mint Thanwimol',
        department: 'Development',
        position: 'Senior Project Manager',
        skill: '',
        projects: null,
        type: 'Full-time',
      },

      {
        id: 5,
        image: 'https://ca.slack-edge.com/T03EKL88Y-U016R3WAQ4U-0e8e2de8e11e-512',
        name: 'Surakarn Samkaew',
        displayName: 'Tonkla',
        department: 'Development',
        position: 'Developer',
        skill: '',
        projects: null,
        type: 'Full-time',
      },
      {
        id: 6,
        image: 'https://ca.slack-edge.com/T03EKL88Y-UNGSE8TPH-g4cf4f9cc0af-512',
        name: 'Nat W',
        displayName: 'Nat W',
        department: 'Development',
        position: 'Developer',
        skill: '',
        projects: null,
        type: 'Full-time',
      },
      {
        id: 7,
        image: 'https://ca.slack-edge.com/T03EKL88Y-UN1SYFAAW-9d0ac330ef89-512',
        name: 'ampere',
        displayName: 'ampere',
        department: 'Development',
        position: 'Developer',
        skill: '',
        projects: null,
        type: 'Full-time',
      },
      {
        id: 8,
        image: 'https://ca.slack-edge.com/T03EKL88Y-U0115EHAW73-5b10f51251f9-512',
        name: 'duke',
        displayName: 'duke',
        department: 'Development',
        position: 'Developer',
        skill: '',
        projects: null,
        type: 'Full-time',
      },
      {
        id: 9,
        image: 'https://ca.slack-edge.com/T03EKL88Y-UR7G91LAH-5f30317a29ec-512',
        name: 'Kittayanee Khuankaew',
        displayName: 'Angie',
        department: 'Development',
        position: 'Business Analysis',
        skill: '',
        projects: null,
        type: 'Full-time',
      },
      {
        id: 10,
        image: 'https://ca.slack-edge.com/T03EKL88Y-U5VNS1XE1-d67dc521b341-512',
        name: 'J A N G',
        displayName: 'J A N G',
        department: 'Design',
        position: 'UX/UI Designer',
        skill: '',
        projects: null,
        type: 'Full-time',
      },
      {
        id: 11,
        image: 'https://ca.slack-edge.com/T03EKL88Y-UB1TJHGFR-c242e7741d3d-512',
        name: 'Phitshayapa Wiangwat',
        displayName: 'Patti is Happy',
        department: 'Design',
        position: 'UX/UI Designer',
        skill: '',
        projects: null,
        type: 'Full-time',
      },
      {
        id: 12,
        image: 'https://ca.slack-edge.com/T03EKL88Y-UDRN3RWAJ-b8a538630c17-512',
        name: 'Pawiness Boonyothayan',
        displayName: 'Gin',
        department: 'Marketing',
        position: 'Marketing Strategic Planner',
        skill: '',
        projects: null,
        type: 'Full-time',
      },
      {
        id: 13,
        image: 'https://ca.slack-edge.com/T03EKL88Y-US202147N-17595e2b2c00-512',
        name: 'Khomsun Chaiwong',
        displayName: 'Mooyai',
        department: 'Design',
        position: 'Designer',
        skill: '',
        projects: null,
        type: 'Full-time',
      },
    ],
    lists: [
      {
        id: 1,
        name: 'Project #1',
        position: 'Web Design',
        description: 'Commodo adipiscing ornare sit lorem sit tempus urna, vestibulum, neque.',
        status: 'WIP',
      },
      {
        id: 2,
        name: 'Artisan’ Dashboard Project',
        position: 'Mobile App',
        description: 'The Dashboard that show the flow of work in the project.',
        status: 'WIP',
      },
      {
        id: 3,
        name: 'Project #2',
        position: 'Marketing',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        status: 'Done',
      },
      {
        id: 4,
        name: 'Project #3',
        position: 'Mobile App',
        description: 'Consequat tempus nisi, orci, ligula duis.',
        status: 'Done',
      },
    ],
    news: [
      {
        id: 1,
        date: '1',
        month: 'May',
        day: 'Fri',
        name: 'Intern | progress',
        description: 'In 2nd floor meeting room',
        status: 'Important',
      },
      {
        id: 2,
        date: '10',
        month: 'May',
        day: 'Sun',
        name: 'Intern | progress',
        description: 'In 2nd floor meeting room',
        status: 'Important',
      },
      {
        id: 3,
        date: '29',
        month: 'May',
        day: 'Fri',
        name: 'Intern | progress',
        description: 'In 2nd floor meeting room',
        status: 'Important',
      },
      {
        id: 4,
        date: '30',
        month: 'May',
        day: 'Fri',
        name: 'Intern | progress',
        description: 'In 2nd floor meeting room',
        status: 'Important',
      },
    ],
  },
  mutations: {
    setPicProfile(state, value) {
      state.profile.pictureUrl = value
    },
    setUserId(state, value) {
      state.profile.userId = value
    },
    setDisplayName(state, value) {
      state.profile.displayName = value
    },
    setStatusMessage(state, value) {
      state.profile.statusMessage = value
    },
  },
  getters: {
    // getPicProfile(state) {
    //   return state.profile.pictureUrl
    // },
  },
  actions: {
    showPicProfile(context) {
      context.commit('setPicProfile', this.getters.getPicProfile)
    },
  },
  modules: {},
})