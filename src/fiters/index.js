import Vue from 'vue'

Vue.filter('endState',function (state) {
  switch (state) {
    case 0:
      return state = '连载'
    case 1:
      return state = '完结'
  }
})
