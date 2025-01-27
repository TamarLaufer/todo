import { useTranslation } from "react-i18next";
import { ButtonStyle } from "src/styled-components/styled-components";

const AddTask = () => {
  const { t } = useTranslation();
  return <ButtonStyle>{t("create new task")}</ButtonStyle>;
};

export default AddTask;
