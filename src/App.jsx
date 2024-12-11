import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./views/Account/Account";
import Dashboard from "./views/Dashboard/Dashboard";
import Login from "./views/Login/Login";
import PrivateRoute from "./components/Auth"; 
import Register from "./views/Register/Register";
import TopUp from "./views/TopUp/TopUp";
import Transaction from "./views/Transaction/Transaction";
import TransactionList from "./views/Transaction/TransactionList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" index element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/account" element={<PrivateRoute element={<Account />} />} />
        <Route path="/top-up" element={<PrivateRoute element={<TopUp />} />} />
        <Route path="/transaction" element={<PrivateRoute element={<TransactionList />} />} />
        <Route path="/transaction/:service_code" element={<PrivateRoute element={<Transaction />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
