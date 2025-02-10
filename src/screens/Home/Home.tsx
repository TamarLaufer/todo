import { useCallback, useState } from "react";
import Calendar from "react-calendar";
import { useTranslation } from "react-i18next";
import AddTask from "src/screens/Home/components/AddTask";
import SideBar from "src/components/SideBar";
import {
    AddTaskContainerStyle,
    ContainerStyle,
    ContentStyle,
    HomeTextStyle,
    TextHomeHeaderStyle,
} from "src/styling/styled-components/styled-components";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";
import { RootReducer } from "src/state/store";
import Tasks from "./components/Tasks";
import { HOME_DISPLAY } from "src/constants/constants";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Home: React.FC = (): JSX.Element => {
    const { t } = useTranslation();
    const tasks = useSelector((state: RootReducer) => state.task.tasks);
    const [value, onChange] = useState<Value>(new Date());
    const [displayCalendar, setDisplayCalendar] = useState(false);

    const displayCalendarFunc = useCallback(() => {
        setDisplayCalendar((perv) => !perv);
    }, []);

    const renderContent = useCallback(() => {
        if (tasks.length === 0) {
            return (
                <>
                    <TextHomeHeaderStyle>
                        {t("WELCOME_TO_YOUR_TASKS")}
                    </TextHomeHeaderStyle>
                    <HomeTextStyle>
                        {t("ADD_NEW_TASKS_OR_VIEW_EXISTING_ONES")}
                    </HomeTextStyle>
                </>
            );
        } else {
            return <Tasks />;
        }
    }, [t, tasks]);

    return (
        <ContainerStyle>
            <SideBar />
            <ContentStyle>
                {/* {displayCalendar && (
                        <CalendarWrapperStyle>
                        <Calendar
                            activeStartDate={new Date(2025, 1, 31)}
                            onChange={onChange}
                            value={value}
                        />
                        </CalendarWrapperStyle>
                        )} */}
                {renderContent()}
                <AddTaskContainerStyle>
                    <AddTask displayCalendarFunc={displayCalendarFunc} />
                </AddTaskContainerStyle>
            </ContentStyle>
        </ContainerStyle>
    );
};

export default Home;
