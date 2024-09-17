import { useState } from "react"
import getPlaylist from "../api/index.js"

const usePlayList = () => {

    const [data, setData] = useState({
        playList:{},
        recent:[],
        favorite: []
    })

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)



    const getPlayListById = async(playListId, force=false) => {

        if(data.playList[playListId] && !force){
            return;
        }

        let result;

        setLoading(true)

        try {
            result = await getPlaylist(playListId)
            setError("")
        } catch (error) {
            setError(error.response?.data?.error?.message || "Something went wrong")
        }finally{
            setLoading(false)
        }

        console.log(result);

        let cid, ct;

        result = result.items.map((items) => {
			const {
				channelId,
				title,
				description,
				thumbnails: { medium },
				channelTitle,
			} = items.snippet;

            if(!cid) cid = channelId
            if(!ct) ct = channelTitle
			return {
				channelId: cid,
				title,
				description,
				thumbnails: medium,
				channelTitle: ct,
				contentDetails: items.contentDetails,
			};
		});
        

        setData( (prev) => ({
            ...prev,
            playList:{
                ...prev.playList,
                [playListId]: {
                    items: result,
                    playListId: playListId,
                    channelId: cid,
                    channelTitle: ct
                }
            }
        }))

    }

    const addToFavorite = (playListId) => {

        setData( prev => ({
            ...prev,
            favorite: [ ...prev.favorite, playListId]
        }))
    }
    const addToRecent = (playListId) => {

        setData( prev => ({
            ...prev,
            recent: [ ...prev.recent, playListId]
        }))
    }

    const getPlaylistByIds = (ids) => {

        return ids.map( id => data.playList[id])
    }


    return {
        playList: data.playList,
        favorite: getPlaylistByIds(data.favorite),
        recent: getPlaylistByIds(data.recent),
        getPlayListById,
        addToFavorite,
        addToRecent,
        error,
        loading
    }

}

export default usePlayList