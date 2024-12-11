import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/Logo.png";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="flex items-center justify-between py-7 border-b-2 p-24">
      <Link to="/" className="flex items-center gap-2">
        <img src={Logo} width={28} height={28} alt="" />
        <h1 className="text-lg font-bold">SIMS PPOB</h1>
      </Link>
      <div className="flex items-center gap-10">
        <Link
          className={`text-lg font-bold ${
            location.pathname === "/top-up" ? "text-red-500" : "text-gray-500"
          }`}
          to="/top-up"
        >
          Top Up
        </Link>
        <Link
          className={`text-lg font-bold ${
            location.pathname === "/transaction"
              ? "text-red-500"
              : "text-gray-500"
          }`}
          to="/transaction"
        >
          Transaction
        </Link>
        <Link
          className={`text-lg font-bold ${
            location.pathname === "/account" ? "text-red-500" : "text-gray-500"
          }`}
          to="/account"
        >
          Akun
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
