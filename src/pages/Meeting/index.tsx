import React from "react";
import CreateMeeting from "../../components/Meeting/CreateMeeting";
import ViewUserMeetings from "../../components/Meeting/ViewUserMeetings";
import ViewRoomMeetings from "../../components/Meeting/ViewRoomMeetings/index";
import Navbar from "../../components/Navbar";

const MeetingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="root">
        <CreateMeeting />
        <ViewUserMeetings />
        <ViewRoomMeetings />
      </div>
    </div>
  );
};

export default MeetingPage;
