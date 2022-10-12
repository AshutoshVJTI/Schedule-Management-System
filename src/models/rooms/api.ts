import instance from "../../utils/axios";
import { Room, CreateRoomDataProps } from "../../types/@types";

export function addRoom(data: CreateRoomDataProps) {
  return instance.request({
    url: `/api/v1/room/add-room`,
    method: "POST",
    data: {
      ...data,
    },
  });
}

export function getAllRooms() {
  return instance.request({
    url: `/api/v1/room/get-all-rooms`,
    method: "GET",
  });
}

export function updateRoom(data: Room) {
  return instance.request({
    url: `/api/v1/room/${data.roomId}`,
    method: "PUT",
    data: {
      roomName: data.roomName,
    },
  });
}

export function deleteRoom(roomId: string) {
  return instance.request({
    url: `/api/v1/room/${roomId}`,
    method: "DELETE",
  });
}
