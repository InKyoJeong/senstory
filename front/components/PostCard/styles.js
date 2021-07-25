import styled from "styled-components";
import { List, Button } from "antd";

export const PostCardWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const PostAuthor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const CommentList = styled(List)`
  padding: 0px 20px;
  margin-top: 10px;
  margin-bottom: 30px;
  color: white;
  background-color: ${(props) => props.theme.MIDDLE_GRAY};
  border-radius: 10px;

  & li:not(:last-child) {
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
  }
`;

export const CommentAuthor = styled.div`
  padding: 3px 5px;
  border-radius: 5px;
  color: white;
  background-color: #1a1b1b;

  &:hover {
    color: white;
  }
`;

export const RepostWrapper = styled.div`
  background-color: #39393b;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 8px 10px;
`;

export const RepostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
`;

// ----- PostDropdown -----
export const DropdownWrapper = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  padding: 8px 10px;
  border-radius: 10px;
`;

export const DropdownButton = styled(Button)`
  background-color: ${(props) => (props.isEdit ? "#1890FF" : "#eb7575")};
  color: white;
  margin: 5px 0px;
  border-radius: 10px;
  border-color: white;

  &:hover {
    background-color: ${(props) => props.isEdit || "#e89b9b"};
    border-color: ${(props) => props.isEdit || "#e89b9b"};
    color: white;
  }
`;
