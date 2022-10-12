import React from "react";
import { useState } from "react";
import { Room } from "../../../types/@types";
import { Button } from "@mui/material";
import RoomsModel from "../../../models/rooms/index";
import SnackbarWrapper from "../../SnackbarWrapper";

const ViewRooms = () => {
  const [error, setError] = useState<string>("");
  const [rooms, setRooms] = useState<Room[]>();
  const handleSubmit = async () => {
    await RoomsModel.getAllRooms()
      .then((res) => {
        if (res.data.success === false) setError(res.data.message);
        setRooms(res.data.data);
      })
      .catch((error) => setError(error.response.data.message));
  };
  return (
    <div className="root">
      {rooms?.map((room) => {
        return (
          <div key={room._id}>
            <h5>
              {room.roomId}
              {room.roomName}
            </h5>
          </div>
        );
      })}
      <Button className="button" variant="contained" onClick={handleSubmit}>
        View All Rooms
      </Button>
      <SnackbarWrapper error={error} />
    </div>
  );
};

export default ViewRooms;
