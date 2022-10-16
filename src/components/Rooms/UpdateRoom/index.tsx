import React from "react";
import RoomsModel from "../../../models/rooms";
import { useState } from "react";
import { Room } from "../../../types/@types";
import { Button, TextField } from "@mui/material";
import SnackbarWrapper from "../../SnackbarWrapper";

const UpdateRoom = () => {
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<Room>({
    roomId: "",
    roomName: "",
  });
  const handleSubmit = async () => {
    if (Object.values(data).every((v) => v === ""))
      return setError("Please enter all the values");
    await RoomsModel.updateRoom(data)
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
          sx={{
            "& fieldset": { border: "none" },
            "& label.Mui-focused": {
              color: "white",
            },
          }}
          onChange={(e) =>
            setData({
              roomId: e.target.value,
              roomName: data.roomName,
            })
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
            setData({
              roomId: data.roomId,
              roomName: e.target.value,
            })
          }
        />
        <Button variant="text" className="button" onClick={handleSubmit}>
          Update Room
        </Button>
      </div>
      <SnackbarWrapper error={error} />
    </div>
  );
};

export default UpdateRoom;
