import { Button } from "@mui/material";
import React, { useState } from "react";
import MeetingModel from "../../../models/meeting";
import { CreateMeetingDataProps } from "../../../types/@types";
import DatePicker from "../../Datepicker";
import MultipickTextfield from "../../MultiPickTextfield";
import Timepicker from "../../Timepicker";

const CreateMeeting = () => {
  const [data, setData] = useState<CreateMeetingDataProps>({
    userId: "",
    roomId: "",
    guestUsers: [""],
    meetingDate: "",
    startTime: "",
    endTime: "",
  });
  const hostUserId = "123";
  const hostUser = "123";
  const hostRoomId = "123";
  const handleSubmit = async () => {
    await MeetingModel.createMeeting(hostUserId, hostUser, hostRoomId, data);
  };
  return (
    <div>
      <DatePicker />
      {/* <TextField
        label="Date"
        placeholder="Enter Date"
        variant="outlined"
        onChange={(e) =>
          setData({
            userId: data.userId,
            roomId: data.roomId,
            guestUsers: data.guestUsers,
            meetingDate: e.target.value,
            startTime: data.startTime,
            endTime: data.endTime,
          })
        }
      /> */}
      <MultipickTextfield />
      <Timepicker label={"Start Time"} />
      <Timepicker label={"End Time"}/>
      {/* <TextField
        label="Start Time"
        placeholder="Enter Start Time"
        variant="outlined"
        onChange={(e) =>
          setData({
            userId: data.userId,
            roomId: data.roomId,
            guestUsers: data.guestUsers,
            meetingDate: data.meetingDate,
            startTime: e.target.value,
            endTime: data.endTime,
          })
        }
      /> */}
      {/* <TextField
        label="End Time"
        placeholder="Enter End Time"
        variant="outlined"
        onChange={(e) =>
          setData({
            userId: data.userId,
            roomId: data.roomId,
            guestUsers: data.guestUsers,
            meetingDate: data.meetingDate,
            startTime: data.startTime,
            endTime: e.target.value,
          })
        }
      /> */}
      <Button variant="contained" onClick={handleSubmit}>
        Create Meeting
      </Button>
    </div>
  );
};

export default CreateMeeting;
