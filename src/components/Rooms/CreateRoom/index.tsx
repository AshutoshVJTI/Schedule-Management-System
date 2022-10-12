import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import RoomsModel from "../../../models/rooms";
import { CreateRoomDataProps } from "../../../types/@types";
import SnackbarWrapper from "../../SnackbarWrapper";

const CreateRoom = () => {
  const [data, setData] = useState<CreateRoomDataProps>({
    roomId: "",
    roomName: "",
  });
  const [error, setError] = useState<string>("");
  const handleSubmit = async () => {
    await RoomsModel.addRoom(data).catch((error) =>
      setError(error.response.data.message)
    );
  };
  return (
    <div className="root">
      <div className="form-container">
        <TextField
          label="Room ID"
          placeholder="Enter Room ID"
          size="small"
          className="textfield"
          onChange={(e) =>
            setData({ roomId: e.target.value, roomName: data.roomName })
          }
        />
        <TextField
          label="Room Name"
          placeholder="Enter Room Name"
          size="small"
          className="textfield"
          onChange={(e) =>
            setData({ roomId: data.roomId, roomName: e.target.value })
          }
        />
        <Button variant="contained" className="button" onClick={handleSubmit}>
          Create Room
        </Button>
        <SnackbarWrapper error={error} />
      </div>
    </div>
  );
};

export default CreateRoom;
