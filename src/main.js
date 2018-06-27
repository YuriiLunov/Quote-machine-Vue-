import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = 'https://andruxnet-random-famous-quotes.p.mashape.com/'
Vue.http.headers.common['X-Mashape-Key'] = 'hQotQmXzEFmshvqOU8mdSTRTtNCpp1NBHlpjsnhsByBU5HZF8T';

new Vue({
  el: '#app',
  render: h => h(App)
})
