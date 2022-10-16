import React from "react";
import RoomsModel from "../../../models/rooms/index";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import SnackbarWrapper from "../../SnackbarWrapper";

const DeleteRoom = () => {
  const [error, setError] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");
  const handleSubmit = async () => {
    if (roomId === "") return setError("Please enter all the values");
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
          required
          label="Room ID"
          placeholder="Enter Room ID"
          size="small"
          className="textfield"
          sx={{
            "& fieldset": { border: "none" },
            "& label.Mui-focused": {
              color: "white",
            },
          }}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <Button variant="text" className="button" onClick={handleSubmit}>
          Delete Room
        </Button>
      </div>
      <SnackbarWrapper error={error} />
    </div>
  );
};

export default DeleteRoom;
