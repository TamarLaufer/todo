import React, { Fragment, useMemo } from "react";
import { v4 as uuid } from "uuid";

interface Identifiable {
    id?: string;
}

interface ListPropsType<T extends Identifiable> {
    items: T[];
    renderItems: (item: T) => React.ReactNode;
}

const List = <T extends Identifiable>({
    items,
    renderItems,
}: ListPropsType<T>) => {
    const stableKeys = useMemo(() => {
        return items.map((item) => item.id || uuid());
    }, [items]);

    return (
        <>
            {items.map((item, index) => (
                <Fragment key={stableKeys[index]}>{renderItems(item)}</Fragment>
            ))}
        </>
    );
};

export default List;
