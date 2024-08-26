import { Card } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { FaComments, FaUserTie } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import BangladeshMapIcon from "./shared/BangladeshMapIcon";
import SectionHeader from "./shared/SectionHeader";

const AboutUsContent = [
  {
    icon: BangladeshMapIcon,
    titleKey: "about.list.0.title",
    descriptionKey: "about.list.0.description",
  },
  {
    icon: FaUserTie,
    titleKey: "about.list.1.title",
    descriptionKey: "about.list.1.description",
  },
  {
    icon: FaComments,
    titleKey: "about.list.2.title",
    descriptionKey: "about.list.2.description",
  },
  {
    icon: FaBangladeshiTakaSign,
    titleKey: "about.list.3.title",
    descriptionKey: "about.list.3.description",
  },
];

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 dark:bg-gray-800" id="about">
      <div className="px-4 mx-auto max-w-screen-xl py-16 lg:px-6">
        <SectionHeader title={t("about.title")} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AboutUsContent.map((content, index) => (
            <Card
              key={index}
              className="p-3 cursor-pointer transition-all ease-in bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-950 hover:shadow-lg"
            >
              <div className="flex items-center mb-2">
                <content.icon className="text-4xl text-green-500 dark:text-green-400 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{t(content.titleKey)}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{t(content.descriptionKey)}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
