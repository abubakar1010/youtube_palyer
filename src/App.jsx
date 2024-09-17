import { useEffect } from "react";
import usePlayList from "./hooks/usePlayList.js";

const App = () => {

  const {getPlayListById, playList, error, loading} = usePlayList()

  useEffect(() => {
    getPlayListById("PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl")
  },[])

  console.log("playList", playList);
  console.log("ERROR:", error);
  console.log("Loading", loading);
  
  
  
  return (
    <div>
      <h1>Project setup</h1>
    </div>
  );
};

export default App;