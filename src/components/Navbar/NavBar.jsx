/* eslint-disable react/prop-types */

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useState } from 'react';
import PlaylistForm from '../PlaylistForm/PlaylistForm.jsx';
import usePlayList from '../../hooks/usePlayList.js';
// import usePlayList from '../../hooks/usePlayList.js';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {

  const {getPlayListById} = usePlayList()

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='default'>
        <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Youtube Player
          </Typography>
          <PlaylistForm handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} getPlaylistById={getPlayListById} />
          
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default NavBar