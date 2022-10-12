import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import UserModel from "../../../models/user";
import { User } from "../../../types/@types";
import SnackbarWrapper from "../../SnackbarWrapper";
import "./registeruser.css";

const RegisterUser = () => {
  const [user, setUser] = useState<User>({
    userId: "",
    userName: "",
    userEmail: "",
  });
  const [error, setError] = useState<string>("");
  const handleSubmit = async () => {
    await UserModel.addUser(user).catch((error) => {
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
            onChange={(e) =>
              setUser({
                userId: user.userId,
                userName: user.userName,
                userEmail: e.target.value,
              })
            }
          />
        </div>
        <Button variant="outlined" className="button" onClick={handleSubmit}>
          Register
        </Button>
      </div>
      <SnackbarWrapper error={error} />
    </div>
  );
};

export default RegisterUser;
