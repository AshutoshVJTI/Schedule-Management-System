import React from "react";
import RoomsModel from "../../../models/rooms";
import { useState } from "react";
import { Room } from "../../../types/@types";
import { Button, TextField } from "@mui/material";

const UpdateRoom = () => {
  const [data, setData] = useState<Room>({
    roomId: "",
    roomName: "",
  });
  const handleSubmit = async () => {
    await RoomsModel.updateRoom(data);
  };
  return (
    <div>
      <TextField
        label="Room ID"
        placeholder="Enter Room ID"
        onChange={(e) =>
          setData({
            roomId: e.target.value,
            roomName: data.roomName,
          })
        }
      />
      <TextField
        label="Room Name"
        placeholder="Enter Room Name"
        onChange={(e) =>
          setData({
            roomId: data.roomId,
            roomName: e.target.value,
          })
        }
      />
      <Button variant="contained" onClick={handleSubmit}>
        Update Room
      </Button>
    </div>
  );
};

export default UpdateRoom;
