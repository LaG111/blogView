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
			Avatar:''
		},
		setting:{
			superUserList:['Admin','LunaticRed']
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
