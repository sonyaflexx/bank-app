import { observer } from "mobx-react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import userStore from "./store/UserStore";

const RouteGuard = observer(({ children }) => {
  const { isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!userStore.isLoggedIn) {
    return <Navigate to="/sign-in" />;
  }

  return children; 
});

export default RouteGuard;
