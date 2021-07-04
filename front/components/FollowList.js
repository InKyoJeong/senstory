import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { List, Card, Button } from "antd";
import { StopOutlined } from "@ant-design/icons";

const FollowList = ({ header, data }) => {
  const listStyle = useMemo(
    () => ({
      marginBottom: 20,
    }),
    []
  );
  const gridStyle = useMemo(() => ({ gutter: 4, xs: 2, md: 3 }), []);
  const moreStyle = useMemo(
    () => ({ textAlign: "center", margin: "10px 0" }),
    []
  );
  const itemStyle = useMemo(() => ({ marginTop: 20 }), []);

  return (
    <List
      style={listStyle}
      grid={gridStyle}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div style={moreStyle}>
          <Button>더 보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={itemStyle}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
