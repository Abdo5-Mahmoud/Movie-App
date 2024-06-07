
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MasterLayOut from "./components/MasterLayOut/MasterLayOut";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import About from "./components/About/About";
import Details from "./components/Details/Details";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Network from "./components/Network/Network";
import People from "./components/People/People";
import Register from "./components/Register/Register";
import Tvshows from "./components/TvShows/Tvshows";
import { useContext} from "react";
import Profile from "./components/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import  {
  AuthContext,
} from "./components/Context/AuthStore";

function App() {
  let { userData, saveUserData, logout } = useContext(AuthContext);
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayOut userData={userData} logout={logout} />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute userData={userData}>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute userData={userData}>
              <Profile userData={userData} />
            </ProtectedRoute>
          ),
        },
        {
          path: "movies",
          element: (
            <ProtectedRoute userData={userData}>
              <Movies />
            </ProtectedRoute>
          ),
        },
        {
          path: "tvshows",
          element: (
            <ProtectedRoute userData={userData}>
              <Tvshows />
            </ProtectedRoute>
          ),
        },
        {
          path: "people",
          element: (
            <ProtectedRoute userData={userData}>
              <People />
            </ProtectedRoute>
          ),
        },
        {
          path: "details/:id/:name",
          element: (
            <ProtectedRoute userData={userData}>
              <Details />
            </ProtectedRoute>
          ),
        },
        { path: "about", element: <About /> },
        { path: "register", element: <Register /> },
        { path: "details", element: <Details /> },
        { path: "login", element: <Login saveUserData={saveUserData} /> },
        { path: "network", element: <Network /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
