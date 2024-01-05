import { Link, Outlet } from "react-router-dom";

export default function Users({users}) {

  return (
    <>
      <h2>Users</h2>

      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.image ? (
              <img
                src={`http://localhost:8080/v1/image/${user.avatar._id}`}
                alt="User"
              />
            ) : (
              <img
                src={`https://ui-avatars.com/api/?rounded=true&bold=true&background=random&color=fff&name=${user.first_name}+${user.last_name}`}
                alt="User"   
              />
            )}
            <Link to={`/users/${user._id}`}>
              @{user.username}
            </Link>
            <hr />
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};