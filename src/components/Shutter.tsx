import {
    ShutterContainerStyle,
    ShutterStyle,
} from "src/styling/styled-components/styled-components";
import { FaArrowRightFromBracket } from "react-icons/fa6";

type ShutterPropsType = {
    handleDisplaySideBar: () => void;
};

const Shutter = ({ handleDisplaySideBar }: ShutterPropsType) => {
    return (
        <ShutterContainerStyle className="shutter">
            <ShutterStyle onClick={handleDisplaySideBar}>
                <FaArrowRightFromBracket />
            </ShutterStyle>
        </ShutterContainerStyle>
    );
};

export default Shutter;
