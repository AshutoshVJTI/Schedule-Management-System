import { User } from "../../types/@types";
import instance from "../../utils/axios";

export function addUser(data: User) {
  return instance.request({
    url: `/api/v1/users/add-user`,
    method: "POST",
    data: {
      ...data,
    },
  });
}

export function getAllUsers() {
  return instance.request({
    url: `/api/v1/users/get-all-users`,
    method: "GET",
  });
}

export function updateUser(data: User) {
  return instance.request({
    url: `/api/v1/users/${data.userId}`,
    method: "PUT",
    data: {
      userName: data.userName,
      userEmail: data.userEmail,
    },
  });
}

export function deleteUser(userId: string) {
  return instance.request({
    url: `/api/v1/users/${userId}`,
    method: "DELETE",
  });
}
