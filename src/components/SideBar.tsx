import {
  ScrollableContainer,
  SideBarContainerStyle,
} from "src/styled-components/styled-components";
import { ChangeLanguage } from "./ChangeLanguage";
import Shutter from "./Shutter";
import { useState } from "react";
import PrivateCategories from "./PrivateCategories";

const SideBar = (): JSX.Element => {
  const [isDisplay, setIsDisplay] = useState(true);
  const handleDisplaySideBar = () => {
    setIsDisplay((prev) => !prev);
  };

  return (
    <SideBarContainerStyle isDisplay={isDisplay}>
      <Shutter handleDisplaySideBar={handleDisplaySideBar} />
      <ScrollableContainer>
        <PrivateCategories />
      </ScrollableContainer>
      <ChangeLanguage />
    </SideBarContainerStyle>
  );
};

export default SideBar;
