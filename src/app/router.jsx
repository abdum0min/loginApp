import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login/loginPage";
import DashboardPage from "../pages/dashboard/dashboardPage";
import ProtectedRoute from "../shared/lib/protectedRoute";
import HomePage from "../pages/homePage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/',
    element: <HomePage/>
  }
]);

export default router;