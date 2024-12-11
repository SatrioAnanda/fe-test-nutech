import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Services = () => {
  const services = useSelector((state) => state.services.services);
  return (
    <div className="flex w-full gap-2 justify-between">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-center cursor-pointer">
          <Link
            to={`/transaction/${service.service_code}`}
            className="w-12 h-12 flex items-center justify-center mb-2 hover:scale-125 transition-all"
          >
            <img
              src={service.service_icon}
              alt={service.service_name}
              className="w-full h-full object-contain "
            />
          </Link>
          <p
            className="text-xs text-center w-max-10"
            style={{ paddingTop: "5px", fontWeight: "bold" }}
          >
            {service.service_name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Services;
