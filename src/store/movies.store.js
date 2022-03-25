import mockMovies from '../mock_data'

const moduleMovies = {
    namespaced: true,
    state: () => ({
        moviesList: [...mockMovies],
    }),
    mutations: {
        addNewMovie: (state, item) => state.moviesList = [item, ...state.moviesList],
        editMovie: (state, movie) => state.moviesList = state.moviesList.map(item => item.id === movie.id
            ? ({ ...movie })
            : item),
        changeClientRating: (state, rating) => state.moviesList = state.moviesList.map(item => item.id === rating.id
            ? { ...item, ClientRating: rating.value }
            : item)
    },
}

export default moduleMovies;