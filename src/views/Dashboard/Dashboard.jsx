import Banners from "../../components/Banners";
import Balance from "../../components/Balance";
import Services from "../../components/Services";

const Dashboard = () => {

  return (
    <div className="flex flex-col gap-10 px-24">
      <Balance />
      <Services />
      <Banners />
    </div>
  );
};

export default Dashboard;
