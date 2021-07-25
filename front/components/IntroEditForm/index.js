import React, { useCallback, useMemo } from "react";
import { Input, Button } from "antd";
import { CHANGE_INTRO_REQUEST } from "../../actions/user";
import { useSelector, useDispatch } from "react-redux";

import useInput from "../../hooks/useInput";
import { IntroFormWrapper, IntroButton, IntroInputWrapper } from "./styles";

const IntroEditForm = () => {
  const dispatch = useDispatch();
  const { me, changeIntroLoading } = useSelector((state) => state.user);
  const [intro, onChangeIntro] = useInput(me?.intro || "");

  const onSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_INTRO_REQUEST,
      data: intro,
    });
  }, [intro]);

  const introStyle = useMemo(
    () => ({
      marginBottom: 8,
      backgroundColor: "#404042",
      borderColor: "gray",
      color: "white",
      borderRadius: 10,
    }),
    []
  );

  return (
    <IntroFormWrapper onFinish={onSubmit}>
      <label htmlFor="user-intro">내 소개</label>
      <br />
      <IntroInputWrapper>
        <Input.TextArea
          style={introStyle}
          value={intro}
          onChange={onChangeIntro}
          maxLength={100}
          placeholder="소개를 입력해주세요."
        />
      </IntroInputWrapper>
      <IntroButton>
        <Button type="primary" htmlType="submit" loading={changeIntroLoading}>
          등록
        </Button>
      </IntroButton>
    </IntroFormWrapper>
  );
};

export default IntroEditForm;
