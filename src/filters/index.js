import Vue from 'vue'

Vue.filter('endState',function (state) {
  switch (state) {
    case 0:
      return state = '连载'
    case 1:
      return state = '完结'
  }
});

Vue.filter('filterRecommend',function (data) {
  switch (data) {
    case 1:
      return data = '推荐'
    case 0:
      return data = ''
  }
})

Vue.filter('filterPrice',function (data) {
  return data + '.00'
})

Vue.filter('filterReplace',function (data) {
  switch (data) {
    case 1:
      return data = '换一批';
    case 0:
      return data = ''
  }
});

Vue.filter('filterReading',function (data) {
  if (data == null){
    return data = '开始阅读'
  }
  return '续看' + data
})

Vue.filter('filterSerialState',function (data) {
  switch (data) {
    case 0 :
      return '连载中'
    case 1 :
      return '已完结'
  }
})

Vue.filter('filterCollect',function (data) {
  switch (data) {
    case 0 :
      return '加入书架'
    case 1 :
      return '已加入书架'
  }
})
