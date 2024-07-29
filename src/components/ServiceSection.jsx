import { Card } from "flowbite-react";
import { useTranslation } from "react-i18next";
import {
  FaBalanceScale,
  FaBuilding,
  FaFileAlt,
  FaFileInvoiceDollar,
  FaGavel,
  FaHome,
  FaMoneyBillWave,
  FaPassport,
  FaUserShield,
} from "react-icons/fa";
import SectionHeader from "./shared/SectionHeader";

const Services = () => {
  const { t } = useTranslation();
  const services = [
    { icon: FaUserShield, name: t("services.list.0.name"), description: t("services.list.0.description") },
    { icon: FaGavel, name: t("services.list.1.name"), description: t("services.list.1.description") },
    { icon: FaBalanceScale, name: t("services.list.2.name"), description: t("services.list.2.description") },
    { icon: FaHome, name: t("services.list.3.name"), description: t("services.list.3.description") },
    { icon: FaMoneyBillWave, name: t("services.list.4.name"), description: t("services.list.4.description") },
    { icon: FaBuilding, name: t("services.list.5.name"), description: t("services.list.5.description") },
    { icon: FaPassport, name: t("services.list.6.name"), description: t("services.list.6.description") },
    { icon: FaFileAlt, name: t("services.list.7.name"), description: t("services.list.7.description") },
    { icon: FaFileInvoiceDollar, name: t("services.list.8.name"), description: t("services.list.8.description") },
  ];

  return (
    <section className="py-12 bg-gray-200 dark:bg-gray-900" id="services">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("services.title")} />
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-2 transition-transform transform hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800"
              >
                <div className="flex items-center mb-2">
                  <service.icon className="text-4xl text-green-500 dark:text-green-400 mr-3" />
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 dark:text-white">{service.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg lg:text-xl">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
