import styled from "styled-components";
import { WarningOutlined } from "@ant-design/icons";

export const ErrorPageWrapper = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.color.DARK_GRAY};

  display: flex;
  justify-content: center;
  align-items: center;

  & span,
  & h2 {
    display: flex;
    justify-content: center;
  }

  & h2,
  & div {
    color: white;
    opacity: 0.8;
  }
`;

export const ErrorIcon = styled(WarningOutlined)`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
