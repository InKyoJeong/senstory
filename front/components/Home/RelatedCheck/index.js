import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { BorderOutlined, CheckSquareOutlined } from "@ant-design/icons";
import Conditional from "../../../hocs/Conditional";
import { RelatedForm } from "./styles";

const RelatedCheck = ({ check }) => {
  return (
    <>
      <Conditional condition={check}>
        <Link href="/">
          <a>
            <RelatedForm>
              <CheckSquareOutlined />
              친구의 소식만 보기
            </RelatedForm>
          </a>
        </Link>
      </Conditional>

      <Conditional condition={!check}>
        <Link href="/related">
          <a>
            <RelatedForm>
              <BorderOutlined />
              친구의 소식만 보기
            </RelatedForm>
          </a>
        </Link>
      </Conditional>
    </>
  );
};

RelatedCheck.propTypes = {
  check: PropTypes.bool,
};

export default RelatedCheck;
