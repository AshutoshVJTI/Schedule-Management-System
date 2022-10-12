import React from "react";
import UserModel from "../../../models/user";
import { useState } from "react";
import { User } from "../../../types/@types";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import SnackbarWrapper from "../../SnackbarWrapper";

const ViewUsers = () => {
  const [error, setError] = useState<string>("");
  const [users, setUsers] = useState<User[]>();
  const [open, setOpen] = useState<boolean>(false);
  const handleSubmit = async () => {
    await UserModel.getAllUsers()
      .then((res) => {
        if (res.data.success === false) setError(res.data.message);
        setUsers(res.data.data);
        setOpen(!open)
      })
      .catch((error) => setError(error.response.data.message));
  };
  return (
    <div className="root">
      {open && (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><strong>User ID</strong></TableCell>
              <TableCell><strong>User Name</strong></TableCell>
              <TableCell><strong>User Email</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow
                key={user._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{user.userId}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>{user.userEmail}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      )}
      <Button variant="contained" className="button" onClick={handleSubmit}>
        View All Users
      </Button>
      <SnackbarWrapper error={error} />
    </div>
  );
};

export default ViewUsers;
