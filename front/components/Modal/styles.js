import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export const ModalForm = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 30%;
  left: 50%;
  width: 50%;
  height: 20%;
  transform: translate(-50%, -50%);
  background-color: #d9d7d7;
  border-radius: 10px;
  /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.9); */

  & div {
    margin-bottom: 15px;
  }

  & Button {
    border-radius: 10px;
    width: 40%;
  }

  @media screen and (max-width: 992px) {
    width: 80%;
  }
`;
