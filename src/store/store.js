import { createStore } from "easy-peasy";
import playlistModel from "./playlistModel.js";
// import { playlistModel } from "./playlistModel.js";

const store = createStore({
	playlist: playlistModel,
});

export default store;
