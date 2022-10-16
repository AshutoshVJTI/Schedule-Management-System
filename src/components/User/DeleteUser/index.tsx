import React from "react";
import UserModel from "../../../models/user/index";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import SnackbarWrapper from "../../SnackbarWrapper";

const DeleteUser = () => {
  const [error, setError] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const handleSubmit = async () => {
    if (userId === "") return setError("Please enter all the values");
    await UserModel.deleteUser(userId)
      .then((res) => {
        if (res.data.success === false) setError(res.data.message);
      })
      .catch((error) => setError(error.response.data.message));
  };
  return (
    <div className="root">
      <div className="form-container">
        <TextField
          required
          label="User ID"
          placeholder="Enter User ID"
          className="textfield"
          size="small"
          sx={{
            "& fieldset": { border: "none" },
            "& label.Mui-focused": {
              color: "white",
            },
          }}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Button variant="text" className="button" onClick={handleSubmit}>
          Delete User
        </Button>
      </div>
      <SnackbarWrapper error={error} />
    </div>
  );
};

export default DeleteUser;
