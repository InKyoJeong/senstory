import React, { useCallback, useEffect, useRef, useState } from "react";
import useInput from "../../hooks/useInput";
import { Form, Button, Input } from "antd";
import { ADD_DIARY_REQUEST, UPLOAD_PHOTOS_REQUEST } from "../../actions/diary";
import { useDispatch, useSelector } from "react-redux";
import {
  FrownOutlined,
  MehOutlined,
  PictureFilled,
  SmileOutlined,
  StarOutlined,
} from "@ant-design/icons";
import {
  DiaryContentInput,
  DiaryModalForm,
  DiaryTitleInput,
  DiaryWriteOverlay,
  FeelButton,
  FeelButtonWrapper,
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

  return (
    <DiaryWriteOverlay>
      <DiaryModalForm>
        <Form
          encType="multipart/form-data"
          onFinish={onSubmit}
          style={{ width: "100%" }}
        >
          <div style={{ padding: 10 }}>
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

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
              }}
            >
              {photoPaths.map((v, i) => (
                <div key={v}>
                  <img
                    src={`http://localhost:3065/${v}`}
                    alt={v}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                    }}
                  />
                  {/* <Button onClick={onRemoveImage(i)} /> */}
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
              }}
            >
              <input
                type="file"
                name="image"
                // multiple
                hidden
                ref={imageInput}
                onChange={onChangeImages}
              />
              <Button onClick={onClickImageUpload}>
                <PictureFilled />
                {/* 사진 등록 */}
              </Button>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              loading={addDiaryLoading}
              style={{ width: "50%", borderBottomLeftRadius: 10, height: 40 }}
            >
              등록
            </Button>
            <Button
              type="default"
              onClick={onToggleModal}
              style={{
                width: "50%",
                borderBottomRightRadius: 10,
                height: 40,
                backgroundColor: "#e0cccc",
                border: "none",
              }}
            >
              취소
            </Button>
          </div>
        </Form>
      </DiaryModalForm>
    </DiaryWriteOverlay>
  );
};

export default DiaryWriteForm;
