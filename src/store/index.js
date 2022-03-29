import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate"
 

Vue.use(Vuex)
	export default new Vuex.Store({
	plugins: [createPersistedState()],
	  state: {
	    msgPool: [],
		userinfo: {
			isLogin : false,
			username: '',
			// nickname: '',
			isSuper: false,
			Avatar:'',
		},
		setting:{
			superUserList:['Admin','LunaticRed']
		},
		
	  },
	  mutations: {
	    message(state,data) {
			state.msgPool.push(data)

				
	      //将消息添加到消息列表
	      //清除消息
	    },
		// 关掉一个消息
		messageDel(state){
			state.msgPool.pop()
		},
		updateUserInfo (state,userinfo) {
			state.userinfo.username = userinfo.username
			state.userinfo.isLogin = true
			state.userinfo.avatar = userinfo.avatar
			if(state.setting.superUserList.indexOf(userinfo.username) !== -1){
				state.userinfo.isSuper= true
			}
		},
		
		logout (state){
			state.userinfo.username = ''
			state.userinfo.isLogin = false
			state.userinfo.isSuper = false
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
