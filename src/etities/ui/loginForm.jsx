import { useMutation } from "@tanstack/react-query";
import { login } from "../../../shared/api/auth";
import { saveToken } from "../../../shared/lib/token";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");

  const [params] = useSearchParams();
  const redirectTo = params.get("redirectTo") || "/dashboard";

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      saveToken(data.token);
      navigate(redirectTo);
    },
    onError: () => {
      alert("Login xato!");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ username, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-20 p-4 border rounded shadow space-y-4"
    >
      <h1 className="text-xl font-bold text-center">Login</h1>
      <input
        type="text"
        placeholder="Username"
        className="w-full border p-2 rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded w-full"
      >
        Kirish
      </button>
    </form>
  );
};

export default LoginForm;