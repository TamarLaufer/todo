import { useTranslation } from "react-i18next";
import { ButtonStyle } from "src/styled-components/styled-components";

type AddTaskType = {
  displayCalendarFunc: () => void;
};

const AddTask = ({ displayCalendarFunc }: AddTaskType) => {
  const { t } = useTranslation();
  return (
    <ButtonStyle onClick={displayCalendarFunc}>
      {t("create new task")}
    </ButtonStyle>
  );
};

export default AddTask;
