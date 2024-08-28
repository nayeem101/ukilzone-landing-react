import AppImage1 from "../assets/images/app-img-1.jpg";
import AppImage2 from "../assets/images/app-img-2.jpg";
import AppImage3 from "../assets/images/app-img-3.jpg";
import SectionHeader from "./shared/SectionHeader";

import { useTranslation } from "react-i18next";

const AppComingSoon = () => {
  const { t } = useTranslation();

  return (
    <section id="app" className="py-12 bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("app.title")} />
      </div>
      <div className="max-w-screen-lg mx-auto mb-8">
        <div className="w-full flex justify-start md:justify-center gap-3 overflow-x-scroll md:overflow-x-hidden">
          <img src={AppImage1} alt="UkilZone App home" className="w-56 md:w-64 lg:w-72 xl:w-80" />
          <img src={AppImage3} alt="UkilZone App lawyers" className="w-56 md:w-64 lg:w-72 xl:w-80" />
          <img src={AppImage2} alt="UkilZone App services" className="w-56 md:w-64 lg:w-72 xl:w-80" />
        </div>
      </div>
    </section>
  );
};

export default AppComingSoon;
