/* eslint-disable react/prop-types */

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useState } from 'react';
import PlaylistForm from '../PlaylistForm/PlaylistForm.jsx';

const NavBar = () => {


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
          <PlaylistForm handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} />
          
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default NavBar