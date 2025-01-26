import styled from "styled-components";

export const ContainerStyle = styled.div`
  flex: 1;
  background: rgb(235, 226, 226);
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const SideBarContainerStyle = styled.div<{ isDisplay: boolean }>`
  flex: 1;
  height: 100vh;
  width: ${(props) => (props.isDisplay ? "400px" : "8px")};
  background: rgb(255, 255, 255);
  display: flex;
  transition: all 0.3s ease;
  align-items: ${(props) => (props.isDisplay ? "center" : "flex-start")};
  padding: 3rem 0 3rem 0;
  flex-direction: column;

  & > *:not(.shutter) {
    transform: ${(props) =>
      props.isDisplay ? "translateX(0%)" : "translateX(-100%)"};
    opacity: ${(props) => (props.isDisplay ? "1" : "0")};
    transition: all 0.3s ease;
  }
`;

export const ContainerTextStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  background: rgb(255, 205, 240);
`;

export const TextStyle = styled.p`
  display: flex;
  font-size: 14px;
  color: #333;
  font-family: "Arial", sans-serif;
  margin: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextHeaderStyle = styled.p`
  margin: 1rem;
  font-weight: bold;
  font-size: 18;
`;

export const ButtonStyle = styled.button`
  border-radius: 1rem;
  width: 4rem;
  height: 3rem;
`;

export const DropdownWrapperStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  border-radius: 2rem;
  border-color: black;
  border-width: 2px;
`;

export const DropdownSelectStyle = styled.select`
  padding: 0.5rem;
  border: none;
  border-radius: 2rem;
  position: relative;
  width: 100px;

  &:focus {
    border-color: rgb(158, 176, 196);
  }
`;

export const DropdownOptionStyle = styled.option`
  cursor: pointer;
  padding: 2rem;
  border: none;
  border-radius: 2rem;
`;

export const ShutterContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 0.7rem;
  height: 0.7rem;
  padding: 1px;
  right: 48%;
  top: -5%;
`;

export const ShutterStyle = styled.button`
  flex: 1;
  border-width: 0;
  border-radius: 1rem;
  background: rgb(255, 255, 255);
  padding: 1rem;
  cursor: pointer;
`;

export const ScrollableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: hidden; /* Hide horizontal scrolling */
  padding: 1rem;

  /* Optional: Add scrollbar styling for modern browsers */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
