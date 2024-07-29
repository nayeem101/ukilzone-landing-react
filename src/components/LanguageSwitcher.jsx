import { useTranslation } from "react-i18next";
import { Button } from "flowbite-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "bn" ? "en" : "bn";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div>
      <Button onClick={toggleLanguage} outline size="sm">
        {i18n.language === "bn" ? "English" : "বাংলা"}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
