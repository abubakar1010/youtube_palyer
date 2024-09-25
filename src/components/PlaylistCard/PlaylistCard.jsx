/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Button, Stack } from "@mui/material";
import { FaRegPlayCircle } from "react-icons/fa";

const PlayListCard = ({ channelTitle, thumbnails, playListTitle }) => {
	console.log(playListTitle);

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
						<Typography gutterBottom variant="h5" component="div">
							{playListTitle.slice(0, 40)} ....
						</Typography>
						<Box sx={{}}></Box>
						<Typography variant="h6" sx={{ color: "text.secondary", py: "15",  }}>
							{channelTitle}
						</Typography>
						<Stack direction="row" alignItems={"center"} justifyContent={"right"} sx={{marginTop: 2,
						}} >
						<FaRegPlayCircle style={{fontSize: "20px", color: "blue"}}  />
						<Button sx={{textAlign: "right"}}>
							View Full Playlist
						</Button>
						</Stack>
					</CardContent>
				</CardActionArea>
			</Card>
	);
};

export default PlayListCard;
