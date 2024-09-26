/* eslint-disable react/display-name */
import { useStoreState } from "easy-peasy";
import {useParams } from "react-router-dom";
import { Box } from "@mui/material";
import VideoThumb from "../VideoThumb/VideoThumb.jsx";
import YouTube from "react-youtube";
import { useState } from "react";




const DisplayPlaylist = () => {

    const {playlistId} = useParams()
    // console.log(useParams());

    const {data} = useStoreState( state => state.playlists)

    const {playlistItems} = data[playlistId]
    // console.log(data[playlistId]);

    // console.log(playlist.playlistTitle);
    
    const option = {
		height: '520',
		width: '840',
		playerVars: {
		  autoplay: 1,
		},
	  };

      console.log(playlistItems[0].contentDetails.videoId);
      

    const [videoId, setVideoId] = useState(playlistItems[0].contentDetails.videoId)

    const handleVideoId = (id) => {

        setVideoId(id)

    }

    console.log(videoId);
    
    
    
    return (
        <>
        
            <Box  sx={{display:"flex", gap: 4, marginTop: 5, width: 1300, mx: "auto" }}>

            <Box>
            <YouTube opts={option} videoId={videoId} />
            </Box>

                <Box sx={{height: 520, overflow:"scroll", overflowX: "auto", scrollBehavior: "smooth"}}>
                {
                    playlistItems.map( item => (
                            <VideoThumb key={item.contentDetails.videoId} title={item.title} thumbnail={item.thumbnails.url} videoId={item.contentDetails.videoId}  handleVideoId={handleVideoId}  />
                    ) )
                }
                </Box>
            </Box>

            {/* <div>
                <Grid2 container  spacing={3}>

                {
                    playlistItems.map( item => (
                        <Grid2 key={item.contentDetails.videoId}>
                            <VideoThumb title={item.title} thumbnail={item.thumbnails.url} videoId={item.contentDetails.videoId} playlistId={playlistId}  />
                        </Grid2>
                    ) )
                }

                </Grid2>
            </div> */}

            {/* <div>
                <YouTube videoId={playlistItems[3].contentDetails.videoId} />
            </div> */}
        </>
    );
};

export default DisplayPlaylist;