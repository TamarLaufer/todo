import { useTranslation } from "react-i18next";
import {
    ContainerHeaderStyle,
    HeaderTextStyle,
} from "src/styling/styled-components/styled-components";
import "react-calendar/dist/Calendar.css";
import { useGetTimeInADay } from "src/hooks/useGetTimeInADay";

const Header: React.FC = (): JSX.Element => {
    const { t, i18n } = useTranslation();
    const now = new Date();

    const locale = i18n.language === "he" ? "he-IL" : "en-GB";

    const formattedDate = new Intl.DateTimeFormat(locale, {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(now);

    const userName = "Tamar Laufer";

    return (
        <ContainerHeaderStyle>
            <HeaderTextStyle>
                {t("HELLO", {
                    userName,
                    timeInDay: useGetTimeInADay(),
                })}
            </HeaderTextStyle>
            <HeaderTextStyle>
                {t("TODAY", { date: formattedDate })}
            </HeaderTextStyle>
        </ContainerHeaderStyle>
    );
};

export default Header;
