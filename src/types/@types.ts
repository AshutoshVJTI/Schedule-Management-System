export interface User {
  _id?: string;
  userId: string;
  userName: string;
  userEmail: string;
}

export interface Room {
  _id?: string;
  roomId: string;
  roomName: string;
}

export interface SnackbarWrapperProps {
  error: string;
}

export interface CreateMeetingDataProps {
  userId: string;
  roomId: string;
  guestUsers: string[];
  meetingDate: string;
  startTime: string;
  endTime: string;
}

export interface CreateRoomDataProps {
  roomId: string;
  roomName: string;
}

export interface TimepickerProps {
  label: string;
}
