import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			userID: '',
			emergencyID: '',
		},
		mutations: {
			setUser(state, value) {
				state.userID = value
			},

			setEmergency(state, value) {
				state.emergencyID = value
			},
		},
	})
}

export default createStore
