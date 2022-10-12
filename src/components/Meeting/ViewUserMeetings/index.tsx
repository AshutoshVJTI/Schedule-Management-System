import React from "react";
import MeetingModel from "../../../models/meeting/index";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import SnackbarWrapper from "../../SnackbarWrapper";

const ViewUserMeetings = () => {
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");
  const handleSubmit = async () => {
    await MeetingModel.getMeetingsUser(userId, user, roomId)
      .then((res) => {
        if (res.data.success === false) setError(res.data.message);
        setData(res.data.data);
      })
      .catch((error) => setError(error.response.data.message));
  };
  return (
    <div className="root">
      <div className="form-container">
        <TextField
          label="User ID"
          placeholder="Enter User ID"
          size="small"
          className="textfield"
          onChange={(e) => setUserId(e.target.value)}
        />
        <TextField
          label="User Name"
          placeholder="Enter User Name"
          size="small"
          className="textfield"
          onChange={(e) => setUser(e.target.value)}
        />
        <TextField
          label="Room ID"
          placeholder="Enter Room ID"
          size="small"
          className="textfield"
          onChange={(e) => setRoomId(e.target.value)}
        />
        <Button variant="contained" className="button" onClick={handleSubmit}>
          View Rooms for User
        </Button>
        {data.map((meeting) => {
          return <div></div>;
        })}
      </div>
      <SnackbarWrapper error={error} />
    </div>
  );
};

export default ViewUserMeetings;
