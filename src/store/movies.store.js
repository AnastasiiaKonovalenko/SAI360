import mockMovies from '../mock_data'

const moduleMovies = {
    namespaced: true,
    state: () => ({
        moviesList: [...mockMovies],
    }),
    mutations: {},
    getters: {}
}

export default moduleMovies