import List from "./List";
import { IoHomeOutline } from "react-icons/io5";
import {
    ContainerCategoryStyle,
    IconContainerStyle,
    TextSideBarHeaderStyle,
    TextStyle,
} from "src/styling/styled-components/styled-components";
import { useTranslation } from "react-i18next";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { FaPersonRays } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { Fragment } from "react/jsx-runtime";
import { useCallback } from "react";

type categoryItemType = {
    id: string;
    name: string;
    count: number;
    icon: JSX.Element;
};

const PrivateCategories = () => {
    const { t } = useTranslation();

    const renderCategory = (category: categoryItemType) => {
        return (
            <ContainerCategoryStyle>
                <TextStyle>{category.icon}</TextStyle>
                <TextStyle>{category.name}</TextStyle>
                <IconContainerStyle>{category.count}</IconContainerStyle>
            </ContainerCategoryStyle>
        );
    };

    const categoriesItems: categoryItemType[] = [
        {
            id: "home",
            name: t("HOME"),
            count: 3,
            icon: <IoHomeOutline size={22} />,
        },
        {
            id: "completed",
            name: t("COMPLETED"),
            count: 2,
            icon: <MdOutlineFileDownloadDone size={22} />,
        },
        {
            id: "personal",
            name: t("PERSONAL"),
            count: 7,
            icon: <FaPersonRays size={22} />,
        },
        {
            id: "work",
            name: t("WORK"),
            count: 4,
            icon: <GrWorkshop size={22} />,
        },
    ];

    return (
        <Fragment>
            <TextSideBarHeaderStyle>{t("PRIVATE")}</TextSideBarHeaderStyle>
            <List items={categoriesItems} renderItems={renderCategory} />
        </Fragment>
    );
};

export default PrivateCategories;
