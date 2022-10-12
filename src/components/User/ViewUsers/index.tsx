import React from "react";
import UserModel from "../../../models/user";
import { useState } from "react";
import { User } from "../../../types/@types";
import { Button } from "@mui/material";
import SnackbarWrapper from "../../SnackbarWrapper";

const ViewUsers = () => {
  const [error, setError] = useState<string>("");
  const [users, setUsers] = useState<User[]>();
  const handleSubmit = async () => {
    await UserModel.getAllUsers()
      .then((res) => {
        if (res.data.success === false) setError(res.data.message);
        setUsers(res.data.data);
      })
      .catch((error) => setError(error.response.data.message));
  };
  return (
    <div className="root">
      {users?.map((user) => {
        return (
          <div key={user._id} className="table">
            <h5>
              {user.userId}
              {user.userName}
              {user.userEmail}
            </h5>
          </div>
        );
      })}
      <Button variant="contained" className="button" onClick={handleSubmit}>
        View All Users
      </Button>
      <SnackbarWrapper error={error} />
    </div>
  );
};

export default ViewUsers;
