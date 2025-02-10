import React, { Fragment } from "react";

interface ListPropsType<T> {
    items: T[];
    renderItems: (item: T) => React.ReactNode;
}

const List = <T extends {}>({ items, renderItems }: ListPropsType<T>) => {
    return (
        <>
            {items.map((item, i) => (
                <Fragment key={i}>{renderItems(item)}</Fragment>
            ))}
        </>
    );
};

export default List;
