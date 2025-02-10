import styled from "styled-components";
import { COLORS } from "../colors";

export const ContainerStyle = styled.div`
    display: flex;
    background: ${COLORS.GREY};
    min-height: 100vh;
    flex-direction: row;
`;

export const ContentStyle = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${COLORS.GREY};
`;

export const SideBarContainerStyle = styled("div").withConfig({
    shouldForwardProp: (prop) => prop !== "isDisplay",
})<{ isDisplay: boolean }>`
    margin: 1% 0% 1% 0%;
    width: ${({ isDisplay }) => (isDisplay ? "400px" : "8px")};
    background: ${COLORS.WHITE};
    display: flex;
    transition: all 0.3s ease;
    align-items: ${({ isDisplay }) => (isDisplay ? "center" : "flex-start")};
    flex-direction: column;
    border-radius: 3% 0% 0% 3%;

    & > *:not(.shutter) {
        transform: ${({ isDisplay }) =>
            isDisplay ? "translateX(0%)" : "translateX(-100%)"};
        opacity: ${({ isDisplay }) => (isDisplay ? "1" : "0")};
        transition: all 0.3s ease;
    }
`;

export const ContainerTextStyle = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 5%;
`;

export const TextStyle = styled.p`
    font-size: 16px;
    color: ${COLORS.DARK};
    font-family: "Arial", sans-serif;
    margin: 1px;
    word-wrap: break-word;
`;

export const TextSideBarHeaderStyle = styled.h3`
    margin: 1rem;
    color: ${COLORS.DARK};
`;

export const ContainerButtonStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonStyle = styled.button`
    background-color: rgb(51, 53, 54);
    color: #fff;
    width: 25rem;
    height: 3rem;
    border-radius: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border: none;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgb(173, 179, 185);
    }
`;

export const DropdownWrapperStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem;
    border-radius: 20%;
    border-color: black;
    border-width: 1px;
`;

export const DropdownSelectStyle = styled.select`
    padding: 0.5rem;
    border: none;
    // border-radius: 2rem;
    position: relative;
    width: 100px;

    &:focus {
        border-color: rgba(213, 223, 234, 0.91);
        border: none;
    }
`;

export const DropdownOptionStyle = styled.option`
    cursor: pointer;
    padding: 2rem;
    border: none;
    border-radius: 50%;
`;

export const ShutterContainerStyle = styled.div`
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 2px;
    right: 49%;
    top: 4%;
    overflow: visible;
`;

export const ShutterStyle = styled.button`
    border-width: 0;
    border-radius: 1rem;
    background: rgb(255, 255, 255);
    cursor: pointer;
    padding: 20px;
    z-index: 100;
`;

export const ScrollableContainerStyle = styled.div`
  width: 90%;
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

export const IconContainerStyle = styled.span`
    background: #eeeeee;
    padding: 8px;
    border-radius: 90%;
    width: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AddTaskContainerStyle = styled.div`
    display: flex;
    flex-shrink: 1;
    margin: 1rem;
`;

export const CalendarWrapperStyle = styled.div`
    position: absolute;
    top: 16rem;
    right: 1rem;
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-radius: 12px;
    z-index: 100;
    width: 350px;
`;

export const ModalContainerStyle = styled.div`
    display: flex;
    position: fixed;
    bottom: 23%;
    left: 20%;
    width: 60%;
    height: 60%;
    align-items: space-between;
    justify-content: center;
    background: rgb(248, 249, 250);
    border-radius: 12px;
    z-index: 1000;
    flex-direction: column;
`;

export const InputStyle = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;

    &::placeholder {
        color: #aaa;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

export const XButtonStyle = styled.button`
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    border: none;
    cursor: pointer;
    margin-bottom: 2%;
    background: none;
`;

export const ContentModalStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3%;
`;

export const ContainerTaskStyle = styled.div`
    display: flex;
    background: ${COLORS.WHITE};
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin: 4px;
    border-radius: 10px;
`;

export const ContainerAllTasksStyle = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ContainerCategoryStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 4px;
`;

export const TextHomeHeaderStyle = styled.h1``;

export const HomeTextStyle = styled.p``;
