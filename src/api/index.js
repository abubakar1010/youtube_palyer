import axios from "axios";

const key = import.meta.env.VITE_YOUTUBE_API_KEY;

// console.log("key",import.meta.env.VITE_YOUTUBE_API_KEY);


const getPlaylist = async (playlistId, pageToken = "", result = {items:[]}) => {
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;

	const { data } = await axios.get(url);

    // console.log(data);
    

    result.items = [...result.items,...data.items]

    // console.log("result obj",result);
    

	if (data.nextPageToken) {
		result = getPlaylist(playlistId, data.nextPageToken, result);


		
	}

	return result;
};

export default getPlaylist;
