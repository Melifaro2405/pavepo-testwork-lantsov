import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";

type TUser = {
  id: number;
  title: string;
  image: string;
  price: number;
};

const fetchUsers = async () => {
  const response = await axios.get(
    "https://fakestoreapiserver.reactbd.com/amazonproducts",
  );

  return response.data;
};

function Users() {
  const [users, setUsers] = useState<TUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setError("");
    setIsLoading(true);
    fetchUsers()
      .then((users) => setUsers(users))
      .catch((error) => {
        setError(error?.message || "Something went wrong");
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="center-container">
        <h1>...Loading</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="center-container">
        <h1 className="center-container">{error}</h1>;
      </div>
    );
  }

  return (
    <div className="center-container">
      <ul className="users-list">
        {!!users.length &&
          users.map(({ id, title, price, image }) => (
            <li key={id} className="users-list-item">
              <h3>{title}</h3>
              <img src={image} width="65%" alt={image} />
              <p>Price: {price}$</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Users;
