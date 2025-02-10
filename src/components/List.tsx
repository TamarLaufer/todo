import React, { Fragment, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

/* Optional id for key */
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
    /* Stable ids to prevent unnecessary */
    const stableKeys = useMemo(() => {
        return items.map((item) => item.id || uuidv4());
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
