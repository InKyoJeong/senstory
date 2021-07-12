import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "antd";
import { StopOutlined } from "@ant-design/icons";
import { ListWrapper, ListItem, ButtonWrapper } from "./styles";

const FollowList = ({ header, data }) => {
  const gridStyle = useMemo(() => ({ gutter: 4, xs: 2, md: 3 }), []);

  return (
    <ListWrapper
      grid={gridStyle}
      style={{
        borderRadius: 10,
        backgroundColor: "#404042",
        borderColor: "gray",
      }}
      size="small"
      header={<div style={{ color: "white" }}>{header}</div>}
      loadMore={
        <ButtonWrapper>
          <Button>더 보기</Button>
        </ButtonWrapper>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <ListItem>
          <Card actions={[<StopOutlined key="stop" />]}>
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
