import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "antd";
import { StopOutlined } from "@ant-design/icons";
import { ListWrapper, ListItem, ButtonWrapper } from "./styles";
import { UNFOLLOW_REQUEST } from "../../actions/user";
import { useDispatch } from "react-redux";

const FollowList = ({ header, data }) => {
  const gridStyle = useMemo(() => ({ gutter: 4, xs: 2, md: 3 }), []);
  const dispatch = useDispatch();

  const onCancel = (id) => () => {
    dispatch({
      type: UNFOLLOW_REQUEST,
      data: id,
    });
  };

  return (
    <ListWrapper
      grid={gridStyle}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <ButtonWrapper>
          <Button>더 보기</Button>
        </ButtonWrapper>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <ListItem>
          <Card
            actions={[<StopOutlined key="stop" onClick={onCancel(item.id)} />]}
          >
            <Card.Meta description={item.nickname} />
          </Card>
        </ListItem>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
