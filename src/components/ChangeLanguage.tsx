import { useTranslation } from "react-i18next";
import { DropdownWrapperStyle } from "src/styled-components/styled-components";
import Dropdown from "./Dropdown";

export const ChangeLanguage: React.FC = (): JSX.Element => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const options = [
    { label: "English", value: "en" },
    { label: "עברית", value: "he" },
  ];

  return (
    <DropdownWrapperStyle>
      <Dropdown
        options={options}
        onChange={changeLanguage}
        defaultValue={"he"}
      />
    </DropdownWrapperStyle>
  );
};
