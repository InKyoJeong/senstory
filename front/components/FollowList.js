import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { List, Card, Button } from "antd";
import { StopOutlined } from "@ant-design/icons";

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 10px 0px;
`;

const ListWrapper = styled(List)`
  margin-bottom: 20px;
`;

const ListItem = styled(List.Item)`
  margin-top: 10px;
`;

const FollowList = ({ header, data }) => {
  const gridStyle = useMemo(() => ({ gutter: 4, xs: 2, md: 3 }), []);

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
