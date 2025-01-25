import SideBar from "src/components/SideBar";
import { ContainerStyle } from "src/styled-components/styled-components";

const Home: React.FC = (): JSX.Element => {
  return (
    <ContainerStyle>
      <SideBar />
    </ContainerStyle>
  );
};

export default Home;
