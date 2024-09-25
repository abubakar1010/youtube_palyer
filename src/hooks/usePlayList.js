import { useEffect, useState } from "react"
import getPlaylist from "../api/index.js"


const usePlayList = () => {

    const initialState = {
        playList:{},
        recent:[],
        favorite: []
    }

    const localStorage_key ="pl_data"

    const [data, setData] = useState(initialState)

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        const localStorageData = localStorage.getItem(localStorage_key)

        
        
        if(localStorageData){
            const saveData = JSON.parse(localStorageData)
            console.log("local", saveData);
            setData({...saveData})
        }
    },[])

    useEffect( () => {

        if(initialState !== data){
        localStorage.setItem(localStorage_key, JSON.stringify(data))
        }
    },[data, initialState])



    const getPlayListById = async(playListId, force=false) => {

        if(data.playList[playListId] && !force){
            return;
        }


        setLoading(true)
        

        try {
            const playList = await getPlaylist(playListId)
            // console.log("playList form hooks", playList);
            
            setError("")
            setData( prev => ({
                ...prev,
                playList:{
                    ...prev.playList,
                    [playListId]: playList
                }
            }))
        } catch (error) {
            setError(error.response?.data?.error?.message || "Something went wrong")
        }finally{
            setLoading(false)
        }

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