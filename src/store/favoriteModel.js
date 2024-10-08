import { action } from "easy-peasy"

const favoriteModel = {
    items: [],
    addToFavorite: action( (state, payload) => {
        state.items.push(payload)
    }),
    removeFromFavorite: action( (state, payload) => {
        state.items = state.items.filter( item => item.playlistId !== payload)

        return state.item
    })
}

export default favoriteModel