import React from "react";
import CreateMeeting from "../../components/Meeting/CreateMeeting";
import ViewUserMeetings from "../../components/Meeting/ViewUserMeetings";
import ViewRoomMeetings from "../../components/Meeting/ViewRoomMeetings/index";

const MeetingPage = () => {
  return (
    <div className="root">
      <CreateMeeting />
      <ViewUserMeetings />
      <ViewRoomMeetings />
    </div>
  );
};

export default MeetingPage;
