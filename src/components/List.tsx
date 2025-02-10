import React, { Fragment } from "react";
import { ListTextStyle } from "src/styling/styled-components/styled-components";

interface ListPropsType<T> {
    items: T[];
    renderItems: (item: T) => React.ReactNode;
}

const List = <T extends {}>({ items, renderItems }: ListPropsType<T>) => {
    return (
        <>
            {items.map((item, i) => (
                <ListTextStyle key={i}>{renderItems(item)}</ListTextStyle>
            ))}
        </>
    );
};

export default List;
