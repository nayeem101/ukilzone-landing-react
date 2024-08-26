import { useTranslation } from "react-i18next";
import heroIllustration from "../assets/images/law-illustration.svg";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 dark:bg-gray-800">
      <div className="grid max-w-screen-xl md:min-h-[450px] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-wide leading-snug text-800 md:text-4xl lg:text-5xl dark:text-white">
            {t("welcome")}
          </h1>
          <p className="max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8 lg:mt-6 md:text-lg lg:text-2xl dark:text-gray-400">
            {t("description")}
          </p>

          <div className="py-2">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              {t("hero.our_services")}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              {t("hero.contact_us")}
            </a>
          </div>
        </div>
        <div className="mt-3 lg:mt-0 lg:col-span-5 lg:flex">
          <img src={heroIllustration} alt="ukilzone" className="w-1/2 lg:w-full lg:h-full m-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
