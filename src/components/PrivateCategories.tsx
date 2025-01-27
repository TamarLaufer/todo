import List from "./List";
import { IoHomeOutline } from "react-icons/io5";
import {
  ContainerTextStyle,
  IconContainerStyle,
  TextHeaderStyle,
} from "src/styled-components/styled-components";
import { useTranslation } from "react-i18next";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { FaPersonRays } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";

type categoryItemType = {
  name: string;
  count: number;
  icon: JSX.Element;
};

const renderCategory = (category: categoryItemType) => {
  return (
    <>
      <p>{category.icon}</p>
      <p>{category.name}</p>
      <IconContainerStyle>{category.count}</IconContainerStyle>
    </>
  );
};

const PrivateCategories = () => {
  const { t } = useTranslation();
  const categoriesItems: categoryItemType[] = [
    { name: t("home"), count: 3, icon: <IoHomeOutline size={22} /> },
    {
      name: t("completed"),
      count: 2,
      icon: <MdOutlineFileDownloadDone size={22} />,
    },
    { name: t("personal"), count: 7, icon: <FaPersonRays size={22} /> },
    { name: t("work"), count: 4, icon: <GrWorkshop size={22} /> },
  ];

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
