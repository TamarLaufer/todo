import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "src/components/List";
import { RootReducer } from "src/state/store";
import { TaskType, updateTask } from "src/state/tasks/taskSlice";
import {
    CheckboxStyle,
    ContainerAllTasksStyle,
    ContainerTaskStyle,
    TextStyle,
} from "src/styling/styled-components/styled-components";

const Tasks = () => {
    const tasks = useSelector((state: RootReducer) => state.task.tasks);
    const dispatch = useDispatch();

    const updateTaskStatus = (task: TaskType) => {
        dispatch(
            updateTask({
                ...task,
                status: task.status === "completed" ? "pending" : "completed",
            })
        );
    };

    const renderTask = (task: TaskType) => {
        return (
            <ContainerTaskStyle>
                <CheckboxStyle
                    type="checkbox"
                    checked={task.status === "completed"}
                    onChange={() => updateTaskStatus(task)}
                />
                <TextStyle>{task.title}</TextStyle>
                <TextStyle>{task.category}</TextStyle>
                <TextStyle>{task.date}</TextStyle>
            </ContainerTaskStyle>
        );
    };

    return (
        <ContainerAllTasksStyle>
            <List items={tasks} renderItems={renderTask} />
        </ContainerAllTasksStyle>
    );
};

export default Tasks;
