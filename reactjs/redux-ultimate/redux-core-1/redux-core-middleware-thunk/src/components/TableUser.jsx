import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers } from "../action/actions";

const TableUser = () => {

  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users)

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, []);

  const handleDeleteUser = (user) => {
    console.log(user);
  };

  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.length > 0 &&
              users.map((user, index) => (
                <tr key={`users-${index}`}>
                  <td>{index + 1}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default TableUser;
