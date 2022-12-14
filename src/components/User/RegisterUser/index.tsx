import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import UserModel from "../../../models/user";
import { User } from "../../../types/@types";
import SnackbarWrapper from "../../SnackbarWrapper";

const RegisterUser = () => {
  const [user, setUser] = useState<User>({
    userId: "",
    userName: "",
    userEmail: "",
  });
  const [error, setError] = useState<string>("");
  const handleSubmit = async () => {
    if (Object.values(user).every((v) => v === ""))
      return setError("Please enter all the values")
    await UserModel.addUser(user)
      .then((res) => {
        if (res.data.success === false) setError(res.data.message);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  return (
    <div className="root">
      <div className="form-container">
        <div className="textfield-container">
          <TextField
            variant="outlined"
            type="text"
            placeholder="Enter Username"
            label="Username"
            size="small"
            className="textfield"
            sx={{
              "& fieldset": { border: "none" },
              "& label.Mui-focused": {
                color: "white",
              },
            }}
            onChange={(e) =>
              setUser({
                userId: e.target.value,
                userName: user.userName,
                userEmail: user.userEmail,
              })
            }
          />
          <TextField
            variant="outlined"
            type="text"
            placeholder="Enter Name"
            label="Name"
            size="small"
            className="textfield"
            sx={{
              "& fieldset": { border: "none" },
              "& label.Mui-focused": {
                color: "white",
              },
            }}
            onChange={(e) =>
              setUser({
                userId: user.userId,
                userName: e.target.value,
                userEmail: user.userEmail,
              })
            }
          />
          <TextField
            variant="outlined"
            type="email"
            placeholder="Enter Email"
            label="Email"
            size="small"
            className="textfield"
            sx={{
              "& fieldset": { border: "none" },
              "& label.Mui-focused": {
                color: "white",
              },
            }}
            onChange={(e) =>
              setUser({
                userId: user.userId,
                userName: user.userName,
                userEmail: e.target.value,
              })
            }
          />
        </div>
        <Button variant="text" className="button" onClick={handleSubmit}>
          Register
        </Button>
      </div>
      <SnackbarWrapper error={error} />
    </div>
  );
};

export default RegisterUser;
