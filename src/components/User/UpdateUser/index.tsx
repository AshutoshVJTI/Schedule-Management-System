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
    <div className="root">
      <div className="form-container">
        <TextField
          label="User ID"
          placeholder="Enter User ID"
          className="textfield"
          size="small"
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
          className="textfield"
          size="small"
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
          className="textfield"
          size="small"
          onChange={(e) =>
            setData({
              userId: data.userId,
              userName: data.userName,
              userEmail: e.target.value,
            })
          }
        />
        <Button variant="contained" onClick={handleSubmit} className="button">
          Update User
        </Button>
      </div>
    </div>
  );
};

export default UpdateUser;
