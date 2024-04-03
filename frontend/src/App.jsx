import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home";
import DepositPage from "./pages/DepositPage";
import DispensePage from "./pages/DispensePage";
import TransferPage from "./pages/TransferPage";
import { AuthProvider } from "./context/AuthContext";
import RouteGuard from "./RouteGuard";

export default function App() {

  return (
    <AuthProvider>
      <Router>
          <Routes>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />

              <Route path="/" element={<RouteGuard><Home /></RouteGuard>} />
              <Route path="/deposit" element={<RouteGuard><DepositPage /></RouteGuard>} />
              <Route path="/dispense" element={<RouteGuard><DispensePage /></RouteGuard>} />
              <Route path="/transfer" element={<RouteGuard><TransferPage /></RouteGuard>} />
          </Routes>
      </Router>
    </AuthProvider>
  );

}
