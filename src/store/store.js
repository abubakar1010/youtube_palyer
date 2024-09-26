import { createStore } from "easy-peasy";
import playlistModel from "./playlistModel.js";
// import { playlistModel } from "./playlistModel.js";

const store = createStore({
	playlists: playlistModel,
});

export default store;
