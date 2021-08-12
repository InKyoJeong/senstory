import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/common/Layout";
import { Button } from "antd";

const DiaryDetail = () => {
  const router = useRouter();
  const { diaryId, userId } = router.query;
  console.log("diaryId:", diaryId);
  console.log("유저아이디 : ", userId);
  // const parseId = parseInt(diaryId, 10);
  return (
    <Layout>
      <div style={{ color: "white" }}>userId: {userId}</div>
      <div style={{ color: "white" }}>diaryId: {diaryId}</div>
      <Button onClick={() => router.back()}>뒤로</Button>
    </Layout>
  );
};

export default DiaryDetail;
