import List from "./List";
import { IoHomeOutline } from "react-icons/io5";
import {
  ContainerTextStyle,
  TextHeaderStyle,
  TextStyle,
} from "src/styled-components/styled-components";
import { useTranslation } from "react-i18next";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { t } from "i18next";

type categoryItemType = {
  name: string;
  count: number;
  icon: JSX.Element;
};

const categoriesItems: categoryItemType[] = [
  { name: t("home"), count: 3, icon: <IoHomeOutline size={22} /> },
  {
    name: t("completed"),
    count: 2,
    icon: <MdOutlineFileDownloadDone size={22} />,
  },
  { name: t("personal"), count: 7, icon: <IoHomeOutline size={22} /> },
  { name: t("work"), count: 4, icon: <IoHomeOutline size={22} /> },
];

const renderCategory = (category: categoryItemType) => {
  return (
    <>
      <p>{category.icon}</p>
      <p>{category.name}</p>
      <p>{category.count}</p>
    </>
  );
};

const PrivateCategories = () => {
  const { t } = useTranslation();

  return (
    <>
      <TextHeaderStyle>{t("private")}</TextHeaderStyle>
      <ContainerTextStyle>
        <List items={categoriesItems} renderItems={renderCategory} />
      </ContainerTextStyle>
    </>
  );
};

export default PrivateCategories;
