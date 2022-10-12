import React from "react";
import UserModel from "../../../models/user/index";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

const DeleteUser = () => {
  const [userId, setUserId] = useState<string>("");
  const handleSubmit = async () => {
    await UserModel.deleteUser(userId);
  };
  return (
    <div className="root">
      <div className="form-container">
      <TextField
        label="User ID"
        placeholder="Enter User ID"
        className="textfield"
        size="small"
        onChange={(e) => setUserId(e.target.value)}
      />
      <Button variant="contained" className="button" onClick={handleSubmit}>
        Delete User
      </Button>
      </div>
    </div>
  );
};

export default DeleteUser;
