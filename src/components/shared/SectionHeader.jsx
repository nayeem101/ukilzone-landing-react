import { FaScaleBalanced } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const SectionHeader = ({ title }) => {
  return (
    <div className="max-w-screen-md mb-6 lg:mb-8 mx-auto flex justify-center gap-6 items-center">
      <FaScaleBalanced className="w-10 h-10 text-gray-900 dark:text-gray-100" />
      <h2 className="text-4xl [line-height:46px] text-center tracking-tight font-bold text-gray-900 dark:text-white header-title-border">
        {title}
      </h2>
      <FaScaleBalanced className="w-10 h-10 text-gray-900 dark:text-gray-100" />
    </div>
  );
};

export default SectionHeader;
