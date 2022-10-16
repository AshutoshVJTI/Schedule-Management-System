import React from "react";
import Navbar from "../../components/Navbar";
import CreateRoom from "../../components/Rooms/CreateRoom";
import DeleteRoom from "../../components/Rooms/DeleteRoom";
import UpdateRoom from "../../components/Rooms/UpdateRoom";
import ViewRooms from "../../components/Rooms/ViewRooms";

const RoomsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="root">
        <CreateRoom />
        <ViewRooms />
        <UpdateRoom />
        <DeleteRoom />
      </div>
    </div>
  );
};

export default RoomsPage;
