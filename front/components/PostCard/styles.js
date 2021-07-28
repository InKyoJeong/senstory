import styled, { css } from "styled-components";
import { List, Button, Card } from "antd";

const cardStyle = css`
  overflow: hidden;
  background-color: #2d2d2e;
`;

export const PostCardWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const RepostHeader = styled.div`
  background-color: #39393b;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 8px 10px;
`;

export const RepostTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
`;

export const RepostTitle = styled.span`
  color: #c5c5c7;
  margin-left: 5px;
`;

export const CommonCard = styled(Card)`
  ${cardStyle}
  border: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: ${(props) =>
    props.repost === "true" ? "0px" : "10px"};
  border-top-right-radius: ${(props) =>
    props.repost === "true" ? "0px" : "10px"};
`;

export const RepostInnerCard = styled(Card)`
  ${cardStyle}
  border-radius: 10px;
  border: 4px solid #404042;
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
  background-color: ${(props) => props.theme.DARK_GRAY};

  &:hover {
    color: white;
  }
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
  background-color: ${(props) =>
    props.edit === "true" ? "#1890FF" : "#eb7575"};
  color: white;
  margin: 5px 0px;
  border-radius: 10px;
  border-color: white;

  &:hover {
    background-color: ${(props) => props.edit === "true" || "#e89b9b"};
    border-color: ${(props) => props.edit === "true" || "#e89b9b"};
    color: white;
  }
`;
