import React from "react";
import Link from "next/link";
import { RelatedForm } from "./styles";
import { PushpinFilled } from "@ant-design/icons";

const RelatedCheck = () => {
  return (
    <RelatedForm>
      <PushpinFilled />
      <Link href="/related">
        <a>친구의 소식만 보기</a>
      </Link>
    </RelatedForm>
  );
};

export default RelatedCheck;
