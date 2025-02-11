import { FaPersonRays } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { categoryItemType } from "src/types";

export const HOME_DISPLAY = {
    INITIAL: "INITIAL",
    TODO_LIST: "TODO_LIST",
    COMPLETED: "COMPLETED",
};

export const CATEGORIES: categoryItemType[] = [
    {
        id: "home",
        name: "HOME",
        icon: IoHomeOutline,
    },
    {
        id: "completed",
        name: "COMPLETED",
        icon: MdOutlineFileDownloadDone,
    },
    {
        id: "personal",
        name: "PERSONAL",
        icon: FaPersonRays,
    },
    {
        id: "work",
        name: "WORK",
        icon: GrWorkshop,
    },
];
