import { useSelector } from "react-redux";
import List from "src/components/List";
import { RootReducer } from "src/state/store";
import { TaskType } from "src/state/tasks/taskSlice";
import {
    ContainerTaskStyle,
    TextStyle,
} from "src/styling/styled-components/styled-components";

const renderTask = (task: TaskType) => {
    return (
        <ContainerTaskStyle>
            <TextStyle>{task.title}</TextStyle>
            <TextStyle>{task.category}</TextStyle>
            <TextStyle>{task.date}</TextStyle>
        </ContainerTaskStyle>
    );
};

const Tasks = () => {
    const tasks = useSelector((state: RootReducer) => state.task.tasks);

    return <List items={tasks} renderItems={renderTask} />;
};

export default Tasks;
