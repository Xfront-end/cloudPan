import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'
import './assets/css/reset.css'
import './assets/css/common.less'

const isMock = false

if(isMock) {
  require('./mock/index')
}

import { 
  Upload, 
  Radio, 
  RadioGroup,
  Button,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Message,
  MessageBox
} from 'element-ui'

Vue.use(Upload)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)

axios.defaults.baseURL = 'http://zht.pwiki.ml:8000/'

Vue.use(VueAxios, axios)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
