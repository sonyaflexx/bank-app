import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home";
import DepositPage from "./pages/DepositPage";
import DispensePage from "./pages/DispensePage";
import TransferPage from "./pages/TransferPage";
import BalancePage from "./pages/BalancePage";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import RouteGuard from "./RouteGuard";
import PaymentsPage from "./pages/Payments/PaymentsPage";
import MobilePage from "./pages/Payments/MobilePage";
import InternetPage from "./pages/Payments/InternetPage";
import TaxesPage from "./pages/Payments/TaxesPage";
import SuccessPage from "./pages/SuccessPage";
import SuccessSignUp from "./pages/SuccessSignUp";
import userStore from "./store/UserStore";
import { useContext, useEffect } from "react";


export default function App() {
  const user = userStore.user
  const { checkAuth } = useContext(AuthContext);

  return (
      <Router>
          <Routes>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-up/success/:response" element={<SuccessSignUp />} />

              <Route path="/" element={<RouteGuard><Home /></RouteGuard>} />
              <Route path="/balance" element={<RouteGuard><BalancePage /></RouteGuard>} />
              <Route path="/deposit" element={<RouteGuard><DepositPage /></RouteGuard>} />
              <Route path="/dispense" element={<RouteGuard><DispensePage /></RouteGuard>} />
              <Route path="/transfer" element={<RouteGuard><TransferPage /></RouteGuard>} />
              <Route path="/payments" element={<RouteGuard><PaymentsPage /></RouteGuard>} />
              <Route path="/payments/mobile" element={<RouteGuard><MobilePage /></RouteGuard>} />
              <Route path="/payments/internet" element={<RouteGuard><InternetPage /></RouteGuard>} />
              <Route path="/payments/taxes" element={<RouteGuard><TaxesPage /></RouteGuard>} />
              <Route path="/success/:data" element={<RouteGuard><SuccessPage /></RouteGuard>} />
          </Routes>
      </Router>
  );

}
