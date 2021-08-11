import React from "react";
import Link from "next/link";
import { RelatedForm } from "./styles";
import { BorderOutlined, CheckSquareOutlined } from "@ant-design/icons";
import Conditional from "../../hocs/Conditional";
import PropTypes from "prop-types";

const RelatedCheck = ({ check }) => {
  return (
    <RelatedForm>
      <Conditional condition={check}>
        <CheckSquareOutlined />
        <Link href="/">
          <a>친구의 소식만 보기</a>
        </Link>
      </Conditional>

      <Conditional condition={!check}>
        <BorderOutlined />
        <Link href="/related">
          <a>친구의 소식만 보기</a>
        </Link>
      </Conditional>
    </RelatedForm>
  );
};

RelatedCheck.propTypes = {
  check: PropTypes.bool,
};

export default RelatedCheck;
