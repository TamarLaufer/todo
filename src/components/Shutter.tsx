import {
  ShutterContainerStyle,
  ShutterStyle,
} from "src/styled-components/styled-components";

type ShutterPropsType = {
  handleDisplaySideBar: () => void;
};

const Shutter = ({ handleDisplaySideBar }: ShutterPropsType) => {
  return (
    <ShutterContainerStyle>
      <ShutterStyle onClick={handleDisplaySideBar}>{22}</ShutterStyle>
    </ShutterContainerStyle>
  );
};

export default Shutter;
