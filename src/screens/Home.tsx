import AddTask from "src/components/AddTask";
import SideBar from "src/components/SideBar";
import {
  AddTaskContainerStyle,
  ContainerStyle,
  ContentContainerStyle,
  ContentStyle,
} from "src/styled-components/styled-components";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <ContainerStyle>
        <SideBar />
        <ContentStyle>
          <ContentContainerStyle>
            <h1>Welcome to your tasks</h1>
            <p>Add tasks or view existing ones</p>
          </ContentContainerStyle>
          <AddTaskContainerStyle>
            <AddTask />
          </AddTaskContainerStyle>
        </ContentStyle>
      </ContainerStyle>
    </>
  );
};

export default Home;
