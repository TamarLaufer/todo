import List from "./List";
import {
    ContainerCategoryStyle,
    IconContainerStyle,
    TextSideBarHeaderStyle,
    TextStyle,
} from "src/styling/styled-components/styled-components";
import { useTranslation } from "react-i18next";
import { Fragment } from "react/jsx-runtime";
import { categoryItemType } from "src/types";
import { CATEGORIES } from "src/constants/constants";

const PrivateCategories = () => {
    const { t } = useTranslation();

    const renderCategory = (category: categoryItemType) => {
        const IconComponent = category.icon;
        return (
            <ContainerCategoryStyle>
                <TextStyle>
                    {IconComponent && <IconComponent size={22} />}
                </TextStyle>
                <TextStyle>{t(category.name)}</TextStyle>
                <IconContainerStyle />
            </ContainerCategoryStyle>
        );
    };

    return (
        <Fragment>
            <TextSideBarHeaderStyle>{t("PRIVATE")}</TextSideBarHeaderStyle>
            <List items={CATEGORIES} renderItems={renderCategory} />
        </Fragment>
    );
};

export default PrivateCategories;
