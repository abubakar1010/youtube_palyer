/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

const PlaylistForm = ({handleClickOpen, handleClose, open, getPlaylistById}) =>  {


  const [playlistId, setPlaylistId] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault()
    if(!playlistId.trim()){
      alert("insert a valid id")
    }else{
      getPlaylistById(playlistId)
      setPlaylistId("")
      handleClose()
    }
  }

  return (
    <>

      <Button variant='contained' onClick={handleClickOpen} sx={{background: "purple"}}>Add Playlist</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            handleSubmit(event)
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`To add a new playlist insert the valid playlist id or link.Otherwise we won't to able to add your playlist.`}
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="playlistId"
            name="playlistId"
            label="Playlist Id"
            type="text"
            fullWidth
            variant="standard"
            onChange={ (e) => setPlaylistId(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add New</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default PlaylistForm