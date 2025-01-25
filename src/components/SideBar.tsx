import {
  SideBarContainerStyle,
  SpaceStyle,
  TextStyle,
} from "src/styled-components/styled-components";
import { ChangeLanguage } from "./ChangeLanguage";
import { useTranslation } from "react-i18next";
import Shutter from "./Shutter";
import { useState } from "react";

const SideBar = (): JSX.Element => {
  const { t } = useTranslation();
  const [isDisplay, setIsDisplay] = useState(true);
  const handleDisplaySideBar = () => {
    setIsDisplay((prev) => !prev);
  };
  return (
    <SideBarContainerStyle isDisplay={isDisplay}>
      <SpaceStyle />
      <TextStyle>{t("private")}</TextStyle>
      <TextStyle>{t("group")}</TextStyle>
      <Shutter handleDisplaySideBar={handleDisplaySideBar} />
      <ChangeLanguage />
    </SideBarContainerStyle>
  );
};

export default SideBar;
