import { Fragment, HTMLInputTypeAttribute, useCallback, useState } from "react";
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

    const fields = [
        { name: "title", type: "text", placeholder: t("TASK_NAME") },
        { name: "date", type: "date", placeholder: t("DATE") },
        { name: "startTime", type: "time", placeholder: t("STARTING_HOUR") },
        { name: "endTime", type: "time", placeholder: t("ENDING_HOUR") },
    ];

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
                {t("CREATE_NEW_TASK")}
            </ButtonStyle>
            {openModal && (
                <Modal onClose={onCloseModal}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {fields.map(({ name, type, placeholder }) => {
                            return (
                                <InputStyle
                                    {...register(name as keyof TaskType, {
                                        required: true,
                                    })}
                                    key={name}
                                    type={type}
                                    placeholder={placeholder}
                                />
                            );
                        })}
                        <ContainerButtonStyle>
                            <ButtonStyle type="submit">
                                {t("SEND_FORM")}
                            </ButtonStyle>
                        </ContainerButtonStyle>
                    </form>
                </Modal>
            )}
        </Fragment>
    );
};

export default AddTask;
