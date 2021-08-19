import styled from "styled-components";
import { Input } from "antd";

export const TagWrapper = styled.div`
  display: flex;
`;

export const PostContent = styled.p`
  color: white;
  margin-right: 3px;
`;

export const PostEditWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const PostEditInput = styled(Input.TextArea)`
  background-color: ${(props) => props.theme.LIGHT_GRAY};
  border-color: ${(props) => props.theme.LIGHT_GRAY};
  color: white;
  border-radius: 10px;
`;

export const EditBtnWrapper = styled.div`
  margin-left: 5px;

  & Button {
    background-color: #1890ff;
    color: white;
    border: none;
    border-radius: 10px;

    &:hover {
      background-color: #4ea1ed;
      color: white;
    }
  }
  & Button:last-child {
    background-color: #6b7987;
  }

  & div {
    height: 5px;
  }
`;
