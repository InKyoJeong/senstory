import React from "react";
import { useRouter } from "next/router";

const DiaryDetail = () => {
  const router = useRouter();
  const { diaryId, userId } = router.query;
  console.log("diaryId:", diaryId);
  console.log("유저아이디 : ", userId);
  // const parseId = parseInt(diaryId, 10);
  return (
    <div>
      <div>userId: {userId}</div>
      <div>diaryId: {diaryId}</div>
    </div>
  );
};

export default DiaryDetail;
