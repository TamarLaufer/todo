import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "src/state/store";
import { addTask, TaskType } from "src/state/tasks/taskSlice";
import {
    ButtonStyle,
    ContainerButtonStyle,
    DropdownSelectStyle,
    InputStyle,
} from "src/styling/styled-components/styled-components";
import Modal from "../../../components/Modal";
import { type } from "@testing-library/user-event/dist/type";
import { CATEGORIES } from "src/constants/constants";

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
        { name: "category", type: "dropdown", placeholder: t("CATEGORY") },
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

    useEffect(() => {
        console.log(tasks, "tasks");
    }, [tasks]);

    return (
        <Fragment>
            <ContainerButtonStyle>
                <ButtonStyle onClick={() => setOpenModal((prev) => !prev)}>
                    {t("CREATE_NEW_TASK")}
                </ButtonStyle>
            </ContainerButtonStyle>
            {openModal && (
                <Modal onClose={onCloseModal}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {fields.map(({ name, type, placeholder }) => {
                            return type === "dropdown" ? (
                                <DropdownSelectStyle
                                    key={name}
                                    {...register(name, { required: true })}
                                >
                                    <option value="">{placeholder}</option>
                                    {CATEGORIES.map((category) => (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    ))}
                                </DropdownSelectStyle>
                            ) : (
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
