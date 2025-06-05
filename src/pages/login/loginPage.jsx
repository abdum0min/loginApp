import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../shared/lib/authContext";
import { loginUser } from "../../shared/api/auth";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('')
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Bu yerda foydalanuvchi aslida qaysi URLdan kelganini olamiz
  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
        login(username, password);
        loginUser(username, password)
    } catch (error) {
        console.error(error)
    }

    // Login bo‘lgandan keyin foydalanuvchini asl URLga yo‘naltiramiz
    navigate(from, { replace: true });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h1 className="text-2xl mb-4">Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 w-full mb-4"
        required
      />
        <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-4"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
