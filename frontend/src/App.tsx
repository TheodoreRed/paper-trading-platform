import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import LandingPage from "./components/LandingPage/LandingPage";
import CreateAccountForm from "./components/LandingPage/CreateAccountForm";
import LoadAccount from "./components/LandingPage/LoadAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/new" element={<CreateAccountForm />} />
        <Route path="/load" element={<LoadAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
