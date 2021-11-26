import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
	export default new Vuex.Store({
	  state: {
	    msgPool: [],
		userinfo: {
			isLogin : false,
			username: '',
			// nickname: '',
			isSuper: false
		},
		setting:{

		},
	  },
	  mutations: {
	    message(state,data) {
	      	state.msgPool.push(data)
			  if(data.time){
				  setTimeout(() => {
					state.msgPool.splice(state.msgPool.indexOf(data),1)
					// 用shift会导致先出的先摧毁，而不是当前这个
				  }, data.time);
			  }
				
	      //将消息添加到消息列表
	      //清除消息
	    },
		// 关掉一个消息
		messageDel(state,index){
			state.msgPool.splice(index,1)
		},
		login (state, userinfo) {
			state.userinfo.username = userinfo.username
			state.userinfo.isLogin = true
			if(state.setting.superUser.indexOf(username) !== -1){
				state.userinfo.isSuper= true
			}
			// state.userinfo.nickname = userinfo.nickname
		},
		logout (state){
			state.userinfo.username = ''
			state.userinfo.isLogin = false
		},
		getSetting(state,setting){
			state.setting = setting
		}

	  },
	  actions: {
	  },
	  modules: {
	  }
	})
