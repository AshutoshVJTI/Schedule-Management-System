import React from "react";
import Navbar from "../../components/Navbar";
import DeleteUser from "../../components/User/DeleteUser";
import RegisterUser from "../../components/User/RegisterUser";
import UpdateUser from "../../components/User/UpdateUser";
import ViewUsers from "../../components/User/ViewUsers";

const UserPage = () => {
  return (
    <div>
      <Navbar />
      <div className="root">
        <RegisterUser />
        <ViewUsers />
        <UpdateUser />
        <DeleteUser />
      </div>
    </div>
  );
};

export default UserPage;
