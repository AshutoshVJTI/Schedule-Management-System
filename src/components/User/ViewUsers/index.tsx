import React from "react";
import UserModel from "../../../models/user";
import { useState } from "react";
import { User } from "../../../types/@types";
import { Button } from "@mui/material";

const ViewUsers = () => {
  const [users, setUsers] = useState<User[]>();
  const handleSubmit = async () => {
    const res = await UserModel.getAllUsers();
    setUsers(res.data.data);
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
    </div>
  );
};

export default ViewUsers;
