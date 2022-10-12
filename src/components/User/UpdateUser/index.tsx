import React from "react";
import UserModel from "../../../models/user";
import { useState } from "react";
import { User } from "../../../types/@types";
import { Button, TextField } from "@mui/material";

const UpdateUser = () => {
  const [data, setData] = useState<User>({
    userId: "",
    userName: "",
    userEmail: "",
  });
  const handleSubmit = async () => {
    await UserModel.updateUser(data);
  };
  return (
    <div>
      <TextField
        label="User ID"
        placeholder="Enter User ID"
        onChange={(e) =>
          setData({
            userId: e.target.value,
            userName: data.userName,
            userEmail: data.userEmail,
          })
        }
      />
      <TextField
        label="User Name"
        placeholder="Enter User Name"
        onChange={(e) =>
          setData({
            userId: data.userId,
            userName: e.target.value,
            userEmail: data.userEmail,
          })
        }
      />
      <TextField
        label="User Email"
        placeholder="Enter User Email"
        onChange={(e) =>
          setData({
            userId: data.userId,
            userName: data.userName,
            userEmail: e.target.value,
          })
        }
      />
      <Button variant="contained" onClick={handleSubmit}>Update User</Button>
    </div>
  );
};

export default UpdateUser;
