import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import PrivateRoute from "../etities/user/model/privateRoute";
import AccountPage from "../pages/accountPage";

const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage
  },
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/account',
    element:
        <PrivateRoute>
            <AccountPage/>
        </PrivateRoute>
    
  }
]);

export default router;