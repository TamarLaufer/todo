import { useTranslation } from "react-i18next";
import { DropdownWrapperStyle } from "src/styling/styled-components/styled-components";
import Dropdown from "./Dropdown";
import { useCallback } from "react";

export const ChangeLanguage: React.FC = (): JSX.Element => {
    const { i18n } = useTranslation();

    const changeLanguage = useCallback(
        (lang: string) => {
            i18n.changeLanguage(lang);
        },
        [i18n]
    );

    const options = [
        { label: "English", value: "en" },
        { label: "עברית", value: "he" },
    ];

    return (
        <DropdownWrapperStyle>
            <Dropdown
                options={options}
                onChange={changeLanguage}
                defaultValue={"he"}
            />
        </DropdownWrapperStyle>
    );
};
