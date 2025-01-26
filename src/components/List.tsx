import React, { Fragment } from "react";
import { TextStyle } from "src/styled-components/styled-components";

interface ListPropsType<T> {
  items: T[];
  renderItems: (item: T) => React.ReactNode;
}

const List = <T extends {}>({ items, renderItems }: ListPropsType<T>) => {
  return (
    <>
      {items.map((item, i) => (
        <TextStyle key={i}>{renderItems(item)}</TextStyle>
      ))}
    </>
  );
};

export default List;
