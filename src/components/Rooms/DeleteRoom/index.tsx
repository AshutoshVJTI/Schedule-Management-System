import React from "react";
import RoomsModel from "../../../models/rooms/index";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

const DeleteRoom = () => {
  const [roomId, setRoomId] = useState<string>("");
  const handleSubmit = async () => {
    await RoomsModel.deleteRoom(roomId);
  };
  return (
    <div className="root">
      <div className="form-container">
        <TextField
          label="Room ID"
          placeholder="Enter Room ID"
          size="small"
          className="textfield"
          onChange={(e) => setRoomId(e.target.value)}
        />
        <Button variant="contained" className="button" onClick={handleSubmit}>
          Delete Room
        </Button>
      </div>
    </div>
  );
};

export default DeleteRoom;
