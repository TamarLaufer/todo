import { useTranslation } from "react-i18next";

export const useGetTimeInADay = (): string => {
    const { t } = useTranslation();
    var date = new Date();
    // const seconds = date.getSeconds();
    // const minutes = date.getMinutes();
    const hour = date.getHours();
    // const fullTime = `${hour}:${minutes}:${seconds}`

    if (hour >= 6 && hour < 12) {
        return t("GOOD_MORNING");
    } else if (hour >= 12 && hour < 18) {
        return t("GOOD_AFTERNOON");
    } else if ((hour >= 18 && hour <= 23) || (hour >= 0 && hour < 6)) {
        return t("GOOD_NIGHT");
    } else {
        return t("HELLO");
    }
};
