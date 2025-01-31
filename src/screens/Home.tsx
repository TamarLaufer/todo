import { useCallback, useState } from "react";
import Calendar from "react-calendar";
import { useTranslation } from "react-i18next";
import AddTask from "src/components/AddTask";
import SideBar from "src/components/SideBar";
import {
  AddTaskContainerStyle,
  CalendarWrapperStyle,
  ContainerStyle,
  ContentContainerStyle,
  ContentStyle,
} from "src/styled-components/styled-components";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Home: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  const [value, onChange] = useState<Value>(new Date());
  const [displayCalendar, setDisplayCalendar] = useState(false);

  const displayCalendarFunc = useCallback(() => {
    setDisplayCalendar((perv) => !perv);
  }, []);

  return (
    <ContainerStyle>
      <SideBar />
      <ContentStyle>
        <ContentContainerStyle>
          <h1>{t("welcome to your tasks")}</h1>
          <p>{t("add tasks or view existing ones")}</p>
          {displayCalendar && (
            <CalendarWrapperStyle>
              <Calendar
                activeStartDate={new Date(2025, 1, 31)}
                onChange={onChange}
                value={value}
              />
            </CalendarWrapperStyle>
          )}
        </ContentContainerStyle>
        <AddTaskContainerStyle>
          <AddTask displayCalendarFunc={displayCalendarFunc} />
        </AddTaskContainerStyle>
      </ContentStyle>
    </ContainerStyle>
  );
};

export default Home;
