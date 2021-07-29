import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { List, Card, Button, Avatar } from "antd";
import { StopOutlined } from "@ant-design/icons";
import { UNFOLLOW_REQUEST, REMOVE_FOLLOWER_REQUEST } from "../../actions/user";
import { useDispatch } from "react-redux";

import { ListWrapper, ListItem, MoreButtonWrapper, FollowCard } from "./styles";

const FollowList = ({ header, data, onClickMore, loading, mutate }) => {
  console.log(data);
  const dispatch = useDispatch();

  const onCancel = useCallback(
    (id) => () => {
      if (header === "팔로잉") {
        dispatch({
          type: UNFOLLOW_REQUEST,
          data: id,
        });
        mutate((prev) => prev.filter((data) => data.id !== id));
      }

      dispatch({
        type: REMOVE_FOLLOWER_REQUEST,
        data: id,
      });
      mutate((prev) => prev.filter((data) => data.id !== id));
    },
    []
  );

  // const gridStyle = useMemo(() => ({ xs: 2, md: 2 }), []);

  return (
    <ListWrapper
      // style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      // grid={gridStyle}
      size="small"
      header={
        <div>
          {header}
          {/* {data.length} */}
        </div>
      }
      loadMore={
        <MoreButtonWrapper>
          <Button onClick={onClickMore} loading={loading}>
            More
          </Button>
        </MoreButtonWrapper>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <ListItem>
          {/* <FollowCard
            style={{ display: "flex" }}
            bordered={false}
            actions={[<StopOutlined key="stop" onClick={onCancel(item.id)} />]}
          >
            <Card.Meta description={<div>{item.nickname}</div>} />
          </FollowCard> */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ marginRight: 5 }}>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </div>
            <div>{item.nickname}</div>

            <div>
              <StopOutlined key="stop" onClick={onCancel(item.id)} />
            </div>
          </div>
        </ListItem>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  // data: PropTypes.any.isRequired,
  onClickMore: PropTypes.func.isRequired,
  // loading: PropTypes.bool.isRequired,
};

export default FollowList;
