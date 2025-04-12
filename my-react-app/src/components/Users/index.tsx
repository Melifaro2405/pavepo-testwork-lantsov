import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://fakestoreapiserver.reactbd.com/amazonproducts",
    );

    return response.data;
  };

  useEffect(() => {
    fetchUsers().then((users) => setUsers(users));
  }, []);

  return (
    <>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          flexWrap: "wrap",
          padding: "0 10px",
        }}
      >
        {!!users.length &&
          users.map((user) => (
            <li
              key={user.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3 style={{ textAlign: "center" }}>{user.title}</h3>
              <img src={user.image} width="70%" alt={user.image} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default Users;
