import React from 'react';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  display?: string;
  backgroundColor?: string;
  // Add more props as needed
}