/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box } from "@mui/material";

export default function VideoThumb({ thumbnail, title, videoId, handleVideoId }) {
	return (
		<>
			<Card onClick={ () => handleVideoId(videoId)} sx={{ display: "flex", marginBottom: 2, height: 120, maxWidth: 340, cursor: "pointer" }}>
			<CardMedia
					component="img"
					sx={{ width: 160 }}
					image={thumbnail}
					alt="Live from space album cover"
				/>
				<Box >
					<CardContent sx={{ flex: "1 0 auto" }}>
						<Typography component="div" variant="p">
							{title}
						</Typography>
						
					</CardContent>
					
				</Box>
				
			</Card> 
		</>
	);
}
