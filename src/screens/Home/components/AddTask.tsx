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
import { CATEGORIES } from "src/constants/constants";
import Toast from "../../../components/Toast";

type AddTaskType = {
    displayCalendar: () => void;
};

type FormField = {
    name: keyof TaskType;
    type: "text" | "date" | "time" | "dropdown";
    placeholder: string;
    validation: {
        required: string;
    };
};

const AddTask = ({ displayCalendar }: AddTaskType) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<TaskType>();
    const [openModal, setOpenModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showToast, setShowToast] = useState(false);
    const tasks = useSelector((state: RootReducer) => state.task.tasks);

    const fields: FormField[] = [
        { 
            name: "title", 
            type: "text", 
            placeholder: t("TASK_NAME"),
            validation: { required: t("TASK_NAME_REQUIRED") }
        },
        { 
            name: "date", 
            type: "date", 
            placeholder: t("DATE"),
            validation: { required: t("DATE_REQUIRED") }
        },
        { 
            name: "startTime", 
            type: "time", 
            placeholder: t("STARTING_HOUR"),
            validation: { required: t("START_TIME_REQUIRED") }
        },
        { 
            name: "endTime", 
            type: "time", 
            placeholder: t("ENDING_HOUR"),
            validation: { required: t("END_TIME_REQUIRED") }
        },
        { 
            name: "category", 
            type: "dropdown", 
            placeholder: t("CATEGORY"),
            validation: { required: t("CATEGORY_REQUIRED") }
        },
    ];

    const onSubmit = async (data: TaskType) => {
        try {
            setIsSubmitting(true);
            dispatch(
                addTask({ ...data, id: String(Date.now()), status: "pending" })
            );
            reset();
            setOpenModal(false);
            displayCalendar();
        } catch (error) {
            console.error("Error submitting task:", error);
            setErrorMessage(t("ERROR_SUBMITTING_TASK"));
            setShowToast(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const onCloseModal = () => {
        setOpenModal(false);
        reset();
    };

    const handleToastClose = () => {
        setShowToast(false);
        setErrorMessage("");
    };

    useEffect(() => {
        console.log(tasks, "tasks");
    }, [tasks]);

    return (
        <Fragment>
            <Toast 
                message={errorMessage}
                isVisible={showToast}
                onClose={handleToastClose}
            />
            <ContainerButtonStyle>
                <ButtonStyle 
                    onClick={() => setOpenModal((prev) => !prev)}
                    aria-label={t("CREATE_NEW_TASK")}
                >
                    {t("CREATE_NEW_TASK")}
                </ButtonStyle>
            </ContainerButtonStyle>
            {openModal && (
                <Modal onClose={onCloseModal}>
                    <form onSubmit={handleSubmit(onSubmit)} aria-label={t("ADD_TASK_FORM")}>
                        {fields.map(({ name, type, placeholder, validation }) => {
                            return type === "dropdown" ? (
                                <div key={name}>
                                    <DropdownSelectStyle
                                        {...register(name, validation)}
                                        aria-label={placeholder}
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
                                    {errors[name] && (
                                        <span role="alert">{errors[name]?.message as string}</span>
                                    )}
                                </div>
                            ) : (
                                <div key={name}>
                                    <InputStyle
                                        {...register(name, validation)}
                                        type={type}
                                        placeholder={placeholder}
                                        aria-label={placeholder}
                                    />
                                    {errors[name] && (
                                        <span role="alert">{errors[name]?.message as string}</span>
                                    )}
                                </div>
                            );
                        })}
                        <ContainerButtonStyle>
                            <ButtonStyle 
                                type="submit" 
                                disabled={isSubmitting}
                                aria-label={t("SEND_FORM")}
                            >
                                {isSubmitting ? t("SUBMITTING") : t("SEND_FORM")}
                            </ButtonStyle>
                        </ContainerButtonStyle>
                    </form>
                </Modal>
            )}
        </Fragment>
    );
};

export default AddTask;
