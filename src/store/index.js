import { createStore } from 'vuex'
import moduleMovies from './movies.store'

const store = createStore({
    namespaced: true,
    modules: {
        moduleMovies: moduleMovies,
    }
})

export default store;