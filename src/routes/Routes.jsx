import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import App from "../App.jsx";
import DisplayPlaylist from "../components/DisplayPlaylist/DisplayPlaylist.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "playlist/:playlistId",
                element: <DisplayPlaylist />
            },
            
        ]
    }
])

export default routes