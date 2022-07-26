import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import { getAllUsers, deleteUser } from "../actions/user";
import { useDispatch, useSelector } from "react-redux";
import UpdateUser from "./UpdateUser";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(getAllUsers()).then((res) => setData(res));
  };

  const handleUpdate = () => {
    setIsUpdate(() => !isUpdate);
  };

  const handleDelete = (id) => {
    const confirmBox = window.confirm('Do you want to delete this user?')
    console.log(confirmBox);

    if (confirmBox) {
      dispatch(deleteUser(id)).then((res) => console.log(res));
      window.location.reload();
    }
    
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {isClicked ? (
        <AddUser />
      ) : (
        <button onClick={() => setIsClicked(() => !isClicked)}>Add User</button>
      )}
      <table className="table align-middle table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Update User</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem) => (
            <tr key={elem._id}>
              <td>{elem.firstName}</td>
              <td>{elem.lastName}</td>
              <td>{elem.email}</td>
              <td>{elem.role}</td>
              <td>
                {isUpdate ? (
                  <UpdateUser />
                ) : (
                  <button onClick={handleUpdate}>Update</button>
                )}
              </td>
              <td>
                <button onClick={() => handleDelete(elem._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
