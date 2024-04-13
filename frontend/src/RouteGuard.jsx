import { observer } from "mobx-react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import userStore from "./store/UserStore";

const RouteGuard = observer(({ children }) => {
  const { isLoading } = useContext(AuthContext);
  console.log(userStore.isLoggedIn, userStore.user)
  if (isLoading) {
    return <></>;
  }

  if (!userStore.isLoggedIn) {
    return <Navigate to="/sign-in" />;
  }

  return children; 
});

export default RouteGuard;
