import React from "react";
import MeetingModel from "../../../models/meeting/index";
import { useState } from "react";
import {
  Button,
  Table,
  TableContainer,
  TextField,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import SnackbarWrapper from "../../SnackbarWrapper";
import { MeetingRoom } from "../../../types/@types";
import dayjs from "dayjs";

const ViewUserMeetings = () => {
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<MeetingRoom[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const handleSubmit = async () => {
    if (userId === "")
      return setError("Please enter User ID");
    await MeetingModel.getMeetingsUser(userId, user, roomId)
      .then((res) => {
        if (res.data.success === false) setError(res.data.message);
        setData(res.data.data);
        setOpen(true);
      })
      .catch((error) => setError(error.response.data.message));
  };
  return (
    <div className="root">
      <div className="form-container">
        <TextField
          required
          label="User ID"
          placeholder="Enter User ID"
          size="small"
          className="textfield"
          sx={{
            "& fieldset": { border: "none" },
            "& label.Mui-focused": {
              color: "white",
            },
          }}
          onChange={(e) => setUserId(e.target.value)}
        />
        <TextField
          label="User Name"
          placeholder="Enter User Name"
          size="small"
          className="textfield"
          sx={{
            "& fieldset": { border: "none" },
            "& label.Mui-focused": {
              color: "white",
            },
          }}
          onChange={(e) => setUser(e.target.value)}
        />
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
          onChange={(e) => setRoomId(e.target.value)}
        />
        <Button variant="text" className="button" onClick={handleSubmit}>
          View Rooms for User
        </Button>
        {open && data.length > 0 && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Room ID</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Host ID</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Meeting Date</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Guest Users</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Start Time</strong>
                  </TableCell>
                  <TableCell>
                    <strong>End Time</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((room) => (
                  <TableRow
                    key={room._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{room.roomId}</TableCell>
                    <TableCell>{room.hostUserId}</TableCell>
                    <TableCell>
                      {dayjs(room.meetingDate).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell>
                      {room.guestUsers.map((guest) => (
                        <ul>
                          <li>{guest}</li>
                        </ul>
                      ))}
                    </TableCell>
                    <TableCell>
                      {dayjs(room.startTime).format("HH:mm")}
                    </TableCell>
                    <TableCell>{dayjs(room.endTime).format("HH:mm")}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
      <SnackbarWrapper error={error} />
    </div>
  );
};

export default ViewUserMeetings;
