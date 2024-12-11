import Banners from "../../components/Banners";
import NameBalanceSection from "../../components/Balance";
import ServicesSection from "../../components/ServicesSection";

const Dashboard = () => {

  return (
    <div className="flex flex-col gap-10 px-24">
      <NameBalanceSection />
      <ServicesSection />
      <Banners />
    </div>
  );
};

export default Dashboard;
