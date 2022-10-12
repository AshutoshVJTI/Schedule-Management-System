import React from 'react'
import UserModel from '../../../models/user/index';
import {useState} from 'react';
import { Button, TextField } from '@mui/material';

const DeleteUser = () => {
    const [userId, setUserId] = useState<string>("");
    const handleSubmit = async () => {
        await UserModel.deleteUser(userId);
    }
  return (
    <div>
        <TextField label="User ID" placeholder='Enter User ID' onChange={(e) => setUserId(e.target.value)} />
        <Button variant="contained" onClick={handleSubmit}>Delete User</Button>
    </div>
  )
}

export default DeleteUser