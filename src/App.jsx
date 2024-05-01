import LanguageSelector from "./components/language-selector";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();

  const { line1, line2 } = t("description");

  return (
    <div className="container bg-black text-white mx-auto py-8 px-8">
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <span>
        <span className="text-red-400">{line1}</span>
      </span>
      <span className="text-red-400">{line2}</span>
    </div>
  );
};

export default App;
