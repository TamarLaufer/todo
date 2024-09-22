import React, { useContext } from 'react';
import { ThemeContext } from '../helpers/themeContext';
import { defaultTheme } from './theme';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  display?: string;
  backgroundColor?: string;
  textColor?: string;
  [key: string]: any;
}

const Box: React.FC<BoxProps> = ({ children, display, backgroundColor, textColor, style, ...rest }) => {
  const theme = useContext(ThemeContext);

  const boxStyle: React.CSSProperties = {
    display,
    backgroundColor: backgroundColor || theme?.colors.failure,
    color: textColor || theme?.colors.danger, 
    ...style,
  };

  return (
    <div style={boxStyle} {...rest}>
      {children}
    </div>
  );
};

export default Box;
