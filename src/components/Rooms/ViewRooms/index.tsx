import React from "react";
import { useState } from "react";
import { Room } from "../../../types/@types";
import { Button } from "@mui/material";
import RoomsModel from "../../../models/rooms/index";

const ViewRooms = () => {
  const [rooms, setRooms] = useState<Room[]>();
  const handleSubmit = async () => {
    const res = await RoomsModel.getAllRooms();
    setRooms(res.data.data);
  };
  return (
    <div>
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
      <Button onClick={handleSubmit}>View All Rooms</Button>
    </div>
  );
};

export default ViewRooms;
