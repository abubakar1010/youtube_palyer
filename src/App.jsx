import { useEffect } from "react";
import usePlayList from "./hooks/usePlayList.js";

const App = () => {

  const {getPlayListById, playList} = usePlayList()

  useEffect(() => {
    getPlayListById("PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl")
  },[])

  console.log("playList", playList);
  
  return (
    <div>
      <h1>Project setup</h1>
    </div>
  );
};

export default App;