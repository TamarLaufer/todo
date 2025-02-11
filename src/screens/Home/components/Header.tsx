import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
    ContainerHeaderStyle,
    HeaderTextStyle,
} from "src/styling/styled-components/styled-components";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";
import { RootReducer } from "src/state/store";
import { useGetTimeInADay } from "src/hooks/useGetTimeInADay";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Header: React.FC = (): JSX.Element => {
    const { t } = useTranslation();
    const tasks = useSelector((state: RootReducer) => state.task.tasks);
    const [value, onChange] = useState<Value>(new Date());

    return (
        <ContainerHeaderStyle>
            <HeaderTextStyle>
                {t("HELLO", {
                    userName: "Tamar Laufer",
                    timeInDay: useGetTimeInADay(),
                })}
            </HeaderTextStyle>
            <HeaderTextStyle>{t("TODAY", { date: value })}</HeaderTextStyle>
        </ContainerHeaderStyle>
    );
};

export default Header;
