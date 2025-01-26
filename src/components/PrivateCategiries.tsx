import { IconType } from "react-icons";
import List from "./List"
import { IoHomeOutline } from "react-icons/io5";
import { Fragment, useCallback } from "react";
import { ContainerTextStyle, TextStyle } from "src/styled-components/styled-components";
import { useTranslation } from "react-i18next";
import { MdOutlineFileDownloadDone } from "react-icons/md";


type categoryItemType = {
    name: string;
    count: number;
    icon: JSX.Element;
}

const categiriesItems: categoryItemType[] = [
    {name: "Home", count: 3, icon: <IoHomeOutline />},
    {name: "Completed", count: 2, icon: < MdOutlineFileDownloadDone/>},
    {name: "Personal", count: 7, icon: <IoHomeOutline />},
    {name: "Work", count: 4, icon: <IoHomeOutline />},
    {name: "Other", count: 5, icon: <IoHomeOutline />}
 ]

const renderCategory = (category: categoryItemType) => {
    return (
      <div style={{ flexDirection: 'row'}}>
        <p style={{}}>{category.name}</p>
        <p>{category.count}</p>
        <p>{category.icon}</p>
      </div>
    );
  };

const PrivateCategiries = ()=>{
    const { t } = useTranslation();

    return(
        <ContainerTextStyle>  
            <TextStyle>{t("private")}</TextStyle>
            <List items={categiriesItems} renderItems={renderCategory}/>
        </ContainerTextStyle>)
}

export default PrivateCategiries