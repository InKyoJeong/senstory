import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "antd";
import {
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
  StarOutlined,
} from "@ant-design/icons";
import {
  ADD_DIARY_REQUEST,
  REMOVE_DIARY_PHOTO,
  UPLOAD_PHOTOS_REQUEST,
} from "../../../actions/diary";
import useInput from "../../../hooks/useInput";
import Conditional from "../../../hocs/Conditional";
import {
  DiaryContentInput,
  DiaryModalForm,
  DiaryTitleInput,
  DiaryWriteFooter,
  DiaryWriteInner,
  DiaryWriteOverlay,
  FeelButton,
  FeelButtonWrapper,
  PhotoBorder,
  PhotoDisplay,
  PhotoEnrollWrapper,
} from "./styles";

const DiaryWriteForm = ({ modalOpen, onToggleModal }) => {
  if (!modalOpen) return null;

  const dispatch = useDispatch();
  const { photoPaths, addDiaryLoading, addDiaryFinish } = useSelector(
    (state) => state.diary
  );
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, onChangeContent, setContent] = useInput("");
  const [feel, setFeel] = useState(null);

  useEffect(() => {
    if (addDiaryFinish) {
      setTitle("");
      setContent("");
      setFeel(null);
    }
  }, [addDiaryFinish]);

  const onSubmit = useCallback(() => {
    if (!title || !title.trim()) {
      return alert("제목을 입력해주세요.");
    }
    if (!content) {
      return alert("내용을 입력해주세요.");
    }
    if (!feel) {
      return alert("기분을 선택해주세요.");
    }
    const formData = new FormData();
    photoPaths.forEach((v) => {
      formData.append("photo", v);
    });
    formData.append("title", title);
    formData.append("content", content);
    formData.append("feel", feel);
    console.log("formData", formData);
    return dispatch({
      type: ADD_DIARY_REQUEST,
      data: formData,
    });
  }, [title, content, feel, photoPaths]);

  const imageInput = useRef();

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    console.log("photos", e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append("photo", f);
    });
    dispatch({
      type: UPLOAD_PHOTOS_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onChangeFeel = useCallback((e) => {
    setFeel(e.target.innerText);
  }, []);

  const onResetContents = useCallback(() => {
    setTitle("");
    setContent("");
    setFeel(null);

    return dispatch({
      type: REMOVE_DIARY_PHOTO,
      data: 0,
    });
  }, []);

  return (
    <DiaryWriteOverlay>
      <DiaryModalForm>
        <Form encType="multipart/form-data" onFinish={onSubmit}>
          <DiaryWriteInner>
            <DiaryTitleInput
              value={title}
              onChange={onChangeTitle}
              placeholder="제목을 입력하세요."
            />

            <DiaryContentInput
              value={content}
              onChange={onChangeContent}
              maxLength={500}
              placeholder="내용을 입력하세요."
              rows={4}
            />

            <FeelButtonWrapper onClick={onChangeFeel} feel={feel}>
              <FeelButton>
                <StarOutlined />
                Special
              </FeelButton>
              <FeelButton>
                <SmileOutlined />
                Good
              </FeelButton>
              <FeelButton>
                <MehOutlined />
                Soso
              </FeelButton>
              <FeelButton>
                <FrownOutlined />
                Bad
              </FeelButton>
            </FeelButtonWrapper>

            <PhotoDisplay>
              {photoPaths.map((v, i) => (
                <div key={v}>
                  <img src={`http://localhost:3065/${v}`} alt={v} />
                </div>
              ))}
            </PhotoDisplay>

            <input
              type="file"
              name="image"
              hidden
              ref={imageInput}
              onChange={onChangeImages}
            />
            <PhotoEnrollWrapper onClick={onClickImageUpload}>
              <Conditional condition={photoPaths.length === 0}>
                <PhotoBorder>
                  <div>+</div>
                  <div>사진 추가</div>
                </PhotoBorder>
              </Conditional>
            </PhotoEnrollWrapper>
          </DiaryWriteInner>

          <DiaryWriteFooter>
            <Button type="primary" htmlType="submit" loading={addDiaryLoading}>
              등록
            </Button>
            <Button
              type="default"
              onClick={() => {
                onToggleModal();
                onResetContents();
              }}
            >
              취소
            </Button>
          </DiaryWriteFooter>
        </Form>
      </DiaryModalForm>
    </DiaryWriteOverlay>
  );
};

export default DiaryWriteForm;