import {
    ContentModalStyle,
    ModalContainerStyle,
    Overlay,
    XButtonStyle,
} from "src/styling/styled-components/styled-components";
import { IoClose } from "react-icons/io5";

type ModalPropsType = {
    children: React.ReactNode;
    onClose: () => void;
};

const Modal = ({ children, onClose }: ModalPropsType) => {
    return (
        <>
            <Overlay onClick={onClose} />

            <ModalContainerStyle>
                <XButtonStyle onClick={onClose}>
                    <IoClose size={22} />
                </XButtonStyle>
                <ContentModalStyle>{children}</ContentModalStyle>
            </ModalContainerStyle>
        </>
    );
};

export default Modal;
