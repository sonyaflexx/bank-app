import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home";
import DepositPage from "./pages/DepositPage";
import DispensePage from "./pages/DispensePage";
import TransferPage from "./pages/TransferPage";

export default function App() {

  return (
    <Router>
        <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            <Route path="/" element={<Home />} />
            <Route path="/deposit" element={<DepositPage />} />
            <Route path="/dispense" element={<DispensePage />} />
            <Route path="/transfer" element={<TransferPage />} />
        </Routes>
    </Router>
  );

}
