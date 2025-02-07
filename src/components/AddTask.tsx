import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "src/state/store";
import { addTask, TaskType } from "src/state/tasks/taskSlice";
import {
    ButtonStyle,
    ContainerButtonStyle,
    InputStyle,
} from "src/styled-components/styled-components";
import Modal from "./Modal";

type AddTaskType = {
    displayCalendarFunc: () => void;
};

const AddTask = ({ displayCalendarFunc }: AddTaskType) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm<TaskType>();
    const [openModal, setOpenModal] = useState(false);
    const tasks = useSelector((state: RootReducer) => state.task.tasks);

    const onSubmit = (data: TaskType) => {
        dispatch(
            addTask({ ...data, id: String(Date.now()), status: "pending" })
        );
        reset();
        displayCalendarFunc();
    };

    const onCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <Fragment>
            <ButtonStyle onClick={() => setOpenModal((prev) => !prev)}>
                {t("create new task")}
            </ButtonStyle>
            {openModal && (
                <Modal onClose={onCloseModal}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputStyle
                            {...register("title", { required: true })}
                            placeholder="שם המשימה"
                        />
                        <InputStyle
                            {...register("date", { required: true })}
                            type="date"
                            placeholder="תאריך"
                        />
                        <InputStyle
                            {...register("startTime", { required: true })}
                            type="time"
                            placeholder="שעת התחלה"
                        />
                        <InputStyle
                            {...register("endTime", { required: true })}
                            type="time"
                            placeholder="שעת סיום"
                        />
                        <ContainerButtonStyle>
                            <ButtonStyle type="submit">
                                {t("send form")}
                            </ButtonStyle>
                        </ContainerButtonStyle>
                    </form>
                </Modal>
            )}
        </Fragment>
    );
};

export default AddTask;
