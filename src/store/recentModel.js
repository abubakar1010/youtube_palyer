import { action } from "easy-peasy"

const recentModel = {
    items: [],
    addToRecent: action( (state, payload) => {
        state.items.unShift(payload)
        state.items.slice(0, 5)
    })
}

export default recentModel