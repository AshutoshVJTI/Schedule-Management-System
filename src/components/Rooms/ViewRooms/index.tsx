import React from "react";
import { useState } from "react";
import { Room } from "../../../types/@types";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import RoomsModel from "../../../models/rooms/index";
import SnackbarWrapper from "../../SnackbarWrapper";

const ViewRooms = () => {
  const [error, setError] = useState<string>("");
  const [rooms, setRooms] = useState<Room[]>();
  const [open, setOpen] = useState<boolean>(false);
  const handleSubmit = async () => {
    await RoomsModel.getAllRooms()
      .then((res) => {
        if (res.data.success === false) setError(res.data.message);
        setRooms(res.data.data);
        setOpen(!open);
      })
      .catch((error) => setError(error.response.data.message));
  };
  return (
    <div className="root">
      {open && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Room ID</strong>
                </TableCell>
                <TableCell>
                  <strong>Room Name</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rooms?.map((room) => (
                <TableRow
                  key={room._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{room.roomId}</TableCell>
                  <TableCell>{room.roomName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Button className="button" variant="contained" onClick={handleSubmit}>
        View All Rooms
      </Button>
      <SnackbarWrapper error={error} />
    </div>
  );
};

export default ViewRooms;
