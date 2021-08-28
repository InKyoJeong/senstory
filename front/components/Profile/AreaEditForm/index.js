import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_AREA_REQUEST } from "../../../actions/user";

import Conditional from "../../../hocs/Conditional";
import useToggle from "../../../hooks/useToggle";
import useInput from "../../../hooks/useInput";
import Modal from "../../common/Modal";
import { AreaFormWrapper, AreaInput } from "./styles";
import ChangeButton from "../ChangeButton";

const AreaEditForm = () => {
  const dispatch = useDispatch();
  const { me, changeAreaLoading, changeAreaFinish } = useSelector(
    (state) => state.user
  );
  const [area, onChangeArea, setArea] = useInput(me?.area || "");
  const [modalOpen, onToggleModal] = useToggle(false);

  useEffect(() => {
    if (changeAreaFinish) {
      onToggleModal();
    }
  }, [changeAreaFinish]);

  if (area.length > 20) {
    setArea(area.slice(0, 10));
    return alert("최대 10자로 입력해주세요.");
  }

  const onSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_AREA_REQUEST,
      data: area,
    });
  }, [area]);

  return (
    <AreaFormWrapper onFinish={onSubmit}>
      <label htmlFor="user-area">활동 지역</label>
      <br />
      <div>
        <AreaInput
          name="area"
          value={area}
          onChange={onChangeArea}
          type="text"
          placeholder={"활동지역 (최대 10자)"}
        />
        <ChangeButton loading={changeAreaLoading} />
      </div>

      <Conditional condition={modalOpen}>
        <Modal title="활동지역 변경 완료" onToggleModal={onToggleModal} />
      </Conditional>
    </AreaFormWrapper>
  );
};

export default AreaEditForm;
