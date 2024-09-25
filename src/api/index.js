import axios from "axios";

const key = import.meta.env.VITE_YOUTUBE_API_KEY;

// console.log("key",import.meta.env.VITE_YOUTUBE_API_KEY);

const getPlaylistItems = async (
	playlistId,
	pageToken = "",
	result = { items: [] }
) => {
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;

	const { data } = await axios.get(url);

	// console.log(data);

	result.items = [...result.items, ...data.items];

	// console.log("result obj",result);

	if (data.nextPageToken) {
		result = getPlaylistItems(playlistId, data.nextPageToken, result);
	}

	return result;
};

const getPlaylist = async (playlistId) => {
	const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`;

	const { data } = await axios.get(url);

	// console.log(data);

	const {
		channelId,
		title: playListTitle,
		description: playListDescription,
		thumbnails,
		channelTitle,
	} = data.items[0].snippet ;

	let playlistItems = await getPlaylistItems(playlistId);

	let cid, ct;

	playlistItems = playlistItems.items.map((items) => {
		const {
			title,
			description,
			thumbnails: { high },
			channelId,
			channelTitle
		} = items.snippet;

		if(!cid) cid = channelId
		if(!ct) ct = channelTitle

		return {
			channelId: cid,
			title,
			description,
			thumbnails: high,
			channelTitle: ct,
			contentDetails: items.contentDetails,
		};
	});

	return {
		playListDescription,
		playListTitle,
		playlistId,
		thumbnails: thumbnails.high,
		channelId,
		channelTitle,
		playlistItems
	}
};

// export { getPlaylist, getPlaylistItems };

export default getPlaylist
