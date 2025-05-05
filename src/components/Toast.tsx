import { useEffect } from 'react';
import styled from 'styled-components';

const ToastContainerStyle = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #e74c3c;
  color: white;
  padding: 16px 24px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${props => props.isVisible ? '0' : '120%'});
  font-family: inherit;
  font-size: 14px;
  line-height: 1.5;
  max-width: 300px;
  text-align: right;
  direction: rtl;
`;

type ToastProps = {
  message: string;
  isVisible: boolean;
  onClose: () => void;
};

const Toast = ({ message, isVisible, onClose }: ToastProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <ToastContainerStyle isVisible={isVisible}>
      {message}
    </ToastContainerStyle>
  );
};

export default Toast; 