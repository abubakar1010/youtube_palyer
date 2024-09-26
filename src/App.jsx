import { Container, CssBaseline, Typography } from "@mui/material";
// import usePlayList from "./hooks/usePlayList.js";
import PlayListCard from "./components/PlaylistCard/PlaylistCard.jsx";
import { useStoreState } from "easy-peasy";

const App = () => {

  // const {playList} = usePlayList()

  const {data: playList} = useStoreState( state => state.playlists)

  const playLists = Object.values(playList)
  
  
  return (
    <>
    <CssBaseline />
      {/* <h1>Project setup</h1> */}
      <Container maxWidth="lg">
        
      <Typography sx={{display: "flex", direction: "row", marginX: 4, flexWrap: "wrap" }} component='div' >
      {
        playLists.length > 0 && playLists.map( item => <PlayListCard key={item.playlistId} channelTitle={item.channelTitle} playListTitle={item.playListTitle} thumbnails={item.thumbnails.url} playlistId={item.playlistId} />
        )
      }
      </Typography>
      </Container>
    </>
  );
};

export default App;