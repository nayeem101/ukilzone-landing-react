import { useTranslation } from "react-i18next";
import { FaGavel, FaArrowRight, FaUserCheck } from "react-icons/fa";
import { LuFileInput } from "react-icons/lu";
import SectionHeader from "./shared/SectionHeader";

const howWeWorkSteps = [
  {
    icon: LuFileInput,
    titleKey: "howWeWork.steps.0.title",
    descriptionKey: "howWeWork.steps.0.description",
  },
  {
    icon: FaUserCheck,
    titleKey: "howWeWork.steps.1.title",
    descriptionKey: "howWeWork.steps.1.description",
  },
  {
    icon: FaGavel,
    titleKey: "howWeWork.steps.2.title",
    descriptionKey: "howWeWork.steps.2.description",
  },
];

const HowWeWork = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 bg-gray-200 dark:bg-gray-900" id="services">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("howWeWork.title")} />
        <div className="max-w-screen-lg mx-auto pt-4 mb-6 lg:mb-8">
          <div className="flex flex-row flex-wrap md:flex-nowrap items-center justify-center gap-4">
            {howWeWorkSteps.map((step, index) => (
              <div
                key={index}
                className="relative w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0"
              >
                <div className="flex flex-col justify-center items-center p-6 bg-gray-50 dark:bg-gray-800 border-4 border-green-600 rounded-xl shadow-md hover:shadow-neutral-600 transition-shadow">
                  <div className="bg-green-500 dark:bg-green-400 border-4 border-green-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg absolute top-[-24px]">
                    <p className="text-xl font-bold">{index + 1}</p>
                  </div>
                  <div className="text-5xl text-green-500 dark:text-green-400 mb-4 mt-3">
                    <step.icon />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center dark:text-white mb-2">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">{t(step.descriptionKey)}</p>
                </div>

                {index != 2 && (
                  <div className="text-gray-800 dark:text-white text-4xl md:text-2xl md:ms-3 mb-4 rotate-90 md:rotate-0">
                    <FaArrowRight />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
