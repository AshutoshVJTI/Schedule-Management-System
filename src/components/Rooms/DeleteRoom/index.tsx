import React from "react";
import RoomsModel from "../../../models/rooms/index";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import SnackbarWrapper from "../../SnackbarWrapper";

const DeleteRoom = () => {
  const [error, setError] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");
  const handleSubmit = async () => {
    await RoomsModel.deleteRoom(roomId)
      .then((res) => {
        if (res.data.success === false) setError(res.data.message);
      })
      .catch((error) => setError(error.response.data.message));
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
      <SnackbarWrapper error={error} />
    </div>
  );
};

export default DeleteRoom;
