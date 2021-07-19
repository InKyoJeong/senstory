import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "antd";
import { StopOutlined } from "@ant-design/icons";
import { UNFOLLOW_REQUEST, REMOVE_FOLLOWER_REQUEST } from "../../actions/user";
import { useDispatch } from "react-redux";

import { ListWrapper, ListItem, MoreButtonWrapper, FollowCard } from "./styles";

const FollowList = ({ header, data }) => {
  const gridStyle = useMemo(() => ({ gutter: 4, xs: 2, md: 3 }), []);
  const dispatch = useDispatch();

  const onCancel = (id) => () => {
    if (header === "팔로잉") {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: id,
      });
    }

    dispatch({
      type: REMOVE_FOLLOWER_REQUEST,
      data: id,
    });
  };

  return (
    <ListWrapper
      grid={gridStyle}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <MoreButtonWrapper>
          <Button>더 보기</Button>
        </MoreButtonWrapper>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <ListItem>
          <FollowCard
            bordered={false}
            actions={[<StopOutlined key="stop" onClick={onCancel(item.id)} />]}
          >
            <Card.Meta description={<div>{item.nickname}</div>} />
          </FollowCard>
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
