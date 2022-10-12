import React from "react";
import DeleteUser from "../../components/User/DeleteUser";
import RegisterUser from "../../components/User/RegisterUser";
import UpdateUser from "../../components/User/UpdateUser";
import ViewUsers from "../../components/User/ViewUsers";

const UserPage = () => {
  return (
    <div className="root">
      <RegisterUser />
      <ViewUsers />
      <UpdateUser />
      <DeleteUser />
    </div>
  );
};

export default UserPage;
