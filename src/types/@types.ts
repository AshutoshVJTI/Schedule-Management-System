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
  setTime: React.Dispatch<React.SetStateAction<string>>;
}

export interface DatepickerProps {
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

export interface MultipickTextfieldProps {
  setData: React.Dispatch<React.SetStateAction<string[]>>;
  options: string[];
}

export interface MeetingRoom {
  createdAt: string;
  endTime: string;
  guestUsers: string[];
  hostUserId: string;
  meetingDate: string;
  roomId: string;
  startTime: string;
  updatedAt: string;
  __v: number;
  _id: string;
}
