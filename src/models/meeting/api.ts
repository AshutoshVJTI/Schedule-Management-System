import instance from "../../utils/axios";
import { CreateMeetingDataProps } from '../../types/@types';

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
