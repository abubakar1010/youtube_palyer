// import { action, persist, thunk } from "easy-peasy";
// import getPlaylist from "../api/index.js";

import { action, persist, thunk } from "easy-peasy"
import getPlaylist from "../api/index.js"

// const playlistModel = persist({
// 	items: [],
// 	description: "",
// 	title: "",
// 	id: "",
// 	thumbnails: "",
// 	channelId: "",
// 	channelTitle: "",
// 	setPlaylistData: action((state, payload) => {
// 		console.log(payload);

// 		state = { ...payload };
//         return state
// 	}),
// 	getPlaylist: thunk(async (action, payload) => {

        
// 		const {
//             playListDescription,
//             playListTitle,
//             playlistId,
//             thumbnails,
//             channelId,
//             channelTitle,
//             playlistItems
//         } = await getPlaylist(payload);

// 		action.setPlaylistData({
//             description: playListDescription,
//             title: playListTitle,
//             id: playlistId,
//             thumbnails: thumbnails,
//             channelId: channelId,
//             channelTitle: channelTitle,
//             items: playlistItems
//         });

        
// 	}),
// });

// // const recentPlaylistModel = {
// // 	items: [],
// // };
// // const favoritePlaylistModel = {
// // 	items: [],
// // };

// export { playlistModel };


const playlistModel = persist({

    data: {},
    error:"",
    loading: false,
    setError: action( (state, payload) => {
        state.error = payload
    }),
    setLoading: action( (state, payload) => {
        state.loading = payload
    }),
    addPlaylist: action( (state, payload) => {
        state.data[payload.playlistId] = payload
    }),
    getPlaylist: thunk( async( {addPlaylist, setError, setLoading}, payload, helpers) => {
        if( helpers.getState().data[payload]) {
            console.log("cancelled");
            return
            
        }
        setLoading(true)
        try {
            const playlist = await getPlaylist(payload)
    
            addPlaylist(playlist)        
        } catch (error) {
            setError(error?.response?.data?.error?.message || "Something went wrong")
        }
        finally{
            setLoading(false)
        }
    })
})

export default playlistModel
