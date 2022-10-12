import React from 'react'
import RoomsModel from '../../../models/rooms/index';
import {useState} from 'react';
import { Button, TextField } from '@mui/material';

const DeleteRoom = () => {
    const [roomId, setRoomId] = useState<string>("");
    const handleSubmit = async () => {
        await RoomsModel.deleteRoom(roomId);
    }
  return (
    <div>
        <TextField label="Room ID" placeholder='Enter Room ID' onChange={(e) => setRoomId(e.target.value)} />
        <Button variant="contained" onClick={handleSubmit}>Delete Room</Button>
    </div>
  )
}

export default DeleteRoom