import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ButtonStyle } from "src/styled-components/styled-components";

type AddTaskType = {
  displayCalendarFunc: () => void;
};

const AddTask = ({ displayCalendarFunc }: AddTaskType) => {
  const { t } = useTranslation();
  const [addTaskLocal, setAddTaskLocal] = useState({
    id: "1",
    title: "Clean",
    date: "14/02/25",
    startTime: "05:00",
    endTime: "06:00",
    icon: "",
    status: "completed",
    category: "cleaning",
    description: "",
    reminder: "",
    priority: "low",
    participants: [""],
  });

  const handleClickButton = () => {
    displayCalendarFunc();
    setAddTaskLocal({});
  };

  return (
    <ButtonStyle onClick={handleClickButton}>
      {t("create new task")}
    </ButtonStyle>
  );
};

export default AddTask;
