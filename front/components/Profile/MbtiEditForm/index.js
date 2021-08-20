import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_MBTI_REQUEST } from "../../../actions/user";
import useInput from "../../../hooks/useInput";
import { MbtiEditButton, MbtiFormWrapper } from "./styles";

const MbtiEditForm = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const [mbti, onChangeMbti] = useInput(me?.mbti || "");

  const onSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_MBTI_REQUEST,
      data: mbti,
    });
  }, [mbti]);

  return (
    <MbtiFormWrapper onFinish={onSubmit}>
      <label htmlFor="user-mbti">MBTI</label>
      <br />
      <div>
        <select
          value={mbti}
          name="mbtis"
          id="mbti-select"
          onChange={onChangeMbti}
        >
          <option value="">--MBTI 선택--</option>
          <option value="ISTJ">ISTJ</option>
          <option value="ISTP">ISTP</option>
          <option value="ISFJ">ISFJ</option>
          <option value="ISFP">ISFP</option>
          <option value="INTJ">INTJ</option>
          <option value="INTP">INTP</option>
          <option value="INFJ">INFJ</option>
          <option value="INFP">INFP</option>
          <option value="ESTJ">ESTJ</option>
          <option value="ESTP">ESTP</option>
          <option value="ESFJ">ESFJ</option>
          <option value="ESFP">ESFP</option>
          <option value="ENTJ">ENTJ</option>
          <option value="ENTP">ENTP</option>
          <option value="ENFJ">ENFJ</option>
          <option value="ENFP">ENFP</option>
        </select>

        <MbtiEditButton htmlType="submit" type="primary">
          변경
        </MbtiEditButton>
      </div>
    </MbtiFormWrapper>
  );
};

export default MbtiEditForm;
