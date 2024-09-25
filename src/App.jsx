import { Container, CssBaseline, Typography } from "@mui/material";
import usePlayList from "./hooks/usePlayList.js";
import PlayListCard from "./components/PlaylistCard/PlaylistCard.jsx";
import { useStoreActions } from "easy-peasy";
import { useEffect } from "react";

const App = () => {

  // console.log("called");

  const {getPlaylist} = useStoreActions( action => action.playlist)
  // console.log(getPlaylist);

  useEffect( () => {

    getPlaylist("PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW")

  },[])
  
  

  const {playList} = usePlayList()

  // console.log("Playlist", playList);
  const playLists = Object.values(playList)
  
  
  return (
    <>
    <CssBaseline />
      {/* <h1>Project setup</h1> */}
      <Container maxWidth="lg">
      <Typography sx={{display: "flex", direction: "row", marginX: 4, flexWrap: "wrap" }} component='div' >
      {
        playLists.length > 0 && playLists.map( item => <PlayListCard key={item.channelId} channelTitle={item.channelTitle} playListTitle={item.playListTitle} thumbnails={item.thumbnails.url} />
        )
      }
      </Typography>
      </Container>
    </>
  );
};

export default App;