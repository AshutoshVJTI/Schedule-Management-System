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
    if (Object.values(data).every((v) => v === ""))
      return setError("Please enter all the values");
    await RoomsModel.addRoom(data)
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
          onChange={(e) =>
            setData({ roomId: e.target.value, roomName: data.roomName })
          }
        />
        <TextField
          required
          label="Room Name"
          placeholder="Enter Room Name"
          size="small"
          className="textfield"
          sx={{
            "& fieldset": { border: "none" },
            "& label.Mui-focused": {
              color: "white",
            },
          }}
          onChange={(e) =>
            setData({ roomId: data.roomId, roomName: e.target.value })
          }
        />
        <Button variant="text" className="button" onClick={handleSubmit}>
          Create Room
        </Button>
      </div>
      <SnackbarWrapper error={error} />
    </div>
  );
};

export default CreateRoom;
