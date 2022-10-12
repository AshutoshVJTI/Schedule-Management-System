import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import MeetingModel from "../../../models/meeting";
import { CreateMeetingDataProps } from "../../../types/@types";
import DatePicker from "../../Datepicker";
import MultipickTextfield from "../../MultiPickTextfield";
import SnackbarWrapper from "../../SnackbarWrapper";
import Timepicker from "../../Timepicker";

const CreateMeeting = () => {
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<CreateMeetingDataProps>({
    userId: "",
    roomId: "",
    guestUsers: [""],
    meetingDate: "",
    startTime: "",
    endTime: "",
  });
  const [hostUserId, setHostUserId] = useState<string>("");
  const [hostUserName, setHostUserName] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [guestUsers, setGuestUsers] = useState<string[]>([]);
  useEffect(() => {
    setData({
      ...data,
      meetingDate: startDate,
      startTime: startTime,
      endTime: endTime,
      guestUsers: guestUsers,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endTime, startDate, startTime, guestUsers]);
  const handleSubmit = async () => {
    await MeetingModel.createMeeting(hostUserId, hostUserName, roomId, data)
      .then((res) => {
        if (res.data.success === false) setError(res.data.message);
      })
      .catch((error) => setError(error.response.data.message));
  };
  return (
    <div className="root">
      <div className="form-container">
        <TextField
          label="Host User ID"
          placeholder="Enter Host User ID"
          className="textfield"
          size="small"
          onChange={(e) => {
            setHostUserId(e.target.value);
            setData({
              ...data,
              userId: e.target.value,
            });
          }}
        />
        <TextField
          label="Host User Name"
          placeholder="Enter Host User Name"
          className="textfield"
          size="small"
          onChange={(e) => {
            setHostUserName(e.target.value);
          }}
        />
        <TextField
          label="Room ID"
          placeholder="Enter Room ID"
          className="textfield"
          size="small"
          onChange={(e) => {
            setRoomId(e.target.value);
            setData({
              ...data,
              roomId: e.target.value,
            });
          }}
        />
        <div className="textfield">
          <MultipickTextfield setData={setGuestUsers} />
        </div>
        <div className="textfield">
          <DatePicker setDate={setStartDate} />
        </div>
        <div className="textfield">
          <Timepicker label={"Start Time"} setTime={setStartTime} />
        </div>
        <div className="textfield">
          <Timepicker label={"End Time"} setTime={setEndTime} />
        </div>
        <Button className="button" variant="contained" onClick={handleSubmit}>
          Create Meeting
        </Button>
      </div>
      <SnackbarWrapper error={error} />
    </div>
  );
};

export default CreateMeeting;
