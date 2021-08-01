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
  width: 40%;
  padding: 30px;
  transform: translate(-50%, -50%);
  background-color: #d9d7d7;
  border-radius: 10px;
  animation: fadeIn 0.7s;

  & div {
    margin-bottom: 15px;
    font-weight: bolder;
    color: ${(props) => props.theme.BLACK};
  }

  & Button {
    border-radius: 10px;
    width: 30%;
  }

  @media screen and (max-width: 992px) {
    width: 80%;

    & Button {
      width: 50%;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
