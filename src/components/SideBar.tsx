import {
  ContainerTextStyle,
  SideBarContainerStyle,
} from "src/styled-components/styled-components";
import { ChangeLanguage } from "./ChangeLanguage";
import { useTranslation } from "react-i18next";
import Shutter from "./Shutter";
import { useState } from "react";
import PrivateCategiries from "./PrivateCategiries";

const SideBar = (): JSX.Element => {
  const { t } = useTranslation();
  const [isDisplay, setIsDisplay] = useState(true);
  const handleDisplaySideBar = () => {
    setIsDisplay((prev) => !prev);
  };
  return (
    <SideBarContainerStyle isDisplay={isDisplay}>
      <PrivateCategiries/>
      <Shutter handleDisplaySideBar={handleDisplaySideBar} />
      <ChangeLanguage />
    </SideBarContainerStyle>
  );
};

export default SideBar;
