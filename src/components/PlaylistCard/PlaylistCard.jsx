/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Button, Stack } from "@mui/material";
import { FaRegPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PlayListCard = ({ channelTitle, thumbnails, playListTitle, playlistId }) => {
	// console.log(playlistId);

	return (
			<Card sx={{ maxWidth: 330, marginY: 3, marginLeft: 1}}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="240"
						image={thumbnails}
						alt="green iguana"
					/>
					<CardContent sx={{display: "flex", flexDirection: "column"}} >
						<Typography gutterBottom variant="h5" component="div" sx={{minHeight: 60}}>
							{playListTitle.slice(0, 40)} ....
						</Typography>
						<Box sx={{}}></Box>
						<Typography variant="h6" sx={{ color: "text.secondary", py: "15", minHeight: 35  }}>
							{channelTitle}
						</Typography>
						<Button  to={`playlist/${playlistId}`} component={Link} sx={{ marginTop:"20px", width: "max-content", marginLeft: "auto"}}>
						<Stack direction="row" alignItems={"center"} justifyContent={"right"} gap={1} >
						<FaRegPlayCircle style={{fontSize: "20px", color: "purple"}}  />
						<Typography sx={{}}>
							View Full Playlist
						</Typography>
						</Stack>
						</Button>
					</CardContent>
				</CardActionArea>
			</Card>
	);
};

export default PlayListCard;
