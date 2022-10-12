import instance from "../../utils/axios";
import { CreateMeetingDataProps } from "../../types/@types";

export function createMeeting(
  hostUserId: string,
  hostUser: string,
  hostRoomId: string,
  data: CreateMeetingDataProps
) {
  return instance.request({
    url: `/api/v1/schedule/create-meeting`,
    method: "POST",
    params: {
      userId: hostUserId,
      user: hostUser,
      roomId: hostRoomId,
    },
    data: {
      ...data,
    },
  });
}

export function getMeetingsUser(userId: string, user: string, roomId: string) {
  return instance.request({
    url: `/api/v1/schedule/get-meetings/user`,
    method: "GET",
    params: {
      userId: userId,
      user: user,
      roomId: roomId,
    },
  });
}

export function getMeetingsRoom(userId: string, user: string, roomId: string) {
  return instance.request({
    url: `/api/v1/schedule/get-meetings/room`,
    method: "GET",
    params: {
      userId: userId,
      user: user,
      roomId: roomId,
    },
  });
}
