import React from "react";
import UserModel from "../../../models/user";
import { useState } from "react";
import { User } from "../../../types/@types";
import { Button, TextField } from "@mui/material";
import SnackbarWrapper from "../../SnackbarWrapper";

const UpdateUser = () => {
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<User>({
    userId: "",
    userName: "",
    userEmail: "",
  });
  const handleSubmit = async () => {
    if (Object.values(data).every((v) => v === ""))
      return setError("Please enter all the values");
    await UserModel.updateUser(data)
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
          sx={{
            "& fieldset": { border: "none" },
            "& label.Mui-focused": {
              color: "white",
            },
          }}
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
          sx={{
            "& fieldset": { border: "none" },
            "& label.Mui-focused": {
              color: "white",
            },
          }}
          onChange={(e) =>
            setData({
              userId: data.userId,
              userName: data.userName,
              userEmail: e.target.value,
            })
          }
        />
        <Button variant="text" onClick={handleSubmit} className="button">
          Update User
        </Button>
      </div>
      <SnackbarWrapper error={error} />
    </div>
  );
};

export default UpdateUser;
